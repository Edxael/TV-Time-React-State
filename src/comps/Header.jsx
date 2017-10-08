import React from 'react';
import LogoImg from './img/tvtime.png';

const Logo = () => {
  const logoCont = { border: "4px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", marginBottom: "10px" }
  const logoImg  = {  }
  return(
    <div style={logoCont}>
      <img style={logoImg} src={LogoImg} alt="Missing Pic."/>
    </div>
  )
}

export default Logo;
