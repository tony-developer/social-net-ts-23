import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostType, ProfileType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props:ProfileType) => {
    const postsElements = props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement:any= React.createRef();
    let addPost = ()=> {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText:text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

  return (
        <div className={s.postsBlock}>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
              <button onClick={ addPost }>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
              {postsElements}
          </div>
        </div>
  );
};

export default MyPosts;