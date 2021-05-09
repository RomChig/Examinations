import {useTimer} from "react-timer-hook";
import React from "react";

const Timer = ({expiryTimestamp}) => {
    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({
        expiryTimestamp, onExpire: () => {
            alert('Час закiнчився')
        }
    });

    return (
        <div id = "timerBlock" className="float-end rounded border border-warning">
            <div style={{textAlign: 'center', color: 'white'}} id="timer">
                <div style={{fontSize: '100px'}}>
                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>Time left</p>
            </div>
        </div>
);
}
export default Timer;