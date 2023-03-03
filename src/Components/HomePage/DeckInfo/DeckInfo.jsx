import React from 'react'
import "./deckInfo.css"
import weMakeSkincare from "../../../Images/we make skincare intelligent.png"
import market from "../../../Images/market.png"
import founders from "../../../Images/founders.png"
import mission from "../../../Images/mission.png"
import brandPositioning from "../../../Images/brandPositioning.png"
import howWe from "../../../Images/how we are doin it.png"
import traction from "../../../Images/traction.png"
import keyMetrices from "../../../Images/key metrices.png"
import roadmap from "../../../Images/roadmap.png"
import onlinePresence from "../../../Images/online presence.png"

const DeckInfo = () => {
  return (
    <>
    <div className="image-container d-flex">
        
     <img src={weMakeSkincare} alt="" /> 
     <img src={market} alt="" /> 
     <img src={founders} alt="" /> 
     <img src={mission} alt="" /> 
     <img src={brandPositioning} alt="" /> 
     <img src={howWe} alt="" /> 
     <img src={traction} alt="" /> 
     <img src={keyMetrices} alt="" /> 
     <img src={roadmap} alt="" /> 
     <img src={onlinePresence} alt="" /> 
    </div>
    </>
  )
}

export default DeckInfo
