import React from 'react'
import './Hero.css'
import {BsWatch} from 'react-icons/bs'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* left-side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Discover <br/>
                        Most Suitable <br/>
                        Watches
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className="secondaryText">Find varitiey of Watches that suits you</span>
                    <span className="secondaryText">American Craftsmanship and Swiss Accuracy</span>
                </div>
                <div className="flexCenter search-bar">
                    <BsWatch color="var(--blue)" size={25} />
                    <input type="text" />
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={9500} end={10000} duration={3} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText" >Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={4500} end={5000} duration={3} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText" >Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={18} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText" >Awards</span>
                    </div>
                </div>
            </div>
            {/* right-side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="hero-image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero