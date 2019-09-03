/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from './Item';


function ItemList(props) {
  const { items, itemOnClick } = props;
  const newItems = items.map((item) => (
    <Link
      to={{ pathname: `/articles/${item.publishedAt}` }}
      onClick={() => itemOnClick(item)}
    >
      <Item
        title={item.title}
        publishedAt={item.publishedAt}
      />
    </Link>

  ));
  return (
    <div id="itemList">
      {newItems}
    </div>
  );
}

ItemList.defaultProps = {
  items: [],
  itemOnClick: PropTypes.func,
};
ItemList.propTypes = {
  items: PropTypes.array,
  itemOnClick: PropTypes.func,
};
export default ItemList;
