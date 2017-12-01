import React from 'react';
import RssFeedIndexContainer from './rss_feed_index_container';

class RssFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bbcNews: undefined,
    };
  }

  componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?' +
              'sources=bbc-news&' +
              'apiKey=5152cd069b9146cf87886241e6a95df9';
    // let req = new Request(url);
    // // let bbcNews;
    // fetch(req)
    //   .then( response => {
    //     console.log("promise hell", response.articles);
        
    //     this.setState({bbcNews: response.json()});
    //     // bbcNews = response.json();
    //   });

    this.props.getRSS(url).then( response => this.setState({bbcNews: response}));
    }
    
  render() {
    console.log("bbc", this.state.bbcNews);
    let { bbcNews } = this.state;
    if (!bbcNews) {
      return null;
    }

    return (
      <div className="rss-feed-container">
        <div className="rss-feed-header">
          Trending
        </div>
          <RssFeedIndexContainer 
            response={this.state.bbcNews}
            />

      </div>
    );
  }
}

export default RssFeed;