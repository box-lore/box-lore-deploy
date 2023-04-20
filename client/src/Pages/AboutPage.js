import './AboutPage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import About from '../Components/About/About.js';

function AboutPage() {
    return (
    <div className="AboutPage">
      <div className="About">
        <About />
      </div>
    </div>
    );
}

export default AboutPage;