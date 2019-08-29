import React from 'react';
import ItemList from './ItemList';
import Pagination from './Pagination';
import Api from '../services/API';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentPage: 1,
      totalItems: 0,
      pageSize: 6,
      error: null,
    };
    this.api = new Api();
    const { currentPage } = this.state;
    this.api.getByPage(this, currentPage);
    this.setPage(1);
  }

  setPage(page) {
    const { currentPage } = this.state;
    if (page !== currentPage) {
      this.api.getByPage(this, page);
    }
  }

  render() {
    const {
      currentPage, totalItems, pageSize, items, error,
    } = this.state;
    if (error) {
      return (<h1>{error}</h1>);
    }
    return (
      <div id="catalog">
        <Pagination
          page={currentPage}
          totalPages={Math.floor(totalItems / pageSize)}
          oncl={(n) => (this.setPage(n))}
        />
        <ItemList
          items={items}
        />
      </div>
    );
  }
}

export default Catalog;
