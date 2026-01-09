
export function findAffectedCcyPairs(
  overriddenAssets: readonly Asset[],
  ccyPairToCcy: CcyPairToCcyMap,
  ccyPairToMasters: CcyPairToMasterPairMap
): ReadonlySet<CcyPair> {
  const affected = new Set<CcyPair>();

  // 1) Seed from overridden pairs
  for (const asset of overriddenAssets) {
    if (isCcyPair(asset)) {
      affected.add(asset);
    }
  }

  // 2) Seed from overridden currencies
  for (const asset of overriddenAssets) {
    if (!isCcyPair(asset)) {
      for (const [pair, ccys] of Object.entries(ccyPairToCcy)) {
        if (ccys.has(asset)) {
          affected.add(pair);
        }
      }
    }
  }

  // 3) Walk master hierarchy upwards (transitive closure)
  const queue = [...affected];

  while (queue.length > 0) {
    const pair = queue.pop()!;
    const masters = ccyPairToMasters[pair] ?? [];

    for (const master of masters) {
      if (!affected.has(master)) {
        affected.add(master);
        queue.push(master);
      }
    }
  }

  return affected;
}
