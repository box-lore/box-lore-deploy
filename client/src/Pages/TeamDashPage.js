import './TeamDashPage.css';
import React from 'react';

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
