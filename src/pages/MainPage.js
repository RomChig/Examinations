import React from "react";
import {NavLink} from "react-router-dom";
import '../index.scss';
import {useDispatch, useSelector} from "react-redux";
import {useTimer} from "react-timer-hook";

const MainPage = () => {
  const exam = useSelector(state => state.main_page.exam);
  return (
    <>
      <div id="greeting_window">
        <div id="card" className="card text-center bg-white" style={{width: '25rem', height: '25rem'}}>
          <div className="card-header fw-bold">
            {exam.about.title}
          </div>
          <div className="card-body mt-5">
            <h5 className="card-title">Максимальна кiлькiсть балiв: {exam.about.total}</h5>
            <h5 className="card-title">Кiлькiсть питань: {exam.questions.length}</h5>
            <h5 className="card-title">Час: 90 хв</h5>
          </div>
          <div className="card-footer">
            <NavLink to={"/test"} className="btn btn-outline-dark">Start test</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

function MyTimer({expiryTimestamp}) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp, onExpire: () => {
      alert('time is over')
    }
  });


  return (
    <div style={{textAlign: 'center', color: 'white'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time)
      }}>Restart
      </button>
    </div>
  );
}

export default MainPage;