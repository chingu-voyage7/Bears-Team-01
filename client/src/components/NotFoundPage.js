import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="text-center vertical-center">
      <h1 className="display-3 font-weight-bold">404</h1>
      <h2 className="display-5 font-weight-light">Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>  
);

export default NotFoundPage;
