//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
import {useState} from 'react'
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem
  // MDBNavLink,
  // MDBContainer,
} from 'mdbreact'

// Style
import './index.scss'
//#endregion

//#region > Components
const Navbar = (): JSX.Element => {
  const [isCollapse, toggleCollapse] = useState(false)

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{backgroundColor: 'transparent'}}
      onClick={() => toggleCollapse(!isCollapse)}
    />
  )

  return (
    <section id="navbar">
      <MDBNavbar color="white" light expand="md">
        <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
          <img src="../../../images/logo_short.png" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => toggleCollapse(!isCollapse)} />
        <MDBCollapse id="mainNavbarCollapse" isOpen={isCollapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem className="clickable">
              <span className="font-weight-bold mx-3 lead">Immobilie</span>
            </MDBNavItem>
            <MDBNavItem className="clickable">
              <span className="font-weight-bold mx-3 lead">Lage</span>
            </MDBNavItem>
            <MDBNavItem className="clickable">
              <span className="font-weight-bold mx-3 lead">Baufortschritt</span>
            </MDBNavItem>
            <MDBNavItem className="clickable">
              <span className="font-weight-bold mx-3 lead">Kontakt</span>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      {isCollapse && overlay}
    </section>
  )
}
//#endregion

//#region > Exports
export default Navbar
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
