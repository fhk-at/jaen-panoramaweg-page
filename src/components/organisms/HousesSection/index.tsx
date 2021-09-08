//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from 'react'
import {fields} from '@snek-at/jaen-pages'
// React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  // MDBBadge,
  // MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  // MDBProgress,
  MDBRow
} from 'mdbreact'

//> Components
//> CSS
import './index.scss'
//#endregion

interface Props {
  head1: React.ReactNode
  subhead1: React.ReactNode
}

//#region > Components
const HousesSection = ({head1, subhead1}: Props): JSX.Element => {
  // const addDot = (x: any) => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  // };

  return (
    <MDBContainer className="my-5">
      <div className="text-center mb-5">
        <h2>{head1}</h2>
        <p className="lead">{subhead1}</p>
        {/* <p dangerouslySetInnerHTML={{ __html: text }} /> */}
      </div>
      <MDBRow>
        {
          <fields.IndexField
            // fixedSlug={'house'}
            renderItem={(page: any) => {
              // fetchStorage()
              // let fields = (jaenData?.dataLayer?.editing?.pages?.[item.slug]
              //   ?.fields ||
              //   jaenData?.dataLayer?.working?.pages?.[item.slug]?.fields) as any
              // let files =
              //   jaenData?.dataLayer?.editing?.files ||
              //   jaenData?.dataLayer?.working?.crypt?.clear?.files
              // console.log(fields)
              // console.log(files)
              // let image = fields?.houseimage?.content?.index
              // console.log(image)
              // let title = fields?.housetitle?.content?.text
              return (
                <>
                  <div key={key} className="housewrapper">
                    <MDBCol lg="6">
                      <MDBCard className="houseInfo mb-5">
                        <MDBCardBody className="d-block d-sm-none">
                          <div className="d-block text-center">
                            <div className="imageWrapper">
                              <img
                                src={files && files[image]?.url}
                                alt={title}
                              />
                            </div>
                            <div className="infoWrapper mt-2">
                              <p className="mb-0 lead font-weight-bold">
                                {title}
                              </p>
                              <p className="text-muted mb-2 small">
                                {apartmentCounter} Wohnungen
                              </p>
                              {/* <p className="text-muted mb-0 small">
                                Wohnungsgrößen {minSize} m² - {maxSize} m²
                              </p>
                              <p className="text-muted mb-2 small">
                                von {addDot(minPrize)} € - {addDot(maxPrize)} €
                              </p> */}
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            <div className="d-block mt-3">
                              <div className="mb-3">
                                {/* <MDBProgress
                                  value={availableApartments}
                                  max={apartmentCounter}
                                  color="green"
                                  className="w-75 m-auto"
                                />
                                <p className="text-muted mt-1 mb-0 small">
                                  {availableApartments} von {apartmentCounter} Wohnungen verfügbar
                                </p> */}
                              </div>
                              {/* <MDBBtn color="green">
                                fak btn
                              </MDBBtn> */}
                            </div>
                          </div>
                        </MDBCardBody>
                        <MDBCardBody className="d-sm-block d-none">
                          <div className="d-flex">
                            <div className="imageWrapper">
                              <img src={files?.[image]?.url} alt={title} />
                            </div>
                            <div className="infoWrapper">
                              <p className="mb-0 lead font-weight-bold">
                                {title}
                              </p>
                              <p className="text-muted mb-1">
                                {apartmentCounter} Wohnungen
                              </p>
                              {/* <div className="mb-3">
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
                              </div> */}
                              <p className="text-muted mb-0 small">
                                <MDBIcon icon="expand" className="mr-3" />
                                {/* <strong>
                                  {minSize} m² - {maxSize} m²
                                </strong> */}
                              </p>
                              <p className="text-muted mb-2 small">
                                <MDBIcon icon="euro-sign" className="mr-3" />{' '}
                                {/* <strong>
                                  {addDot(minPrize)} - {addDot(maxPrize)}
                                </strong> */}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between actionWrapper mt-3">
                            {/* <MDBBtn color="green">F</MDBBtn> */}
                            <div className="d-flex justify-content-end">
                              {/* <div>
                                <MDBProgress
                                  value={availableApartments}
                                  max={apartmentCounter}
                                  color="green"
                                />
                                <p className="text-muted mt-1 mb-0 small">
                                  {availableApartments} von {apartmentCounter} Wohnungen verfügbar
                                </p>
                              </div> */}
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </div>
                </>
              )
            }}
          />
        }
      </MDBRow>
    </MDBContainer>
  )
}

export default HousesSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
