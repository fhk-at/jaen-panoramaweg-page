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
        height="100%"
        width="100%"
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
        <Container
          position="absolute"
          top="0"
          left="0"
          paddingTop="35vh"
          marginLeft="37.5vw"
          marginRight="37.5vw">
          <StaticImage
            className="logoBG"
            imgClassName="logo"
            src="../../../images/logo_white.png"
            alt="logo-white"
            title="logo-white"
          />
          <Box
            ml="5vw"
            mt="1"
            as="button"
            borderRadius="30px"
            width="8vw"
            height="5.5vh"
            backgroundColor="white"
            color="black"
            justifyContent="center"
            alignContent="center"
            zIndex={10}
            display="flex"
            paddingTop="5">
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
