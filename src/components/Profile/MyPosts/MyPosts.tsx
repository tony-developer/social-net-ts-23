import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfileType} from "../../../redux/state";

const MyPosts = (props:ProfileType) => {
    const postsElements = props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement:any= React.createRef();
    let addPost = ()=> {
        // let text = newPostElement.current.value;
        props.addPost()
        // props.updateNewPostText('')
    }

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

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