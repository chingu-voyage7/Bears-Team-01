import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo-sm.png';

const Footer = () => (
  <footer className="bg-dark text-center mt-4">
  <div className="footer-container">
    <div className="footer-top">
      <div className="row">
        <div className="col-lg-4 col-sm-12 p-0 footer-brand">
          <h4 className="title">
          <img className="footer-logo" alt="logo" src={logo}></img>
          <span>Beercraft</span>
          </h4>
        </div>
        <div className="col-lg-8 col-sm-12 p-0 footer-brand">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5 className="title">Explore</h5>
                <ul className="list-unstyled footer-list">
                  <li><Link className="footer-link" to="/">Trending</Link></li>
                  <li><Link className="footer-link" to="/">Latest</Link></li>
                  <li><Link className="footer-link" to="/browse">Browse</Link></li>
                </ul>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5 className="title">Share</h5>
              <ul className="list-unstyled footer-list">
                <li>
                  <Link className="footer-link" to="/">
                    <i className="fab fa-twitter footer-icon"></i> Twitter
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    <i className="fab fa-facebook footer-icon"></i> Facebook
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    <i className="fab fa-reddit footer-icon"></i> Reddit
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h5 className="title">Contact</h5>
              <ul className="list-unstyled footer-list">
                <li><Link className="footer-link" to="/">Email</Link></li>
                <li><Link className="footer-link" to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>  
          </div>      
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
    </div>
  </footer>
)

export default Footer;
