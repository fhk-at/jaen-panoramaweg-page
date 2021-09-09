//#region > Imports
//> React
// Contains all the functionality necessary to define React components

//> SNEK
import {fields} from '@snek-at/jaen-pages'

//> Components
import ImageLeftSection from '../../components/organisms/ImageLeftSection'
//> CSS

import {Footer, Navbar} from '../../components/molecules'

import './index.scss'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'
import {Box} from '@chakra-ui/layout'
import {Container, Heading, Text} from '@chakra-ui/react'
//#endregion

//#endregion

//#region > Components

const BlogPage: JaenTemplate = () => {
  return (
    <Box as="section" id="blogpage" pb="12vh" pt="15vh" minH="100vh">
      <Navbar />
      <Container maxW="70vw" centerContent fontSize="1.1rem">
        <Heading fontSize="1.75rem">
          <fields.TextField
            fieldName="blogheading"
            initValue="Überschrift"
            rtf={false}
          />
        </Heading>
        <Text fontSize="1.5rem" mb="5">
          <fields.TextField
            fieldName="blogsubheading"
            initValue="vom 01.01.2022"
            rtf={false}
          />
        </Text>
        <Text mb="5">
          <fields.TextField fieldName="blogrichtext" initValue="Fill me" />
        </Text>
        <ImageLeftSection
          imgleftimg={
            <fields.ImageField
              fieldName="blogimgleftimg"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                title: 'blogimgleftimg',
                alt: 'blogimgleftimg'
              }}
              width="20vw"
            />
          }
          imgleftheading={
            <fields.TextField
              fieldName="blogimgleftheading"
              initValue="Unterüberschrift"
              rtf={false}
            />
          }
          imgleftrichtext={
            <fields.TextField
              fieldName="blogimgleftrichtext"
              initValue="Fill me"
            />
          }
        />
      </Container>
      <Footer />
    </Box>
  )
}
//#endregion

BlogPage.TemplateName = 'BlogPage'

//#region > Exports
export default BlogPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
