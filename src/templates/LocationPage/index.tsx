//#region > Imports
//> React
// Contains all the functionality necessary to define React components
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {fields} from '@snek-at/jaen-pages'

//> Components
import ImageTopSection from '../../components/organisms/ImageTopSection'
import {Footer, Navbar} from '../../components/molecules'

//> CSS
import './index.scss'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'
import {Box} from '@chakra-ui/layout'
//#endregion

//#region > Components
const LocationPage: JaenTemplate = () => {
  return (
    <Box
      as="section"
      id="locationpage"
      paddingBottom="12vh"
      overflow="hidden"
      paddingTop="15vh">
      <Navbar />
      <ImageTopSection
        head1={
          <fields.TextField
            fieldName="locationhead"
            initValue="locationheading"
            rtf={false}
          />
        }
        img1={
          <fields.ImageField
            fieldName="locationimage"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              title: 'locationimg',
              alt: 'locationimg'
            }}
          />
        }
        text1={
          <fields.TextField fieldName="locationrichtext" initValue="Fill me" />
        }
      />
      <Footer />
    </Box>
  )
}

LocationPage.TemplateName = 'LocationPage'
//#endregion

//#region > Exports
export default LocationPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
