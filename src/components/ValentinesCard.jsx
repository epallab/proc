import React from "react";

const ValentinesCard = () => {
  return (
    <div className="happy-valentines">
      <div className="valentines-day-card">
        <div className="clouds"></div>
        <div className="hearts">
          {["heartOne", "heartTwo", "heartThree", "heartFour", "heartFive"].map(
            (heart, index) => (
              <div key={index} className={heart}>
                <div className="left-side"></div>
                <div className="right-side"></div>
              </div>
            )
          )}
        </div>
        <div className="text">
          <span>
            Will you be my
            <br /> Sunshine forever?
          </span>
        </div>
      </div>
    </div>
  );
};

export default ValentinesCard;
