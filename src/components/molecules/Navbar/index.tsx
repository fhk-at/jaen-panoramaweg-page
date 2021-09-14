//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
import {Box, Flex, HStack, IconButton, VStack, Collapse} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import * as scroll from 'react-scroll'
import {navigate} from 'gatsby-link'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
// Style
import './index.scss'
import {useState} from 'react'
//#endregion

//#region > Components
const Navbar = (): JSX.Element => {
  const [linkMenue, setLinkMenue] = useState(false)

  return (
    <Box
      as="section"
      id="navbar"
      height="15vh"
      width="100%"
      zIndex="15"
      backgroundColor="whiteAlpha.800"
      position="absolute"
      top="0"
      left="0">
      <Flex fontWeight="bold">
        <Link to="/">
          <StaticImage
            src="../../../images/logo_short.png"
            title="logo"
            alt="logo"
            className="navbarlogodiv"
            imgClassName="navbarlogoimg"
          />
        </Link>
        <HStack
          display={['none', 'none', 'inline', 'inline']}
          pr="4.2vw"
          spacing="8"
          pt="6vh"
          fontSize="1.4rem"
          fontWeight="bold"
          ml="auto">
          <Link to="/projekt/">Immobilie</Link>
          <Link to="/lage/">Lage</Link>
          <scroll.Link
            to="blogsection"
            isDynamic
            smooth
            style={{cursor: 'pointer'}}
            onClick={() => {
              window.location.pathname === '/'
                ? null
                : navigate('/#blogsection')
            }}>
            Baufortschritt
          </scroll.Link>
          <Link to="/kontakt/">Kontakt</Link>
        </HStack>
        <IconButton
          display={['block', 'block', 'none', 'none']}
          mt="6vh"
          mr="auto"
          aria-label="Linkmenü"
          icon={<HamburgerIcon />}
          onClick={() => {
            setLinkMenue(!linkMenue)
          }}
        />
        <Collapse in={linkMenue}>
          <VStack
            width="100%"
            spacing="3"
            position="absolute"
            top="15vh"
            left="0"
            bg="whiteAlpha.800">
            <Link to="/projekt/">Immobilie</Link>
            <Link to="/lage/">Lage</Link>
            <Link to="/">Baufortschritt</Link>
            <Link to="/kontakt/">Kontakt</Link>
          </VStack>
        </Collapse>
      </Flex>
    </Box>
  )
}
//#endregion

//#region > Exports
export default Navbar
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
