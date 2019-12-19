import React, { Component } from 'react';
import { VisibilityFilters } from '../slices/filtersSlice';

type LinkStateProps = {
  readonly active: boolean;
  readonly filter: VisibilityFilters;
};

type LinkDispatchProps = {
  readonly setVisibilityFilter: (filter: VisibilityFilters) => void;
};

type LinkProps = LinkStateProps & LinkDispatchProps;

export class Link extends Component<LinkProps, {}> {
  public render() {
    const { children, active, filter, setVisibilityFilter } = this.props;
    return (
      <button
        onClick={() => setVisibilityFilter(filter)}
        disabled={active}
        style={{
          marginLeft: '4px',
        }}
      >
        {children}
      </button>
    );
  }
}
