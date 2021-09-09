import {ChevronDownIcon} from '@chakra-ui/icons'
import {Box, Text, Container, Center} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'

import React from 'react'
import './index.scss'
//#region > Components
interface Props {
  button1: React.ReactNode
}

const HeroSection = ({button1}: Props): JSX.Element => {
  return (
    <>
      <Box
        as="section"
        id="hero"
        height="100vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignContent="center"
        position="relative">
        <Box
          bg="#9C27B01A"
          width="100vw"
          height="100vh"
          position="absolute"
          top="0"
          left="0"
        />
        <StaticImage
          className="herobackground"
          imgClassName="herobackgroundimg"
          src="../../../images/bg.jpg"
          alt="background"
          title="background"
        />
        <Container>
          <StaticImage
            className="logoBG"
            imgClassName="logo"
            src="../../../images/logo_white.png"
            alt="logo-white"
            title="logo-white"
          />
          <Box
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
    </>
  )
}

export default HeroSection
//#endregion
