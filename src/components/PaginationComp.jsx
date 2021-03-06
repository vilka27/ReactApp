import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationComp(props) {
  const { page, oncl, totalPages } = props;
  return (
    <Pagination>
      <PaginationItem disabled={(page === 1)} onClick={() => oncl(1)}>
        <PaginationLink first />
      </PaginationItem>
      <PaginationItem disabled={(page === 1)} onClick={() => oncl(page - 1)}>
        <PaginationLink previous />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink>{page}</PaginationLink>
      </PaginationItem>
      <PaginationItem
        disabled={page === totalPages}
        onClick={() => oncl(page + 1)}
      >
        <PaginationLink next />
      </PaginationItem>
      <PaginationItem
        disabled={page === totalPages}
        onClick={() => oncl(totalPages)}
      >
        <PaginationLink last />
      </PaginationItem>
    </Pagination>
  );
}
PaginationComp.defaultProps = {
  page: 1,
  totalPages: 1,
  oncl: PropTypes.func,
};
PaginationComp.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  oncl: PropTypes.func,
};

export default PaginationComp;
