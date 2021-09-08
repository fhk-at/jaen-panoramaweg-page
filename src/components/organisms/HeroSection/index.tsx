import {ChevronDownIcon} from '@chakra-ui/icons'
import {Box, Text, Container} from '@chakra-ui/react'
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
      <Box as="section" id="hero" height="100vh" width="100vw">
        <StaticImage
          className="herobackground"
          imgClassName="herobackgroundimg"
          src="../../../images/bg.jpg"
          alt="background"
          title="background"
        />
        <Container
          centerContent
          size="sm"
          marginTop="20vh"
          className="herocontainer">
          <StaticImage
            className="logoBG"
            imgClassName="logo"
            src="../../../images/logo_white.png"
            alt="logo-white"
            title="logo-white"
            as="span"
          />
          <Box
            mt="1"
            as="button"
            position="relative"
            borderRadius="25px"
            width="8vw"
            height="5.5vh"
            backgroundColor="white"
            color="black"
            justifyContent="center"
            alignContent="center"
            zIndex={10}
            display="flex"
            paddingTop="4"
            paddingRight="1">
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
