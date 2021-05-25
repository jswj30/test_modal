import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div>
      <h1>Modal</h1>
      <button className="myBtn">Open Modal</button>
      <div className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the modal..</p>
        </div>
      </div>
    </div>
  );
};

export default App;
