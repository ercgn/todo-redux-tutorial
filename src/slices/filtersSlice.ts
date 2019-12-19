import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum VisibilityFilters {
  All,
  Completed,
  Active,
}

type FiltersState = VisibilityFilters;

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.All as FiltersState,
  reducers: {
    setVisibilityFilter(
      state: FiltersState,
      action: PayloadAction<VisibilityFilters>
    ): FiltersState {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
