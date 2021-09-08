//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React, { Props } from "react";
// React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBadge,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBProgress,
} from "mdbreact";

//> CSS
import "./index.scss";
//> Images
// import logoImg from "../../../common/img/agency-small.png";
//#endregion

//#region > FunctionsF
const addDot = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
//#endregion


//#region > Components
interface Props {
  img: string
  title: string
  minSize: number
  maxSize: number
  minPrize: number
  maxPrize: number
  availableApartments: number
  maxApartments: number
  hasPenthouse?: boolean
  hasThreeRoom?: boolean
  hasFourRoom?: boolean
}


const WelcomeScreen = ({
  img,
  title,
  minSize,
  maxSize,
  minPrize,
  maxPrize,
  availableApartments,
  maxApartments,
  hasPenthouse,
  hasThreeRoom,
  hasFourRoom,
}: Props): JSX.Element => {
  return (
    <MDBCard className="houseInfo mb-5">
      <MDBCardBody className="d-block d-sm-none">
        <div className="d-block text-center">
          <div className="imageWrapper">
            <img src={img} alt={title} />
          </div>
          <div className="infoWrapper mt-2">
            <p className="mb-0 lead font-weight-bold">{title}</p>
            <p className="text-muted mb-2 small">{maxApartments} Wohnungen</p>
            <p className="text-muted mb-0 small">
              Wohnungsgrößen {minSize} m² - {maxSize} m²
            </p>
            <p className="text-muted mb-2 small">
              von {addDot(minPrize)} € - {addDot(maxPrize)} €
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <div className="d-block mt-3">
            <div className="mb-3">
              <MDBProgress
                value={availableApartments}
                max={maxApartments}
                color="green"
                className="w-75 m-auto"
              />
              <p className="text-muted mt-1 mb-0 small">
                {availableApartments} von {maxApartments} Wohnungen verfügbar
              </p>
            </div>
            <MDBBtn color="green">
              {/* TODO {text} */}
              fak btn
            </MDBBtn>
          </div>
        </div>
      </MDBCardBody>
      <MDBCardBody className="d-sm-block d-none">
        <div className="d-flex">
{/*          <div className="imageWrapper">
            <img src={img1} alt={title1} />
          </div> */}
          <div className="infoWrapper">
            <p className="mb-0 lead font-weight-bold">{title}</p>
            <p className="text-muted mb-1">{maxApartments} Wohnungen</p>
            <div className="mb-3">
              {hasPenthouse && (
                <MDBBadge pill color="green">
                  Penthouse
                </MDBBadge>
              )}
              {hasFourRoom && (
                <MDBBadge pill color="green">
                  4-Zimmer
                </MDBBadge>
              )}
              {hasThreeRoom && (
                <MDBBadge pill color="green">
                  3-Zimmer
                </MDBBadge>
              )}
            </div>
            <p className="text-muted mb-0 small">
              <MDBIcon icon="expand" className="mr-3" />
              <strong>
                {minSize} m² - {maxSize} m²
              </strong>
            </p>
            <p className="text-muted mb-2 small">
              <MDBIcon icon="euro-sign" className="mr-3" />{" "}
              <strong>
                {addDot(minPrize)} - {addDot(maxPrize)}
              </strong>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between actionWrapper mt-3">
          <MDBBtn color="green">F</MDBBtn>
          <div className="d-flex justify-content-end">
            <div>
              <MDBProgress
                value={availableApartments}
                max={maxApartments}
                color="green"
              />
              <p className="text-muted mt-1 mb-0 small">
                {availableApartments} von {maxApartments} Wohnungen verfügbar
              </p>
            </div>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
//#endregion


export default WelcomeScreen
/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
