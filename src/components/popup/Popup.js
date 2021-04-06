import React from "react";

function Popup() {
  return (
    // active
    <div className="popup ">
      <div className="message">
        <button className="close">
          <span className="iconBar1"></span>
          <span className="iconBar2"></span>
        </button>

        <p className="messageText">
          I do not stand here as advocate for any partisan cause, forth issues
          are fundamental and reach quite beyond the realm of partisan
          consideration. They must be resolved on the highest plane of national
          interest if our course is to prove sound and our future protected. I
          do not stand here as advocate for any partisan cause, forth issues are
          fundamental and reach quite beyond the realm of partisan
        </p>

        <div className="btnBox">
          <button className="btnYes">yes</button>
          <button className="btnNo">no</button>
        </div>
      </div>
    </div>
  );
}
export default Popup;
