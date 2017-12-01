import React from 'react';

class RssFeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, description, url } = this.props.article;

    return (
      <div className="rss-feed-index-item">
        <img
          className="trending-arrow-icon"
          src="https://res.cloudinary.com/trwong/image/upload/v1512153608/Screen_Shot_2017-12-01_at_10.38.54_AM_ktkjxr.png"
          alt="arrow icon"/>
        <span className="rss-feed-item-right-side">
          <a 
            className="rss-feed-item-anchor-tag"
            href={url}
            target="_blank">
            <div
              className="rss-feed-item-title"
              >{title}</div>
            <div
              className="rss-feed-item-description"
              >{description}</div>
          </a>
        </span>
      </div>
    );
  }
}

export default RssFeedIndex;