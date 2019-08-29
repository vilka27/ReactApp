import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const {
    title, urlToImage, description, url, publishedAt,
  } = props;
  return (
    <div className="item">
      {urlToImage ? <img src={urlToImage} alt="article" /> : ''}
      <h2>{title}</h2>
      <div className="item_desc">
        {description}
        {url ? <a href={url}> Читать далее</a> : ''}
      </div>
      <p>
        {' '}
        {publishedAt ? publishedAt.replace('T', ' ').replace('Z', '') : ''}
      </p>
    </div>
  );
}

Item.defaultProps = {
  title: true,
  urlToImage: false,
  url: false,
  description: false,
  publishedAt: false,
};
Item.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default Item;
