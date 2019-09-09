
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesByTitle } from '../actions';

function SearchByTitle(props) {
  return (
    <div>
      <h4>Искать в названии:</h4>
      <input
        type="text"
        name="search"
        onKeyDown={(event) => {
          if (event.key === 'Enter') { props.searchBy(event.target.value); }
        }}
        onBlur={(event) => props.searchBy(event.target.value)}
      />
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    searchBy: (title) => {
      dispatch(fetchArticlesByTitle(title));
    },
  };
}

SearchByTitle.defaultProps = {
  searchBy: PropTypes.func,
};

SearchByTitle.propTypes = {
  searchBy: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SearchByTitle);
