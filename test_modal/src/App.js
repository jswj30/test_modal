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
        <h1>Modal</h1>
        <button className="myBtn" onClick={this.handleViewModal}>
          Open Modal
        </button>
        <div className="modal" onClick={this.handleWindowCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={this.handleCloseModal}>
              &times;
            </span>
            <p>Some text in the modal..</p>
          </div>
        </div>
      </div>
    );
  }
}

// <button id="myBtn">Open Modal</button>
// <div id="myModal" class="modal">
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>Some text in the Modal..</p>
//   </div>
// </div>

export default App;
