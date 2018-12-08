import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo-sm.png';

const Footer = () => (
  <footer className="bg-dark text-center mt-4">
  <div className="footer-container">
    <div className="footer-top d-none d-sm-block">
      <div class="row">
        <div className="col-lg-4 col-sm-6 footer-brand">
          <h4 title>
          <img className="footer-logo" src={logo}></img>
          <span>Beercraft</span>
          </h4>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h5 title>Explore</h5>
            <ul className="list-unstyled footer-list">
              <li><Link className="footer-link" to="/">Trending</Link></li>
              <li><Link className="footer-link" to="/">Latest</Link></li>
              <li><Link className="footer-link" to="/">Browse</Link></li>
            </ul>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h5 title>Share</h5>
          <ul className="list-unstyled footer-list">
            <li>
              <Link className="footer-link" to="/">
                <i className="fab fa-twitter"></i> Twitter
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/">
                <i class="fab fa-facebook"></i> Facebook
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/">
                <i class="fab fa-reddit"></i> Reddit
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-6">
          <h5 title>Contact</h5>
          <ul className="list-unstyled footer-list">
            <li><Link className="footer-link" to="/">Email</Link></li>
            <li><Link className="footer-link" to="/">Privacy Policy</Link></li>
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
    </div>
  </footer>
)

export default Footer;
