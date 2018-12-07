import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
  return (
    <div className="text-center vertical-center">
      <h1 className="display-3 font-weight-bold">404</h1>
      <h2 className="display-5 font-weight-light">Page Not Found</h2>
      <Link to="/">Go Home</Link>
      {props.history.length > 0 &&
        <button onClick={props.history.goBack}>Go Back</button>}
        
    </div>  
  );
}

export default NotFoundPage;
