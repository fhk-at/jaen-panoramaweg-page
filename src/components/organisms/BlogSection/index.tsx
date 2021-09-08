//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
// React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  // MDBBadge,
  // MDBBtn,
  // MDBCard,
  // MDBCardBody,
  // MDBCardImage,
  // MDBCol,
  MDBContainer,
  MDBIcon,
  // MDBProgress,
  // MDBRow,
  MDBStep,
  MDBStepper,
} from "mdbreact";

//> CSS
import "./index.scss";
//> Images
// import logoImg from "../../../common/img/agency-small.png";
//#endregion

//#region > Components
interface Props {
  head1: React.ReactNode
  subhead1: React.ReactNode
}

const BlogSection = ({ head1, subhead1 }: Props): JSX.Element => {
  return (
    <MDBContainer className="blog-section text-center my-5">
      <h2>{head1}</h2>
      <p className="lead mb-0">{subhead1}</p>
      <MDBStepper>
        <MDBStep className="done">
          <span className="step-item">
            <span className="circle green">
              <MDBIcon icon="check" />
            </span>
            <span className="label">Finanzierung</span>
          </span>
        </MDBStep>
        <MDBStep className="active">
          <span className="step-item">
            <span className="circle">2</span>
            <span className="label">Baustart</span>
          </span>
        </MDBStep>
        <MDBStep>
          <span className="step-item">
            <span className="circle">3</span>
            <span className="label">Baustart</span>
          </span>
        </MDBStep>
        <MDBStep className="info">
          <span className="step-item">
            <span className="circle">4</span>
            <span className="label">Platzhalter</span>
          </span>
        </MDBStep>
        <MDBStep className="info">
          <span className="step-item">
            <span className="circle">5</span>
            <span className="label">Fertigstellung</span>
          </span>
        </MDBStep>
      </MDBStepper>
      {/* <MDBRow className="flex-center">
        {entries1 &&
          entries1.map((entry) => {
            return (
              <MDBCol lg="4" className="mb-2">
                <MDBCard className="border">
                  <MDBCardImage src={entry.src} />
                  <MDBCardBody>
                    <p className="lead font-weight-bold mb-1">{entry.head}</p>
                    <p className="mb-0">
                      {entry.text} <a href="/status/2022-01-01">weiterlesen</a>.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
      </MDBRow> */}
    </MDBContainer>
  );
}

export default BlogSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
