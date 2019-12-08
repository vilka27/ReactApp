/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import PaginationComp from './PaginationComp';
import Loader from './Loader';
import Filter from './Filter';
import SearchByTitle from './SerchByTitle';
import PageSizeChanger from './PageSizeChanger';
import Error from './Error';
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
      currentPage, pageSize, allItems, setPage, setItem, isFetching, error,
    } = this.props;
    if (isFetching) {
      return (<Loader />);
    }
    if (error !== null) {
      return <Error error={error} />;
    }
    const items = allItems.slice(pageSize * (currentPage - 1), pageSize * currentPage);
    return (
      <div id="catalog">
        <PaginationComp
          page={currentPage}
          totalPages={Math.ceil(allItems.length / pageSize)}
          oncl={setPage}
        />
        <div id="sidebar">
          <Filter />
          <SearchByTitle />
		  <PageSizeChanger />
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
  error: state.error,
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
  error: null,
};

Catalog.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  allItems: PropTypes.array,
  setPage: PropTypes.func,
  setItem: PropTypes.func,
  fetchItems: PropTypes.func,
  isFetching: PropTypes.bool,
  error: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
