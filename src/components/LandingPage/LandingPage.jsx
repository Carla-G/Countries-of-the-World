import React from 'react';
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className='background'>
        <h1 className="landing-title">Countries of the World</h1>
        <Link to={"/countries"}><button className="landing-button" type="button">See them here &#x21E2;</button></Link>
    </div>
  )
}

export default LandingPage;