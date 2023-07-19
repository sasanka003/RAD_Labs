import React, { useState } from 'react';

function Timer(props) {
const current = new Date();

const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
});
    
const setCurrentDateTime = useState(new Date());
 setInterval(() => setCurrentDateTime(time), 1000);
 return (
 <div><p>Timer {time}s</p></div>
 );
}
export default Timer;