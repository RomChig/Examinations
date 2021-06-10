import {useTimer} from "react-timer-hook";
import React from "react";
import {useHistory} from "react-router-dom";
import {PATH_TO_RESULT_PAGE} from "./utils";

const formatTime = (param) => param.toString().length === 1 ? '0' + param : param;

const Timer = ({expiryTimestamp}) => {
    const history = useHistory();
    let {
        seconds,
        minutes,
        hours
    } = useTimer({
        expiryTimestamp, onExpire: () => {
            alert('Час закiнчився');
            history.push(PATH_TO_RESULT_PAGE);
        }
    });

    return (
        <div id="timerBlock" className="float-end rounded border border-warning">
            <div style={{textAlign: 'center', color: 'white'}} id="timer">
                <div style={{fontSize: '100px'}}>
                    <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
                </div>
                <p>Залишилося часу</p>
            </div>
        </div>)

};
export default Timer;