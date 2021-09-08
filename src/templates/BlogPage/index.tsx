//#region > Imports
//> React
// Contains all the functionality necessary to define React components
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
 // MDBLightbox,
} from "mdbreact";

//> SNEK
import {ConnectedPageType, SimpleRichTextField, ImageField, SimpleTextField} from '@snek-at/jaen'


//> Components
import ImageLeftSection from "../../organisms/ImageLeftSection";
//> CSS

import { Footer, Navbar} from "../../molecules";

import "./index.scss";
//#endregion


//#endregion

//#region > Components


const BlogPage: ConnectedPageType = () => {
{/*
const Gallery = {
  images: [
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg1"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg2"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg3"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg4"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg5"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg6"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg7"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg8"}}/>,
    },
    {
      img: <ImageField fieldOptions={{fieldName: "bloggalleryimg9"}}/>,
    },
  ],
}; */}

return (
  <>
      <Navbar />
      <section className="blogPage">
        <MDBContainer className="text-center">
          <h2 className="mb-1"><SimpleTextField name={"blogsimpletext1"}/></h2>
          <p className="lead"><SimpleTextField name={"blogsimpletext2"}/></p>
          <div className="my-5">
          <SimpleRichTextField name={"blogrichtext1"}/>
          </div>
        </MDBContainer>
        <ImageLeftSection
          className="my-5"
          head={<SimpleTextField name="blogimagelefthead1" />}
          img1={<ImageField fieldOptions={{fieldName: "blogimageleftimg1"}}/>}
          text1={<SimpleRichTextField name={"blogimagelefttext1"}/>}
        />
        {/* <MDBLightbox md="4" images={Gallery.images} className="mb-5"/> */}
      </section>
      <Footer />
  </>
  );
}
//#endregion



BlogPage.PageType = 'BlogPage'
BlogPage.ChildPages = [BlogPage]

//#region > Exports
export default BlogPage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
