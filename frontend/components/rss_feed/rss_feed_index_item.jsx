import React from 'react';

class RssFeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, description, url } = this.props.article;

    return (
      <div className="rss-feed-index-item">
        <a 
          className="rss-feed-item-anchor-tag"
          href={url}
          target="_blank">
          <span
            className="rss-feed-item-title"
            >{title}</span>
          <span
            className="rss-feed-item-description"
            >{description}</span>
        </a>
      </div>
    );
  }
}

export default RssFeedIndex;