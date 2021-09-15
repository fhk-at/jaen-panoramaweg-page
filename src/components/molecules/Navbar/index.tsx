//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  VStack,
  Collapse,
  Spacer
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import * as scroll from 'react-scroll'
import {navigate} from 'gatsby-link'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
// Style
import * as style from './style'
import {useState} from 'react'
//#endregion

//#region > Components
const Navbar = (): JSX.Element => {
  const [linkMenue, setLinkMenue] = useState(false)

  return (
    <style.NavbarStyle>
      <Box
        as="section"
        id="navbar"
        height="140px"
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
              alt="logo"
              className="navbarlogodiv"
              imgClassName="navbarlogoimg"
            />
          </Link>
          <HStack
            display={['none', 'none', 'inline', 'inline']}
            pr="12"
            spacing="15"
            pt="55"
            fontSize={['', '', '1.1rem', '1.4rem']}
            fontWeight="bold"
            ml="auto">
            <Link to="/projekt/">Immobilie</Link>
            <Link to="/lage/">Lage</Link>
            <scroll.Link
              offset={-80}
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
            ml="auto"
            width={['6vh', '8vh']}
            height={['6vh', '8vh']}
            display={['block', 'block', 'none', 'none']}
            mt="12"
            mr="5"
            aria-label="Linkmenü"
            icon={<HamburgerIcon boxSize={['40px', '50px']} />}
            onClick={() => {
              setLinkMenue(!linkMenue)
            }}
          />
          <Collapse in={linkMenue}>
            <Box display={['block', 'block', 'none', 'none']}>
              <VStack
                width="100%"
                spacing="3"
                position="absolute"
                top="140px"
                left="0"
                bg="white"
                fontSize="2rem">
                <Link to="/projekt/">Immobilie</Link>
                <Link to="/lage/">Lage</Link>
                <scroll.Link
                  offset={-80}
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
              </VStack>
            </Box>
          </Collapse>
        </Flex>
      </Box>
    </style.NavbarStyle>
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
