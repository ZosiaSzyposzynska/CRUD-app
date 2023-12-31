import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const PostSummary = ({ title, shortDescription, content, author, publishedDate, id, category}) => {
  
  const formattedDate = new Date(publishedDate).toLocaleDateString();



 

  return (
    <div className="card mb-3 mt-3">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text font-weight-bold">Author: {author}</p>
        <p className="card-text font-weight-bold">Published Date: {formattedDate}</p>
        <p className="card-text font-weight-bold">Category: {category}</p>
        <p className="card-text">{shortDescription}</p>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: content }} />

        <Link to={`/post/${id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostSummary;
