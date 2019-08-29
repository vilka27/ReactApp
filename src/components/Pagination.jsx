import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const { page, oncl, totalPages } = props;
  return (
    <div id="pagination">
      <span className="space" />
      <button
        id="paginationFirst"
        className="paginationButton"
        type="button"
        disabled={(page === 1)}
        onClick={() => oncl(1)}
      >
          ⭰
      </button>
      <button
        id="paginationPrev"
        className="paginationButton"
        disabled={(page === 1)}
        onClick={() => oncl(page - 1)}
        type="button"
      >
         🡨
      </button>
      <div className="paginationButton">{page}</div>
      <button
        id="paginationNext"
        className="paginationButton"
        disabled={page === totalPages}
        onClick={() => oncl(page + 1)}
        type="button"
      >
           🡪
      </button>
      <button
        id="paginationLast"
        className="paginationButton"
        disabled={page === totalPages}
        onClick={() => oncl(totalPages)}
        type="button"
      >
                        ⭲
      </button>
      <span className="space" />
    </div>
  );
}
Pagination.defaultProps = {
  page: 1,
  totalPages: 1,
  oncl: PropTypes.func,
};
Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  oncl: PropTypes.func,
};

export default Pagination;
