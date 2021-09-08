//#region > Imports
//> React
// Contains all the functionality necessary to define React components
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {ConnectedPageType, ImageField, SimpleTextField, SimpleRichTextField} from '@snek-at/jaen'

//> Components
import ImageTopSection from "../../organisms/ImageTopSection";
import { Footer, Navbar} from "../../molecules";

//> CSS
import "./index.scss";
//#endregion

//#region > Components
const LocationPage: ConnectedPageType = () => {
  return (
    <>
      <Navbar />
        <div className="locationPage">
          <ImageTopSection
            head1={<SimpleTextField name="locationhead1"/>}
            img1={<ImageField fieldOptions={{fieldName: "locationimage1"}}/>}
            text1={<SimpleRichTextField name="locationtext1" />}
          />
        </div>
      <Footer />
    </>
  );
}

LocationPage.PageType = 'LocationPage'
LocationPage.ChildPages = [LocationPage]
//#endregion

//#region > Exports
export default LocationPage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
