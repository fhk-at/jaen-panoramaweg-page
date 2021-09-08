//#region > Imports
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";

//> CSS
import "./index.scss";
//#endregion

//#region > Components

interface Props {
  img1: React.ReactNode
  text1: React.ReactNode 
  className: string
  head: React.ReactNode
}

const ImageLeftSection = ({
  img1,
  text1,
  className,
  head,
}: Props): JSX.Element => {
  return (
    <MDBContainer className="image-left-section">
      <MDBRow className={className}>
        <MDBCol lg="4">
          {/* <img src={img} alt={head} className="img-fluid" /> */}
          {img1}
        </MDBCol>
        <MDBCol lg="8">
          <h2>{head}</h2>
          {/* <p className="lead">{subhead}</p>
          <p dangerouslySetInnerHTML={{ __html: text }}></p> */}
          {text1}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
//#endregion

export default ImageLeftSection

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
