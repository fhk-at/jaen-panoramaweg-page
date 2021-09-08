//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
// // React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBFooter, MDBContainer } from "mdbreact";

//> CSS
import "./index.scss";
//#endregion

//#region > Components
const Footer = (): JSX.Element => {
  return (
    <MDBFooter className="font-small">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <div>
            &copy; {new Date().getFullYear()} Copyright: TOP Immo W.M.
            Treuhand GmbH
            <p className="my-2 font-weight-bold">
              Made with
              <i
                className="fas fa-heart pulse blue-text ml-1 mr-1"
                aria-hidden="true"
              ></i>
              by
              <a
                href="https://www.inspiremedia.at"
                target="_blank"
                className="ml-1 blue-text"
                rel="noopener noreferrer"
              >
                InspireMedia GmbH
              </a>
              .
            </p>
          </div>
          <div>
            <small>
              <a
                href="https://www.top-immo.org/about"
                target="_blank"
                className="text-dark"
              >
                Impressum
              </a>
              <span className="pl-2 pr-2">·</span>
              <a
                href="https://www.top-immo.org/privacy"
                target="_blank"
                className="text-dark"
              >
                Datenschutz
              </a>
              {process.env.REACT_APP_VERSION && (
                <>
                  <span className="pl-2 pr-2">·</span>
                  Version v{process.env.REACT_APP_VERSION}
                </>
              )}
            </small>
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
//#endregion

//#region > Exports
export default Footer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
