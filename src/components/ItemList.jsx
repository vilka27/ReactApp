import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from './Item';


function ItemList(props) {
  const { items } = props;
  const newItems = items.map((item) => (
    <Link to={{ pathname: `/articles/${item.publishedAt}` }}>
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
};
ItemList.propTypes = {
  items: PropTypes.array,
};
export default ItemList;
