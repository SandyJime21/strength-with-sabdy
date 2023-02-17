import React from "react";

function Footer(){
    return(
        <div className="site-footer">
         
      <div className="container">
        <div className="testimonial-row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">  is an initiative  to help the upcoming pd Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Certificates</h6>
            <ul className="footer-links">
              <li><a href="www.google.com">About</a></li>
              <li><a href="www.google.com">Content</a></li>
              <li><a href="www.google.com">Content</a></li>
                       </ul>
          </div>

          <div>
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="www.google.com">About Us</a></li>
              <li><a href="www.google.com">Contact Us</a></li>
              <li><a href="www.google.com">Contribute</a></li>
              <li><a href="www.google.com">Privacy Policy</a></li>
              <li><a href="www.google.com">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="testimonial-row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="www.google.com">Strength with Sabdy</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="www.google.com"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="www.google.com"><i className="fa fa-twitter"></i></a></li>
              <li><a className="linkedin" href="www.google.com"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>

        </div>
    )
}

export default Footer ;