import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType, ProfileType, updateNewPostText} from "../../redux/state";

const Profile = (props:ProfileType) => {
  return (
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText} //?
                 updateNewPostText={props.updateNewPostText}
                 addPost={props.addPost}/>
      </div>
  );
};

export default Profile;