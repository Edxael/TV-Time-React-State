import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './comps/Header.jsx';
import Mass from './comps/Mass.jsx';
import Ender from './comps/Ender.jsx';
import Force from './comps/Force.jsx';



const GatherComp = () => {
  const mainContSt = { backgroundColor: "black", textAlign: "center", padding: "15px 100px" }
  return(
    <div style={mainContSt} >
      <Logo />
      <Mass />
      <Ender />
      <Force />
    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
