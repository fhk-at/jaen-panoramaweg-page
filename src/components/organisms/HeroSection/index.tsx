import {ChevronDownIcon} from '@chakra-ui/icons'
import {Box, Text, Container} from '@chakra-ui/react'

import HeroHidden from '../../molecules/HeroHidden'

import React from 'react'
import {fields} from '@snek-at/jaen-pages'
import * as style from './style'
//#region > Components
interface Props {
  button1: React.ReactNode
}

const HeroSection = ({button1}: Props): JSX.Element => {
  return (
    <>
      <style.HeroStyle>
        <Box
          as="section"
          id="hero"
          height="100vh"
          width="100%"
          display="flex"
          justifyContent="center"
          alignContent="center"
          position="relative">
          {/* <HeroHidden /> */}
          <fields.ImageField
            fieldName="herobackground"
            initValue={{
              src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
              title: 'herobackground',
              alt: 'herobackground'
            }}
            className="herobackground"
          />
          <Container>
            <fields.ImageField
              fieldName="herologo"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                title: 'Logo',
                alt: 'Logo'
              }}
              className="herologo"
            />
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
              <Text>{button1}</Text>
            </Box>
          </Container>
        </Box>
      </style.HeroStyle>
    </>
  )
}

export default HeroSection
//#endregion
