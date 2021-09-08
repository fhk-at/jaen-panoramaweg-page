//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBFormInline,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdbreact";

//> CSS
import "./cookie.scss";
//#endregion

//#region > Components
class ModalPage extends React.Component {
  state = {
    modal1: localStorage.getItem("cookie") ? false : true,
    essential: true,
    statistics: false,
    marketing: false,
  };

  checkBoxCheck(e) {
    this.setState({ [e.target.name]: e.target.isChecked });
  }

  checkAll() {
    this.setState({ essential: true, statistics: true, marketing: true }, () =>
      this.save()
    );
  }

  save() {
    localStorage.setItem(
      "cookie",
      JSON.stringify({
        essential: this.state.essential ? true : false,
        statistics: this.state.statistics ? true : false,
        marketing: this.state.marketing ? true : false,
      })
    );

    this.setState({ modal1: false }, () => this.props.saveCookie());
  }

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;

    this.setState(
      {
        [modalNumber]: !this.state[modalNumber],
      },
      () => {
        if (!localStorage.getItem("cookie")) {
          localStorage.setItem("cookie", true);
        }
      }
    );
  };

  render() {
    if (this.state.modal1) {
      return (
        <div className="cookie-modal p-3 d-flex justify-content-between">
          <div>
            <h2>Cookie Settings</h2>
            <p className="text-muted">
              We use cookies on our website to improve the user experience. Some
              of them are essential for the operation of the website.
            </p>
          </div>
          <MDBRow className="justify-content-between align-items-center m-0 p-0">
            <MDBBtn
              color="success"
              className="mx-2"
              onClick={() => this.checkAll()}
            >
              <MDBIcon icon="check-circle" />
              Accept all
            </MDBBtn>
            <MDBBtn color="white" className="mx-2" onClick={() => this.save()}>
              Save and close
            </MDBBtn>
          </MDBRow>
        </div>
      );
    } else {
      return null;
    }
  }
}
//#endregion

//#region > Exports
export default ModalPage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
