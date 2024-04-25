import React from 'react';

const Post = ({ imageUrl, title, content }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt="Card Image" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a Href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Post;
