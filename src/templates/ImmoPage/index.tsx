//#region > Imports
//> React
// Contains all the functionality necessary to define React components
//> MDB
// "Material Design for Bootstrap" is a great UI design framework

//> Components
import ImageTopSection from '../../components/organisms/ImageTopSection'
import {Footer, Navbar} from '../../components/molecules'

//> CSS
import './index.scss'
import {fields, JaenTemplate} from '@snek-at/jaen-pages'
import {Box} from '@chakra-ui/react'
//#endregion

//#region > Components
const ImmoPage: JaenTemplate = () => {
  return (
    <Box
      as="section"
      id="immopage"
      overflow="hidden"
      paddingTop="15"
      paddingBottom="12"
      minH="100vh">
      <Navbar />
      <ImageTopSection
        head1={
          <fields.TextField
            fieldName="immohead1"
            initValue="Überschrift"
            rtf={false}
          />
        }
        img1={
          <fields.ImageField
            fieldName="immoimg"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              title: 'immoimg',
              alt: 'immoimg'
            }}
          />
        }
        text1={<fields.TextField fieldName="immotext1" initValue="Fill me" />}
      />
      <Footer />
    </Box>
  )
}

ImmoPage.TemplateName = 'ImmoPage'
//#endregion

//#region > Exports
export default ImmoPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
