/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { filterSource } from '../actions';

function Filter(props) {
  const allSources = [
    'Fontanka.ru',
    'Lenta',
    'Nplus1.ru',
    'RT',
    'RBC',
  ];

  const checkBoxes = allSources.map((item) => {
    let checked;
    if (props.sourceFilter.includes(item)) {
      checked = true;
    } else {
      checked = false;
    }
    return (
      <li>
        <Input type="checkbox" id={item} name={item} checked={checked} onInput={() => props.toggleSource(item, props.sourceFilter)} />
        <Label htmlFor={item}>{item}</Label>
      </li>
    );
  });
  return (
    <div id="filter">
      <h4>Источник:</h4>
      <ul>
        {checkBoxes}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  sourceFilter: state.sourceFilter.slice(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleSource: (source, listOfSources) => {
      let newList;
      if (listOfSources.includes(source)) {
        newList = listOfSources.filter((item) => item !== source);
      } else {
        newList = listOfSources.slice();
        newList.push(source);
      }
      dispatch(filterSource(newList));
    },
  };
}

Filter.defaultProps = {
  toggleSource: PropTypes.func,
  sourceFilter: PropTypes.array,
};

Filter.propTypes = {
  toggleSource: PropTypes.func,
  sourceFilter: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
