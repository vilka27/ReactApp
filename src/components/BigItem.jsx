/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import Item from './Item';
import Error from './Error';
import { fetchArticleByDate } from '../actions';

class BigItem extends React.Component {
  componentDidMount() {
    const { match, item, fetchItemByDate } = this.props;
    if (match.params.date && !item) {
      fetchItemByDate(match.params.date);
    }
  }

  render() {
    const { item, isFetching, error } = this.props;
    if (isFetching) {
      return (<Spinner color="dark" />);
    }
    if (error !== null) {
      return <Error error={error} />;
    }
    const {
      title, urlToImage, publishedAt, description, url,
    } = item;
    return (
      <div id="bigItem">
        <Item
          title={title}
          urlToImage={urlToImage}
          publishedAt={publishedAt}
          description={description}
          url={url}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.currentItem,
  isFetching: state.isFetching,
  error: state.error,
});
function mapDispatchToProps(dispatch) {
  return {
    fetchItemByDate: (date) => {
      dispatch(fetchArticleByDate(date));
    },
  };
}

BigItem.defaultProps = {
  match: {},
  item: null,
  fetchItemByDate: PropTypes.func,
  isFetching: true,
  error: null,
};

BigItem.propTypes = {
  error: PropTypes.object,
  match: PropTypes.object,
  item: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
  fetchItemByDate: PropTypes.func,
  isFetching: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(BigItem);
