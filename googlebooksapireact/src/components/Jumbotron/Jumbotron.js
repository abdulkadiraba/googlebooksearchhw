import React from "react";

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div 
      style={{ background: "green", color: "white", height: 150, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center"}}
      className="container">
      {children}
    </div>
  </div>
);

export default Jumbotron;
