import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

/*let posts = [
  {id: 1, message: "Hi! How are you?", likesCount: 12},
  {id: 2, message: "it's my first post",likesCount: 11}
]*/

const Profile = (props) => {
  return (
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
      </div>
  );
};

export default Profile;