import { StartTimer } from "../../utils"

export default function Timer() {
    StartTimer();
    const time = localStorage.getItem('time')
    return (
        <div className="timer-wrapper">
           <span className="time-wrapper" id='timer'>{time}</span>
        </div>
        
    )
}
