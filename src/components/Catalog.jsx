/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import Pagination from './Pagination';
import Loader from './Loader';
import Filter from './Filter';
import SearchByTitle from './SerchByTitle';
import { fetchArticlesByTitle, setCurrentPage, setCurrentItem } from '../actions';

class Catalog extends React.Component {
  componentDidMount() {
    const { allItems, fetchItems } = this.props;
    if (!allItems || allItems.length < 2) {
      fetchItems();
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
        <div id="sidebar">
          <Filter />
          <SearchByTitle />
        </div>
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
  allItems: state.items.filter((item) => state.sourceFilter.includes(item.source.name)),
  isFetching: state.isFetching,
});
function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => {
      dispatch(fetchArticlesByTitle());
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
