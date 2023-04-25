import './HomePage.css';
import React from 'react';

import StandingsTable from '../Components/StandingsTable/StandingsTable.js';
import UpcomingGames from '../Components/UpcomingGames/UpcomingGames.js';
import News from '../Components/News/News.js';

function HomePage() {
    return (
    <div className="HomePage">
      <div className="StandingsTable">
        <StandingsTable />
        <p/>
        <UpcomingGames />
        <News />
        
      </div>

      <footer className="Footer">
        &copy; SWE Project
      </footer>
      
    </div>
    );
}

export default HomePage;