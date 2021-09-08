//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from 'react'
//> MDB
// "Material Design for Bootstrap" is a great UI design framework

import Footer from '../../components/molecules/Footer'
import {Navbar} from '../../components/molecules'

//> CSS
import './index.scss'

//> SNEK
import {fields, useOptions} from '@snek-at/jaen-pages'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'
import {CopyIcon, DownloadIcon} from '@chakra-ui/icons'
import {Link} from 'gatsby'
import {withRedux} from '@snek-at/jaen/src/store/withRedux'
import ApartmentHidden from '../../components/organisms/ApartmentHidden'
import {resetWarningCache} from 'prop-types'

const ApartmentPage: JaenTemplate = () => {
  const url = window.location.href
  let breadcrumbs = url.split('/')

  breadcrumbs = breadcrumbs.slice(3)

  function format(value: string[]) {
    value[0] = value[0].replace('haus', 'haus ')
    value[1] = value[1].replace('top', 'top ')
    for (let i = 0; i < value.length; i++) {
      value[i] = value[i].charAt(0).toUpperCase() + value[i].substring(1)
    }
    return value
  }

  const parenthref = '/' + breadcrumbs[0] + '/'

  breadcrumbs = format(breadcrumbs)

  return (
    <Box
      as="section"
      id="apartmentpage"
      minH="100vh"
      overflow="hidden"
      paddingTop="15vh">
      <Navbar />
      <Center mb="5">
        <Breadcrumb
          backgroundColor="panoramaweg.lightgray"
          borderRadius="25px"
          w="58vw"
          padding="3">
          <BreadcrumbItem>
            <BreadcrumbLink color="#0645AD">
              <Link to="/">Übersicht</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink color="#0645AD">
              <Link to={parenthref}>{breadcrumbs[0]}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink color="#0645AD">{breadcrumbs[1]}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
      <Container centerContent mb="5">
        <Heading>{breadcrumbs[0] + ' / ' + breadcrumbs[1]}</Heading>
        <Text mb="4" fontSize="xl" fontWeight="light">
          <fields.TextField
            fieldName="apartmentsubhead"
            initValue="Penthouse"
          />
        </Text>
        <fields.ChoiceField
          fieldName="apartmentavailable"
          initValue="Verfügbar"
          options={['Verfügbar', 'Verkauft']}
          onRenderPopover={(selection, options, select) => {
            return (
              <Box>
                {options.map((option, key) => {
                  return (
                    <Button
                      disabled={option === selection}
                      onClick={() => select(option)}
                      textTransform="none"
                      variant="solid"
                      color="white"
                      backgroundColor={
                        option === 'Verfügbar' ? '#77bd43' : '#f61a42'
                      }
                      fontSize="0.8rem"
                      paddingTop="3"
                      paddingBottom="3"
                      paddingLeft="8"
                      paddingRight="8"
                      _hover={
                        option === 'Verfügbar'
                          ? {bg: '#6bab3c'}
                          : {bg: '#DD173B'}
                      }>
                      {option}
                    </Button>
                  )
                })}
              </Box>
            )
          }}
          onRender={selection => {
            return (
              <Badge
                textTransform="none"
                variant="solid"
                color="white"
                backgroundColor={
                  selection === 'Verfügbar' ? '#77bd43' : '#f61a42'
                }
                fontSize="0.8rem"
                paddingTop="3"
                paddingBottom="3"
                paddingLeft="8"
                paddingRight="8">
                {selection}
              </Badge>
            )
          }}
        />
      </Container>
      <Container centerContent>
        <VStack spacing="7">
          <HStack spacing="7">
            <Box
              border="1px"
              borderColor="panoramaweg.lightgray"
              borderRadius="25px"
              h="40vh"
              w="27.5vw">
              <Box padding="4">
                <VStack spacing="5">
                  <Container centerContent>
                    <Text fontSize="1.1rem">Wohnungsgröße</Text>
                    <Flex>
                      <Box fontSize="1.5rem" fontWeight="bold">
                        <fields.TextField
                          fieldName="apartmentsize"
                          initValue="0"
                          rtf={false}
                        />
                      </Box>
                      <Text ml="1" fontSize="1.5rem" fontWeight="bold">
                        m²
                      </Text>
                    </Flex>
                    <>
                      <ApartmentHidden />
                    </>
                    <Text color="gray" fontSize="xs">
                      exkl. Balkon
                    </Text>
                  </Container>
                  <Container centerContent>
                    <Text fontSize="1.1rem">Preis</Text>
                    <Flex fontSize="1.5rem" fontWeight="bold">
                      <fields.TextField
                        fieldName="apartmentprice"
                        initValue="0"
                        rtf={false}
                      />
                      <Text ml="1">€</Text>
                    </Flex>
                    <Text fontSize="xs" color="gray">
                      inkl. Provision
                    </Text>
                  </Container>
                  <Container centerContent>
                    <Text fontSize="1.1rem">Wohnungstyp</Text>
                    <Box fontSize="1.5rem" fontWeight="bold" mb="3">
                      <fields.TextField
                        fieldName="apartmenttype"
                        initValue="Penthouse"
                      />
                    </Box>
                  </Container>
                </VStack>
                <Container centerContent>
                  <Button
                    backgroundColor="panoramaweg.green"
                    _hover={{bg: '#6bab3c'}}
                    color="white"
                    borderRadius="25px"
                    size="lg"
                    fontSize="xs"
                    paddingLeft="8"
                    paddingRight="8">
                    Kontakt
                  </Button>
                </Container>
              </Box>
            </Box>
            <Box h="40vh" w="27.5vw">
              <fields.ImageField
                fieldName="apartmentrightimg"
                initValue={{
                  src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                  title: 'rightimg',
                  alt: 'rightimg'
                }}
                borderRadius="25px"
                h="40vh"
                w="27.5vw"
                objec
              />
            </Box>
          </HStack>
          <HStack spacing="7">
            <Box borderRadius="25px" h="40vh" w="27.5vw">
              <fields.ImageField
                fieldName="apartmentleftimg"
                initValue={{
                  src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                  title: 'leftimg',
                  alt: 'lefttimg'
                }}
                borderRadius="25px"
                height="40vh"
                width="27.5vw"
                objectFit="fill"
              />
            </Box>
            <Box
              border="1px"
              borderColor="panoramaweg.lightgray"
              borderRadius="25px"
              h="40vh"
              w="27.5vw">
              <Box padding="4" fontSize="1.1rem">
                <fields.TextField
                  fieldName="apartmentrichtextright"
                  initValue="apartmentrichtextright"
                />
              </Box>
            </Box>
          </HStack>
        </VStack>
      </Container>
      <Container
        pb="2"
        maxW="58vw"
        mt="12"
        borderBottom="1px"
        borderColor="panoramaweg.lightgray">
        <Text fontSize="1.1rem" fontWeight="light">
          <fields.TextField
            fieldName="apartmentbottomrichtext"
            initValue="apartmentbottomrichtext"
          />
        </Text>
        <Button
          leftIcon={<DownloadIcon color="white" />}
          backgroundColor="gray.600"
          _hover={{bg: 'gray.500'}}
          borderRadius="25px"
          textColor="white"
          fontSize="sm"
          fontWeight="light"
          mt="3">
          Bau und Ausstattungsbeschreibung
        </Button>
      </Container>
      <Container as="div" centerContent mt="5" mb="10">
        <Heading>Interessiert?</Heading>
        <Button
          backgroundColor="panoramaweg.green"
          _hover={{bg: '#6bab3c'}}
          color="white"
          variant="solid"
          borderRadius="25px"
          size="lg">
          Kontaktiere uns
        </Button>
      </Container>
      <Footer />
    </Box>
  )
}
//#endregion

ApartmentPage.TemplateName = 'ApartmentPage'

//#region > Exports
export default ApartmentPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
