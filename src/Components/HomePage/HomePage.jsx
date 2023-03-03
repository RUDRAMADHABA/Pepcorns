import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import DeckInfo from './DeckInfo/DeckInfo'
import "./homePage.css"

const HomePage = () => {
  return (
    <>
     <div className="homePage-container">
        <DashBoard/>
        <div className="deck-info-container">
        <DeckInfo/>
<div className="documents "> 
    <h2>Documents</h2>
    <div className="links d-flex">
        <a href="./">CosIQ.zip</a>
        <a href="./">cloud Download</a>
        </div>
        <p>Custom Offer? <a href="./"> Click Here</a></p>
</div>
        </div>
        </div> 
    </>
  )
}

export default HomePage
