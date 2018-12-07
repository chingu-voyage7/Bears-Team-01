import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark text-center">
  <div className="footer-top">
    <div class="row">
      <div className="col-md-3 col-sm-6">
        <h5 title is-5>Beercraft</h5>
      </div>
      <div className="col-md-3 col-sm-6">
        <h5 title is-5>Explore</h5>
      </div>
      <div className="col-md-3 col-sm-6">
        <h5 title is-5>Share</h5>
      </div>
      <div className="col-md-3 col-sm-6">
        <h5 title is-5>Contact</h5>
        <ul className="list-unstyled">
          <li><Link to="/">Email</Link></li>
          <li><Link to="/">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
    </div>
      <div className="footer-bottom text-muted">
        <div className="row">
         <div className="col-md-12">
           <p>Copyright &copy; {new Date().getFullYear()} BeerCraft</p>
          </div>
        </div>
      </div>
  </footer>
)

export default Footer;
