import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-center">
    <div class="row">
      <div className="col-md-3 col-sm-6">Beercraft</div>
      <div className="col-md-3 col-sm-6">Content</div>
      <div className="col-md-3 col-sm-6">Content</div>
      <div className="col-md-3 col-sm-6">Content</div>
    </div>
      <div className="footer-bottom">
        <div className="row">
         <div className="col-md-12">
           <p>Copyright &copy; {new Date().getFullYear()} BeerCraft</p>
          </div>
        </div>
      </div>
  </footer>
)

export default Footer;
