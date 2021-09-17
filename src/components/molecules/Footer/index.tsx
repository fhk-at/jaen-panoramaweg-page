//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
// // React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import {HiHeart} from '@react-icons/all-files/hi/HiHeart'
import {BiCopyright} from '@react-icons/all-files/bi/BiCopyright'
import {IconContext} from '@react-icons/all-files'
import {Link} from '@chakra-ui/react'

//> CSS
import './index.scss'
//#endregion
//#region > Components
const Footer = (): JSX.Element => {
  const bgColor = useColorModeValue('panoramaweg.lightgray', 'gray.700')
  const fontColor = useColorModeValue('black', 'white')

  return (
    <Box bg={bgColor} w="100%" h="115px" position="absolute" bottom="0">
      <Container w="fit-content" centerContent color={fontColor} pt="4">
        <Flex>
          <IconContext.Provider value={{style: {'margin-top': '4'}}}>
            <BiCopyright />
          </IconContext.Provider>
          <Text
            ml="1"
            fontSize={['0.7rem', '0.8rem', '1.1rem', '1.1rem']}
            pt={['1', '0', '0', '0']}>
            2021 Copyright: TOP Immo W.M. Treuhand GmbH
          </Text>
        </Flex>
        <Flex
          fontWeight="bold"
          mt="2"
          fontSize={['0.7rem', '0.8rem', '1.1rem', '1.1rem']}>
          <Text>Made with</Text>
          <Link href="https://snek.at" isExternal>
            <IconContext.Provider value={{color: '#4299E1', size: '1.25em'}}>
              <HiHeart />
            </IconContext.Provider>
          </Link>
          <Text>by</Text>
          <Text ml="1" color="blue.400">
            InspireMedia GmbH
          </Text>
          <Text>.</Text>
        </Flex>
        <Flex fontSize="xs">
          <HStack spacing="5" mt="2">
            <Link href="https://www.top-immo.org/about" isExternal>
              Impressum
            </Link>
            <Link fontSize="sm" href="https://snek.at" isExternal>
              Powered by Snek
            </Link>
            <Link href="https://www.top-immo.org/privacy" isExternal>
              Datenschutz
            </Link>
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
