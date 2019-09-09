
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesByTitle } from '../actions';
import { Input, Label } from 'reactstrap';

function SearchByTitle(props) {
  return (
    <div>
      <Label for="search"><h4>Искать в названии:</h4></Label>
      <Input
        type="text"
        name="search"
		id="search"
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
