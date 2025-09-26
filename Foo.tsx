function hasAdjacentOverlap(params, api) {
  const rowIndex = params.node.rowIndex;
  const { ccy, start, end } = params.data;

  // check previous row
  if (rowIndex > 0) {
    const prev = api.getDisplayedRowAtIndex(rowIndex - 1).data;
    if (prev.ccy === ccy && start.isBefore(prev.end) && prev.start.isBefore(end)) {
      return true;
    }
  }

  // check next row
  const nextNode = api.getDisplayedRowAtIndex(rowIndex + 1);
  if (nextNode) {
    const next = nextNode.data;
    if (next.ccy === ccy && start.isBefore(next.end) && next.start.isBefore(end)) {
      return true;
    }
  }

  return false;
}
