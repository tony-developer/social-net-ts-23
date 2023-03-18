import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfileType} from "../../../redux/state";


/*let postsData = [
    {id: 1, message: "Hi! How are you?", likesCount: 12},
    {id: 2, message: "it's my first post",likesCount: 11}
]*/

const MyPosts = (props:ProfileType) => {
    const postsElements = props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)

  return (
        <div className={s.postsBlock}>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
              {postsElements}
          </div>
        </div>
  );
};

export default MyPosts;