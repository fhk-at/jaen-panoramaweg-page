//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
import {Box, Spacer, Flex, HStack, Heading} from '@chakra-ui/react'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
// Style
import './index.scss'
//#endregion

//#region > Components
const Navbar = (): JSX.Element => {
  return (
    <Box
      as="section"
      id="navbar"
      height="15vh"
      width="100vw"
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
        <Spacer />
        <HStack
          pr="4.2vw"
          spacing="8"
          pt="3.3vh"
          fontSize="1.4rem"
          fontWeight="bold">
          <Link to="">Immobilie</Link>
          <Link to="">Lage</Link>
          <Link to="">Baufortschritt</Link>
          <Link to="/kontakt/">Kontakt</Link>
        </HStack>
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
