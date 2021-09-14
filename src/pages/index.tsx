//#region > Imports
// Contains all the functionality necessary to define React components
import {BlockContainer, fields} from '@snek-at/jaen-pages'
import PartnerCard from '../components/blocks/PartnerCard'

// import BlogSection from '../../organisms/BlogSection'
//> Components
import HeroSection from '../components/organisms/HeroSection'
import HousesSection from '../components/organisms/HousesSection'
import ImageTopSection from '../components/organisms/ImageTopSection'
import MapSection from '../components/organisms/MapSection'
import PartnerSection from '../components/organisms/PartnerSection'
import BlogSection from '../components/organisms/BlogSection'
import LightBox from '../components/molecules/LightBox'

import {Footer, Navbar} from '../components/molecules'
import {Box, Center} from '@chakra-ui/react'

import styled from '@emotion/styled'

import {mq} from '../utils'

const IndexPageCSS = styled(Box)`
  .responsiveImage {
    ${mq[0]} {
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[1]} {
      width: 300px;
    }
    ${mq[2]} {
      width: 22vw;
    }
    ${mq[3]} {
      width: 22vw;
    }
  }
`

//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <IndexPageCSS>
      <Box as="section" id="homepage" paddingBottom="12vh" overflow="hidden">
        <Navbar />
        <HeroSection />
        <ImageTopSection
          img1={
            <fields.ImageField
              fieldName="imagetopimg1"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'placeholder',
                title: 'placeholder'
              }}
              className="responsiveImage"
            />
          }
          head1={
            <fields.TextField
              fieldName="imagetophead1"
              initValue="Leben am Panoramaweg"
              rtf={false}
            />
          }
          text1={
            <fields.TextField
              fieldName="imagetoptext1"
              initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
            />
          }
        />
        <MapSection />
        <HousesSection
          househead={
            <fields.TextField
              fieldName="homehousehead"
              initValue="Überschrift"
              rtf={false}
            />
          }
          housesubhead={
            <fields.TextField
              fieldName="homehousesubhead"
              initValue="Unterüberschrift"
              rtf={false}
            />
          }
        />
        <PartnerSection
          partners1={
            <BlockContainer
              reverseOrder={false}
              name="partnerblocks"
              blocks={[PartnerCard]}
              wrap={true}
              wrapProps={{justify: 'center', spacing: '5'}}
            />
          }
          head1={
            <fields.TextField
              fieldName="head1"
              initValue="Unsere Partner"
              rtf={false}
            />
          }
          subhead1={
            <fields.TextField
              fieldName="subhead1"
              initValue="Wir bauen auf Vertrauen."
              rtf={false}
            />
          }
        />
        <Box paddingTop="5" />
        <BlogSection
          bloghead={
            <fields.TextField
              fieldName="bloghead"
              initValue="Neues von der Baustelle"
              rtf={false}
            />
          }
          blogsubhead={
            <fields.TextField
              fieldName="blogsubhead"
              initValue="Wir halten Sie am Laufenden."
              rtf={false}
            />
          }
        />
        <Center marginBottom="10">
          <fields.ImageField
            fieldName="bottomlogo"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'logo',
              title: 'logo'
            }}
            width="300px"
          />
        </Center>
        <Footer />
      </Box>
    </IndexPageCSS>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
