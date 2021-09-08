//#region > Imports
//> React
// Contains all the functionality necessary to define React components
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {ConnectedPageType, ImageField, SimpleRichTextField, SimpleTextField} from '@snek-at/jaen'

//> Components
import ImageTopSection from "../../organisms/ImageTopSection";
import { Footer, Navbar} from "../../molecules";

//> CSS
import "./index.scss";
//#endregion

//#region > Components
const ImmoPage: ConnectedPageType = () => {
  return (
    <>
      <Navbar />
      <div className="immoPage">
      <ImageTopSection
        head1={<SimpleTextField name="immohead1"/>}
        img1={<ImageField fieldOptions={{fieldName: "immoimg"}}/>}
        text1={<SimpleRichTextField name="immotext1"/>}
      />
      </div>
      <Footer />
    </>
  );
}


ImmoPage.PageType = 'ImmoPage'
ImmoPage.ChildPages = [ImmoPage]
//#endregion

//#region > Exports
export default ImmoPage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
