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
import LightBox from '../components/LightBox'

import {Footer, Navbar} from '../components/molecules'
import {Box, Center} from '@chakra-ui/react'

import styled from '@emotion/styled'

import {mq} from '../utils'
import {StaticImage} from 'gatsby-plugin-image'

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
      <Box as="section" id="homepage" paddingBottom="115px" overflow="hidden">
        <Navbar />
        <HeroSection />
        <ImageTopSection
          img1={
            <fields.ImageField
              fieldName="imagetopimg1"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'placeholder'
              }}
              className="responsiveImage"
            />
          }
          head1={
            <fields.TextField
              fieldName="imagetophead1"
              initValue="<p>Leben am Panoramaweg</p>"
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
              initValue="<p>Überschrift</p>"
              rtf={false}
            />
          }
          housesubhead={
            <fields.TextField
              fieldName="homehousesubhead"
              initValue="<p>Unterüberschrift</p>"
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
              initValue="<p>Unsere Partner</p>"
              rtf={false}
            />
          }
          subhead1={
            <fields.TextField
              fieldName="subhead1"
              initValue="<p>Wir bauen auf Vertrauen.</p>"
              rtf={false}
            />
          }
        />
        <Box paddingTop="10" />
        <BlogSection
          bloghead={
            <fields.TextField
              fieldName="bloghead"
              initValue="<p>Neues von der Baustelle</p>"
              rtf={false}
            />
          }
          blogsubhead={
            <fields.TextField
              fieldName="blogsubhead"
              initValue="<p>Wir halten Sie am Laufenden.</p>"
              rtf={false}
            />
          }
        />
        <Center marginBottom="20">
          <StaticImage
            src="../images/panoramaweg_dark.svg"
            alt="Logo"
            style={{width: '300px', height: '180px'}}
            imgStyle={{objectFit: 'contain'}}
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
