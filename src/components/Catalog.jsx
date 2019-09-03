/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import Pagination from './Pagination';
import Loader from './Loader';
import { fetchArticles, setCurrentPage, setCurrentItem } from '../actions';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    if (!props.allItems || props.allItems.length < 5) {
      props.fetchItems();
    }
  }

  render() {
    const {
      currentPage, pageSize, allItems, setPage, setItem, isFetching,
    } = this.props;
    if (isFetching) {
      return (<Loader />);
    }
    const items = allItems.slice(pageSize * (currentPage - 1), pageSize * currentPage);
    return (
      <div id="catalog">
        <Pagination
          page={currentPage}
          totalPages={Math.floor(allItems.length / pageSize)}
          oncl={setPage}
        />
        <ItemList
          items={items}
          itemOnClick={(item) => setItem(item)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  pageSize: state.pageSize,
  allItems: state.items,
  isFetching: state.isFetching,
});
function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => {
      dispatch(fetchArticles());
    },
    setPage: (page) => {
      dispatch(setCurrentPage(page));
    },
    setItem: (item) => {
      dispatch(setCurrentItem(item));
    },
  };
}

Catalog.defaultProps = {
  currentPage: 1,
  pageSize: 6,
  allItems: [],
  setPage: PropTypes.func,
  setItem: PropTypes.func,
  fetchItems: PropTypes.func,
  isFetching: true,
};

Catalog.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  allItems: PropTypes.array,
  setPage: PropTypes.func,
  setItem: PropTypes.func,
  fetchItems: PropTypes.func,
  isFetching: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
