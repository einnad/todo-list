import React, { useState } from "react";

function Clock() {
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  const updateClock = function () {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, 0);
    const min = date.getMinutes().toString().padStart(2, 0);
    const sec = date.getSeconds().toString().padStart(2, 0);
    now = `${hour}:${min}:${sec}`;
    // now = new Date().toLocaleTimeString();
    setTime(now);
  };

  setInterval(updateClock);

  return (
    <div>
      <div>{time}</div>
    </div>
  );
}

export default Clock;
