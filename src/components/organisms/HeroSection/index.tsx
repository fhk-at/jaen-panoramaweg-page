import {ChevronDownIcon} from '@chakra-ui/icons'
import {Box, Text, Center, VStack} from '@chakra-ui/react'

import {Link} from 'react-scroll'
import HeroHidden from '../../molecules/HeroHidden'

import React from 'react'
import {fields} from '@snek-at/jaen-pages'
import * as style from './style'
//#region > Components

const HeroSection = (): JSX.Element => {
  return (
    <>
      <style.HeroStyle>
        <Box h="100vh">
          <fields.ImageField
            fieldName="herobackground"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              title: 'herobackground',
              alt: 'herobackground'
            }}
            className="herobackground"
          />
          <HeroHidden />
          <Box
            justifyContent="center"
            alignContent="center"
            position="absolute"
            top="40vh"
            left="38vw">
            <VStack spacing="5">
              <fields.ImageField
                fieldName="herologo"
                initValue={{
                  src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                  title: 'Logo',
                  alt: 'Logo'
                }}
                className="herologo"
              />
              <Link to="imagetopsection" isDynamic smooth={true}>
                <Box
                  position="relative"
                  margin="auto"
                  as="button"
                  marginTop="2rem"
                  padding="1rem"
                  borderRadius="30px"
                  backgroundColor="white"
                  color="black"
                  justifyContent="center"
                  alignContent="center"
                  zIndex={10}
                  display="flex">
                  <ChevronDownIcon w={6} h={6} />
                  <Text>Mehr dazu</Text>
                </Box>
              </Link>
            </VStack>
          </Box>
        </Box>
      </style.HeroStyle>
    </>
  )
}

export default HeroSection
//#endregion
