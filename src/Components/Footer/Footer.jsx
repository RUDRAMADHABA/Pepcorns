import React from "react";
import "./footer.css";
import logo from "../../Images/logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer-container d-flex">
        <div className="footer-upper">
          <div className="footer-column-1">
            <img src={logo} alt="" />
            <p>
              Enabling everyday people to invest in startups they believe in
            </p>
            <div className="social-links d-flex">
              <a href="./" className="">
                Fb
              </a>
              <a href="./" className="">
                In
              </a>
              <a href="./" className="">
                Li
              </a>
              <a href="./" className="">
                Di
              </a>
            </div>
          </div>
          <div className="footer-column-2">
            <div>
              {" "}
              <h3>FOR INVESTORS</h3>
              <a href="./">Start Investing</a>
              <a href="./">How Investing works</a>
            </div>
            
          </div>
          <div className="footer-column-3">
            <div>
              <h3>FOR STARTUPS</h3>
              <a href="./">Raise Capital</a>
              <a href="./">How it works</a>
              <a href="./">Instruments</a>
            </div>
            
          </div>
          <div className="footer-column-4">
            <div>
              <h3> COMPANY</h3>
              <a href="./"> About</a>
              <a href="./"> Blog</a>
              <a href="./"> FAQ</a>
              <a href="./"> Contact</a>
              <a href="./">We're hiring</a>
            </div>
           </div>
          <div className="footer-column-5">
            <div>
              <p> location_on Kanpur| Bengaluru |Delhi mail</p>
              <a href="mail:to support@pepcorns.com"> support@pepcorns.com</a>
            </div>
            
          </div>
        </div>
          <div className="middle-section">
            <div></div>
          <div>
              <a href="./">Terms Of Use</a>
            </div>
          <div>
              <a href="./">Privacy Policy</a>
            </div>
          <div>
              <a href="./">Refund Policy</a>
            </div>
             <div>
              <a href="./">Risks</a>
            </div></div>
        <div className="footer-bottom">
         <p><span className="blue-text"><a href="www.prepcorns.com">www.prepcorns.com</a></span> (“Platform”) is a website owned and operated by
          Pepcorns Technologies Private Limited (“Pepcorns”), which is neither a
          registered stock exchange, an investment advisor nor a funding portal
          and is not registered with the Securities Exchange Board of India
          (“SEBI”). Nothing contained on this Platform shall be construed as an
          authorization by the SEBI to solicit investments nor should the
          Platform be construed as a SEBI authorized crowdfunding platform or a
          stock exchange, or their equivalent. The securities offered by any
          company registered on Platform are not traded on any stock exchange
          recognised by SEBI. Pepcorns does not allow any secondary market
          trading of securities on the Platform. By accessing this Platform and
          any pages thereof, you agree to be bound by the <span className="blue-text">Terms of Use</span> and
          <span className="blue-text"> Privacy Policy </span>. Investing in start-ups and early-stage businesses
          involves risks, including illiquidity, lack of dividends, loss of
          investment and dilution, and it should be done only as part of a
          diversified portfolio. Pepcorns is targeted exclusively at investors
          who are sufficiently sophisticated to understand these risks and make
          their own investment decisions. Please read our <span className="blue-text"> RISK POLICY</span> .</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
