import './BettingDashPage.css';
import React from 'react';

import BettingDash from '../Components/BettingDash/BettingDash.js'

function BettingDashPage() {
    return (
    <div className="BettingDashPage">
      <div className="BettingDashMain">
        <BettingDash />
      </div>
    </div>
    );
}

export default BettingDashPage;
