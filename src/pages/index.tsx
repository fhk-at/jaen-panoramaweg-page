//#region > Imports
// Contains all the functionality necessary to define React components
import {BlockContainer, fields} from '@snek-at/jaen-pages'
import PartnerCard from '../components/blocks/PartnerCard'
//> CSS
import './index.scss'

// import BlogSection from '../../organisms/BlogSection'
//> Components
import HeroSection from '../components/organisms/HeroSection'
import HousesSection from '../components/organisms/HousesSection'
import ImageTopSection from '../components/organisms/ImageTopSection'
import MapSection from '../components/organisms/MapSection'
import PartnerSection from '../components/organisms/PartnerSection'
import BlogSection from '../components/organisms/BlogSection'

import {Footer, Navbar} from '../components/molecules'
import {Box, Center} from '@chakra-ui/react'

import {StaticImage} from 'gatsby-plugin-image'

//#endregion

//#region > Components
const IndexPage = () => {
  return (
    <Box as="section" id="homepage" overflow="hidden" paddingBottom="12vh">
      <Navbar />
      <HeroSection
        button1={
          <fields.TextField
            fieldName="herobutton1"
            initValue="Mehr dazu"
            rtf={false}
          />
        }
      />
      <ImageTopSection
        img1={
          <fields.ImageField
            fieldName="imagetopimg1"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              alt: 'placeholder',
              title: 'placeholder'
            }}
            width={['300px', '300px', '22vw', '22vw']}
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
            initValue="<p>enießen Sie das schimmern des Faaker Sees
            Trotz der Moderne genießen Sie im Projekt Panoramaweg höchste Bauqualität, eingebettet in kärntens idyllischer Berg- und Seenlandschaft.
            Der mayestetische gerade Blick auf den Mittagskogel und der seitliche Blick auf den türkisen Faakersee garantieren Lebensqualität auf höchstem Niveau. Als Bauträger im Premiumsegment ist es unsere Passion höchste Kundenzufriedenheit sicherzustellen. Moderne und landschaftsgetreue Architektur treffen hier zusammen mit den effizientesten Baurohstoffen. Sichern Sie sich jetzt Ihre neue Traumimmobilie!</p>"
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
