import React from 'react';
import RssFeedIndexContainer from './rss_feed_index_container';

class RssFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bbcNews: undefined,
      currentRSS: undefined,
    };

    this.getRSS = this.getRSS.bind(this);
  }

  componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?' +
              'sources=bbc-news&' +
              'apiKey=5152cd069b9146cf87886241e6a95df9';

    // bbc-news line chart
    // new-scientist thermostat flask
    // bbc-sport  soccer ball futball
    // buzzfeed  film  gamepad
    // the-hill  bank

    this.props.getRSS(url).then( response => this.setState({ currentRSS: response }));
    }

  getRSS(source) {
    let url = 'https://newsapi.org/v2/top-headlines?' +
    `sources=${source}&` +
    'apiKey=5152cd069b9146cf87886241e6a95df9';
    
    this.props.getRSS(url).then(response => this.setState({ currentRSS: response }));

    $('.rss-feed-header-right i').removeClass('rss-selected');
    $(`#${source}`).addClass('rss-selected');
  }
    
  render() {
    let { currentRSS } = this.state;
    if (!currentRSS) {
      return null;
    }

    return (
      <div className="rss-feed-container">
        <div className="rss-feed-header">
          <div className="rss-feed-title">
            Trending
          </div>

          <div className="rss-feed-header-right">
            <i
              id="bbc-news"
              className="fa fa-line-chart rss-button rss-selected"
              aria-hidden="true"
              onClick={() => this.getRSS('bbc-news')}
              ></i>
            <i
              id="the-hill"
              className="fa fa-university rss-button"
              aria-hidden="true"
              onClick={() => this.getRSS('the-hill')}
              ></i>
            <i
              id="new-scientist"
              className="fa fa-flask rss-button"
              aria-hidden="true"
              onClick={() => this.getRSS('new-scientist')}
              ></i>
            <i
              id="bbc-sport"
              className="fa fa-futbol-o rss-button"
              aria-hidden="true"
              onClick={() => this.getRSS('bbc-sport')}
              ></i>
            <i
              id="buzzfeed"
              className="fa fa-gamepad rss-button"
              aria-hidden="true"
              onClick={() => this.getRSS('buzzfeed')}
              ></i>
          </div>
        </div>
          <RssFeedIndexContainer 
            response={this.state.currentRSS}
            />

      </div>
    );
  }
}

export default RssFeed;