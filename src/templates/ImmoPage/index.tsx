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
      paddingTop="15vh"
      paddingBottom="12vh"
      minH={['fit-content', 'fit-content', '100vh', '100vh']}>
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
            w={['300px', '300px', '22vw', '22vw']}
          />
        }
        text1={
          <fields.TextField
            fieldName="immotext1"
            initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
          />
        }
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
