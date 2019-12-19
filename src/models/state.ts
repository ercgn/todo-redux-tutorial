import { VisibilityFilters } from '../slices/filtersSlice';

export type VisibilityFilterState = {
  visibilityFilter: VisibilityFilters;
};

export type AppState = VisibilityFilterState;
