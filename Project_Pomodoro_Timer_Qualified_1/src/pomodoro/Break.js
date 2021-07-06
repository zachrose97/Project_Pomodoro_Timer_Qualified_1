import React from 'react';
import { minutesToDuration } from '../utils/duration/index';

const Break = ({ session, breakDuration, setBreakDuration }) => {
  // event handlers
  const handleMinusClick = () => {
    breakDuration <= 1
      ? setBreakDuration(1)
      : setBreakDuration(breakDuration - 1);
  };

  const handlePlusClick = () => {
    breakDuration >= 15
      ? setBreakDuration(15)
      : setBreakDuration(breakDuration + 1);
  };

  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* TODO: Update this text to display the current break session duration */}
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={handleMinusClick}
              disabled={session ? true : false}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={handlePlusClick}
              disabled={session ? true : false}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Break;