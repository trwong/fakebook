# Fakebook

Fakebook, a faithful Facebook clone, is a social networking site to connect with friends. It makes use of a Rails/PostgreSQL backend with React.js and Redux on the frontend.

The project was designed and built within a two-week timeframe, though I plan to continue adding improvements over time.

## Features
* Secure frontend to backend user authentication using BCrypt
* Users can create and edit posts on their wall or to other users
* News feed shows users an aggregated view of their friend's activity
* Profile pages contain relevant posts and allow users to upload profile and cover pictures
* Users can friend other users to see that user's activity on their news feed
* Search allows users to quickly find friends they may know

### Post Creation

![profile page screenshot](http://res.cloudinary.com/trwong/image/upload/v1512171240/Screen_Shot_2017-12-01_at_3.30.20_PM_l25pzf.png)

To maintain DRY code, the posts container, including the post form and post index, was used on both the user's news feed and profile. Each page requires a different filtered view of posts. I utilized route information to dictate how the controller would return filtered posts.

```javascript
componentDidMount() {
    if (this.props.match.params.userId) {
      this.props.fetchPosts(this.props.match.params.userId);
    } else {
      this.props.fetchPosts();
    }
  } 
  ```

### User Search

![news feed search screenshot](http://res.cloudinary.com/trwong/image/upload/v1512171239/Screen_Shot_2017-12-01_at_3.33.17_PM_pnvfll.png)

While user search was not a MVP, I believe it is a core feature in Fakebook to find and connect with others. Searching fired an Ajax request on input change that used a SQL wildcard search to return a list of users.


## Project Design
Fakebook was designed to closely mimic the functionality and look and feel of Facebook. With a two-week time period in mind, I prioritized implementing the core set of features. 

## Technologies

### Additional Resources
* [Proposal Wireframes] (https://github.com/trwong/fakebook/wiki/Wireframes)
* [API Endpoints] (https://github.com/trwong/fakebook/wiki/Routes)
* [Database Schema] (https://github.com/trwong/fakebook/wiki/Database-Schema)

## Possible future features
* Notifications
* People you may know
* Messaging
