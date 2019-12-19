import React, { Component } from 'react';
import { VisibilityFilters } from '../slices/filtersSlice';
import { FilterLink } from '../containers/FilterLink';

type FooterProps = {};

export class Footer extends Component<FooterProps, {}> {
  public render() {
    return (
      <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.All}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.All}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.All}>Completed</FilterLink>
      </div>
    );
  }
}
