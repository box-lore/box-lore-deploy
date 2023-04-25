import './Guide.css';
import a from './a.png';
import b from './b.png';
import c from './c.png';
import d from './d.png';


function Guide(){
  return (
      <div className="main">
        <div className='heading'>
          <h1>How to read boxscore statistics</h1>
        </div>
        <div className="section" id='a'>
            <div className='exp'>
              <ul>
                <li><b>W (Wins):</b><br/> The number of games a team has won in the current season.</li>
                <li><b>L (Losses):</b><br/> The number of games a team has lost in the current season.</li>
                <li><b>ORT (Offensive Rating):</b><br/> The number of points a team scores per 100 possessions. It is used to evaluate a team's offensive efficiency.</li>
                <li><b>DRT (Defensive Rating):</b><br/> The number of points a team allows per 100 possessions. It is used to evaluate a team's defensive efficiency.</li>
              </ul>
            </div>
            <div className='pic'><img src={a} /></div>
        </div>
        <div className="section" id='b'>
            <div className='exp'>
              <ul>
                <li><b>FG% (Field Goal Percentage):</b><br/> The percentage of shots a player or team makes from the field.</li>
                <li><b>2P% (2-Point Field Goal Percentage):</b><br/> The percentage of two-point shots a player or team makes.</li>
                <li><b>3P% (3-Point Percentage):</b><br/> The percentage of three-point shots a player or team makes.</li>
                <li><b>FT% (Free Throw Percentage):</b><br/> The percentage of free throws a player or team makes.</li>
              </ul>
            </div>
            <div className='pic'><img src={b} /></div>
        </div>
        <div className="section" id='c'>
            <div className='exp'>
              <ul>
                <li><b>ORB (Offensive Rebounds):</b><br/> The number of rebounds a team collects on the offensive end of the court.</li>
                <li><b>DRB (Defensive Rebounds):</b><br/> The number of rebounds a team collects on the defensive end of the court.</li>
                <li><b>TRB (Total Rebounds):</b><br/> The sum of offensive and defensive rebounds.</li>
              </ul>
            </div>
            <div className='pic'><img src={c} /></div>
        </div>
        <div className="section" id='d'>
            <div className='exp'>
              <ul>
                <li><b>AST (Assists):</b><br/> The number of passes that result in a made basket.</li>
                <li><b>TOV (Turnovers):</b><br/> The number of times a player or team loses possession of the ball without taking a shot.</li>
                <li><b>STL (Steals):</b><br/> The number of times a player or team takes the ball away from the opposing team.</li>
                <li><b>BLK (Blocks):</b><br/> The number of times a player or team prevents a shot from being made by blocking it.</li>
              </ul>
            </div>
            <div className='pic'><img src={d} /></div>
        </div>
      </div>
  )
}

export default Guide;

