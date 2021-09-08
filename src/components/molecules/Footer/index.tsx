//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
// // React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {Box, Container, Flex, HStack, Text} from '@chakra-ui/react'

import {HiHeart} from '@react-icons/all-files/hi/HiHeart'
import {BiCopyright} from '@react-icons/all-files/bi/BiCopyright'
import {IconContext} from '@react-icons/all-files'
import {Link} from 'gatsby'

//> CSS
import './index.scss'
//#endregion
//#region > Components
const Footer = (): JSX.Element => {
  return (
    <Box
      backgroundColor="panoramaweg.lightgray"
      w="100vw"
      h="12vh"
      position="absolute"
      bottom="0">
      <Container w="100vw" centerContent color="panoramaweg.dark" pt="6">
        <Flex>
          <IconContext.Provider value={{style: {marginTop: '3'}}}>
            <BiCopyright />
          </IconContext.Provider>
          <Text>2021 Copyright: TOP Immo W.M. Trehand GmbH</Text>
        </Flex>
        <Flex fontWeight="bold" mt="2">
          <Text>Made with</Text>
          <IconContext.Provider value={{color: '#4299E1', size: '1.25em'}}>
            <HiHeart />
          </IconContext.Provider>
          <Text>by</Text>
          <Text ml="1" color="blue.400">
            InspireMedia GmbH
          </Text>
          <Text>.</Text>
        </Flex>
        <Flex fontSize="xs">
          <HStack spacing="5" mt="2">
            <Link to="">Impressum</Link>
            <Link to="">Datenschutz</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
//#endregion

//#region > Exports
export default Footer
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
