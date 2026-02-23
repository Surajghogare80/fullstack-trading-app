import React from "react";

function Universe() {
  return (
    <div className="container text-center m-5">
      <h1>The Zerodha Universe</h1>
      <p className="p-4">Asset management</p>
      <div className="row">
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          ></img>
          <p className="p-4">Thematic investment platform</p>
          <br />
          <img
            src="media/images/streakLogo.png"
            style={{ width: "40%" }}
            className="mt-5"
          ></img>
          <p className="p-4">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "50%" }}
          ></img>
          <p className="p-4">Options trading platform</p>
          <br />
          <img
            className="mt-5"
            src="media/images/goldenpiLogo.png"
            style={{ width: "50%" }}
          ></img>
          <p className="p-4">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "30%" }}></img>
          <p className="p-4">Insurance</p>
          <br />
          <img
            className="mt-5"
            src="media/images/smallcaseLogo.png"
            style={{ width: "50%" }}
          ></img>
          <p className="p-4">Thematic investment platform</p>
        </div>
        <button
          className="mt-4 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
