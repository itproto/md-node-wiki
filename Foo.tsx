import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";

/**
 * High-level intent:
 * “A currency pair was selected, keep family + pair consistent”
 */
export const selectPairAndSyncFamily = createAsyncThunk<
  void,
  CcyPair,
  { state: RootState }
>(
  "ccyFamilies/selectPairAndSyncFamily",
  (pair, { getState, dispatch }) => {
    const state = getState().ccyFamilies;

    const { ccyFamilies, selectedCcyFamilyName } = state;

    const currentFamily =
      ccyFamilies.find(f => f.name === selectedCcyFamilyName);

    // If no family selected yet, or current family doesn't contain the pair
    if (!currentFamily || !currentFamily.pairs.includes(pair)) {
      const targetFamily = ccyFamilies.find(f =>
        f.pairs.includes(pair)
      );

      if (targetFamily) {
        dispatch(selectCcyFamily(targetFamily));
      }
    }

    dispatch(selectCcyPair(pair));
  }
);
