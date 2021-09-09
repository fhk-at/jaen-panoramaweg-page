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

import {Footer, Navbar} from '../components/molecules'
import {Box, Text} from '@chakra-ui/react'

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
              src: '',
              alt: 'placeholder',
              title: 'placeholder'
            }}
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
            initValue="Genießen Sie das schimmern des Faaker Sees
            Trotz der Moderne genießen Sie im Projekt Panoramaweg höchste Bauqualität, eingebettet in kärntens idyllischer Berg- und Seenlandschaft.
            Der mayestetische gerade Blick auf den Mittagskogel und der seitliche Blick auf den türkisen Faakersee garantieren Lebensqualität auf höchstem Niveau. Als Bauträger im Premiumsegment ist es unsere Passion höchste Kundenzufriedenheit sicherzustellen. Moderne und landschaftsgetreue Architektur treffen hier zusammen mit den effizientesten Baurohstoffen. Sichern Sie sich jetzt Ihre neue Traumimmobilie!"
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
        // container
        // partners={[
        //   require('../../../common/img/content/placeholder.jpg'),
        //   require('../../../common/img/content/placeholder.jpg'),
        //   require('../../../common/img/content/placeholder.jpg'),
        //   require('../../../common/img/content/placeholder.jpg')
        // ]}
        // head="Unsere Partner"
        // subhead="Wir bauen auf Vertrauen."
        // background="#e9eef0"
        // className="py-3"
        partners1={
          <BlockContainer
            reverseOrder={false}
            fieldName="partnerstream"
            blocks={[PartnerCard]}
          />
        }
        head1={
          <fields.TextField
            fieldName="head1"
            initValue="partnerhead"
            rtf={false}
          />
        }
        subhead1={
          <fields.TextField
            fieldName="subhead1"
            initValue="partnersubhead"
            rtf={false}
          />
        }
      />

      {
        <fields.IndexField
          // fixedSlug={'blog'}
          onRender={(page: any) => {
            for (const child of page.children) {
              console.log(child)
            }
            return (
              <Box>
                <Text>Hello World</Text>
              </Box>
            )
          }}
        />
      }
      {/* <BlogSection
        head1="Neues von der Baustelle"
        subhead1="Wir halten Sie am Laufenden."
        entries1={[
          {
            src: require('../../../common/img/content/placeholder.jpg'),
            head: 'Baustart',
            text: `Trotz der Moderne genießen Sie im Projekt Panoramaweg höchste Bauqualität, eingebettet ...`
          },
          {
            src: require('../../../common/img/content/placeholder.jpg'),
            head: 'Fundament gelegt',
            text: `Trotz der Moderne genießen Sie im Projekt Panoramaweg höchste Bauqualität, eingebettet ...`
          }
        ]}
      /> */}
      {/* <StaticImage
        src="../images/logo.png"
        alt="Panoramaweg Logo"
        title="Panoramaweg Logo"
      /> */}
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
