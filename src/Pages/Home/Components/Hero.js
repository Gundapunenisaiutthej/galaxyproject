import React from 'react'
import video from "../../../assets/earth.mp4"
import {Link} from "react-router-dom"


const Hero = () => {
  return (
    <div className='hero'>
      <video src={video} autoPlay loop muted></video>

      <div className='content'>
       <h1>Travel. Galaxies.</h1>
       <p>lorem ipsum dolor sit amet consectetur, adipisicing elit, Cupiditate.
       </p>
       <div className='buttons'>
      <Link to='/Training'>Try Now!</Link>
        <Link to="/Contact">Launch</Link>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
