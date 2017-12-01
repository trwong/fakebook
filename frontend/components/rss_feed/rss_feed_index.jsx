import React from 'react';
import RssFeedIndexItemContainer from './rss_feed_index_item_container';

class RssFeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { response } = this.props;
    if (!response) {
      return null;
    }

    let display = response.articles.map(article => (
      <RssFeedIndexItemContainer 
        article={article}
        key={article.publishedAt}/>
    ));

    return (
      <div>
        { display }
      </div>
    );
  }
}

export default RssFeedIndex;