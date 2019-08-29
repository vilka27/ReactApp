import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Api from '../services/API';

class BigItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
    if (props.match.params.title) {
      const api = new Api();
      api.getByTitle(this, props.match.params.title);
    }
    if (props.match.params.date) {
      const api = new Api();
      api.getByDate(this, props.match.params.date);
    }
  }

  render() {
    const { item } = this.state;
    const {
      title, urlToImage, publishedAt, description, url, error,
    } = item;
    if (error) {
      return (<h1>{error}</h1>);
    }
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

BigItem.defaultProps = {
  match: {},
};
BigItem.propTypes = {
  match: PropTypes.object,
};

export default BigItem;
