import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="paddings innerWidth flexCenter f-container">
        {/* left-side */}
        <div className="flexColStart f-left">
            <img src="./logo.png" alt="" width={120}/>
            <span className="primaryText primary-col">
                Our vision is to make all people <br />
                wear the best watches.
            </span>
        </div>
        {/* right-side */}
        <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">145 Banglore, India</span>
            <div className="flexCenter f-menu">
                <span>Watches</span>
                <span>About Us</span>
                <span>Services</span>
            </div>
        </div>
    </div>
  )
}

export default Footer