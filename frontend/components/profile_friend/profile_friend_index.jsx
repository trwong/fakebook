import React from 'react';
import ProfileFriendIndexItemContainer from './profile_friend_index_item_container';
import { Link } from 'react-router-dom';

class ProfileFriendIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: undefined
    };
  }

  componentWillMount() {
    this.props.fetchUsers().then(() => {
      // this.profileUser = this.props.users[this.props.match.params.userId];
      this.setState({profileUser: this.props.users[this.props.match.params.userId]});
    });
  }

  componentDidMount() {
    let { users } = this.props;
    this.setState({ profileUser: users[this.props.match.params.userId]});
  }

  componentWillReceiveProps(newProps) {
    let { users } = this.props;
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      // this.profileUser = users[newProps.match.params.userId];
      this.setState({ profileUser: users[newProps.match.params.userId]});
    }
  }

  render() {
    let { users } = this.props;
    // let profileUser = users[this.props.match.params.userId];
    let profileUser = this.state.profileUser;
    if (profileUser === undefined) {
      return null;
    }
    let { friends } = profileUser;
    let firstNineFriends;

    if (friends) {
      firstNineFriends = friends.slice(0, 9);
    }

    let display = (firstNineFriends && firstNineFriends.length > 0) ? (
      firstNineFriends.map((friendId) => (
        <ProfileFriendIndexItemContainer
          key={friendId}
          user={ users[friendId] } />
      ))
    ) : (
      <div
        className="profile-friend-index-no-friends-text"
        >No Friends :(</div>
    );

    return (
      <div className="profile-friend-index">
        <div className="profile-friend-index-header">
          <Link
            className="profile-friend-link"
            to={`/profile/${profileUser.id}/friends}`}>
            <i className="fa fa-users profile-friends-icon" aria-hidden="true"></i>
            <span
              className="profile-friends-header-text"
              >Friends</span>
          </Link>
          <span className="profile-friend-dot-container">
            <i className="fa fa-circle profile-circle-icon" aria-hidden="true"></i>
          </span>
          <span className="profile-friend-count">
            {friends ? friends.length : "0"}
          </span>
        </div>
        <div className="profile-friend-item-container">
          { display }
        </div>
      </div>
    );
  }
}

export default ProfileFriendIndex;