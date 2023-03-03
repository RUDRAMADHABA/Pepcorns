import React from "react";
import "./dashBoard.css";
import cosiq from "../../../Images/cosiq.png";
const DashBoard = () => {
  return (
    <>
      <div className="dashboard-section">
        <a href="./" className="back-btn">
          Back
        </a>

        <div className="dashboard-hero-section">
          <div className="hero-top-section d-flex">
            <div className="dashboard-logo d-flex">
              <div>
                <img src={cosiq} alt="" />
              </div>
              <div className="logo-details">
                <p>CosIQ</p>
                <span>Delhi,</span>
              </div>
            </div>

            <div className="hero-top-section-btns d-flex">
              <a href="./" className="save-btn">
                Save
              </a>
              <a href="./" className="share-btn">
                Share
              </a>
            </div>
          </div>

          <div className="hero-center-section d-flex">
            <div className="hashtag-wrapper">
              <span className="hashtag1">#Beauty and Personal care</span>
              <span className="hashtag2">#Shark TAnk</span>
              <span className="hashtag3">#FMCG</span>
            </div>

            <div className="description">
              We make skincare Intelligent. First skincare brand in India to
              perform independent clinical trials and develop products based on
              it.
            </div>
            <div className="description-links">
              <a href="https://mycosiq.com/">https://mycosiq.com/</a>
              <span>AAGCI5003E</span>
            </div>

            <div className="video-wrapper">
              <iframe
                width="100%"
                height="345"
                src="https://www.youtube.com/embed/kFII05-bhGU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="video-description">
                <div>
                  <h3>Rs. 0</h3>
                  <span>0 % of minimum goal raised</span>
                </div>
                <div>
                  <h3>0</h3>
                  <span>Total investors</span>
                </div>
                <div>
                  <h3>28 Days</h3>
                  <span>Left to Invest</span>
                </div>
                <button><a href="./" className="invest-now-btn ">Invest Now</a></button>
                <p>₹ 1000 Minimum Investment</p>
              </div>
            </div>
            <div><a className="video-link-below" href="https://www.youtube.com/watch?v=kFII05-bhGU">Unable to view video ? Click here</a></div>

          </div>

          <div className="hero-bottom-section d-flex">
            <a href="./" className="hero-bottom-section-btn active">Pitch</a>
            <a href="./" className="hero-bottom-section-btn">Details</a>
            <a href="./" className="hero-bottom-section-btn">Discussion</a>
            <a href="./" className="hero-bottom-section-btn">Updates</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
