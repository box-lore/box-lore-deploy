import './TeamDashPage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import TeamDash from '../Components/TeamDash/TeamDash.js'

function TeamDashPage() {
    return (
    <div className="TeamDashPage">
      <div className="TeamDashMain">
        <TeamDash />
      </div>
    </div>
    );
}

export default TeamDashPage;
