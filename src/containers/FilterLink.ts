import { connect } from 'react-redux';
import { setVisibilityFilter, VisibilityFilters } from '../slices/filtersSlice';
import { Link } from '../components/Link';
import { VisibilityFilterState } from '../models/state';

type OwnProps = {
  filter: VisibilityFilters;
};

function mapStateToProps(state: VisibilityFilterState, ownProps: OwnProps) {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
}

const mapDispatchToProps = { setVisibilityFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Link);
