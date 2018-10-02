import React from 'react';

const PostPreview = (props) => (
  <div className="post-preview">
    <a href="post.html">
      <h2 className="post-title">
       {props.title}
      </h2>
      <h3 className="post-subtitle">
        {props.subtitle}
      </h3>
    </a>
    <p className="post-meta">Posted by
      <a href="#">Start Bootstrap</a>
      on September 24, 2018</p>
  </div>
)

export default PostPreview;
