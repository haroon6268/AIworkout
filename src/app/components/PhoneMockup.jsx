import React from "react";

const PhoneMockup = () => {
  return (
    <div className="mockup-phone scale-50 lg:scale-75" style={{ margin: "0" }}>
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img src="/phone.png" className="scale-100" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
