import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
            <div className={s.item}>
              <img src="https://ru-static.z-dn.net/files/d3b/f593eaec9976bb45317692d04609f94f.jpg" alt=""/>
              {props.message}
              <div>
                <span>like</span>
                <span>{props.count}</span>
              </div>
            </div>
  );
};

export default Post;