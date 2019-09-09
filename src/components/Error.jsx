import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

function Error(props) {
  const { error } = props;
  return (
    <Alert color="danger">{error.message}</Alert>
  );
}


Error.defaultProps = {
  error: {
    message: 'Something went wrong',
  },
};

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default Error;
