import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  handleViewModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
    console.log("test");
  };

  handleCloseModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  };

  handleWindowCloseModal = (event) => {
    let modal = document.querySelector(".modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  render() {
    return (
      <div>
        <h2>Animated Modal with Header and Footer</h2>
        <button className="myBtn" onClick={this.handleViewModal}>
          Open Modal
        </button>
        <div className="modal" onClick={this.handleWindowCloseModal}>
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={this.handleCloseModal}>
                &times;
              </span>
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            <div className="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
