//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from 'react'
//> MDB
// "Material Design for Bootstrap" is a great UI design framework

import {Footer, Navbar} from '../../components/molecules'
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
    <Box as="section" id="apartmentpage">
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
        <Badge
          textTransform="none"
          variant="solid"
          color="white"
          backgroundColor="panoramaweg.green"
          fontSize="0.8rem"
          paddingTop="3"
          paddingBottom="3"
          paddingLeft="8"
          paddingRight="8">
          Verfügbar
        </Badge>
      </Container>
      <Container centerContent>
        <VStack spacing="7">
          <HStack spacing="7">
            <Box
              borderColor="panoramaweg.lightgray"
              border="1px"
              borderRadius="25px"
              h="40vh"
              w="27.5vw">
              <Box padding="4">
                <VStack spacing="5">
                  <Container centerContent>
                    <Text>Wohnungsgröße</Text>
                    <Flex>
                      <Box fontWeight="bold" fontSize="xl">
                        <fields.TextField
                          fieldName="apartmentsize"
                          initValue="0"
                          rtf={false}
                        />
                      </Box>
                      <Text fontWeight="bold" ml="1" fontSize="xl">
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
                    <Text>Preis</Text>
                    <Flex>
                      <Box fontWeight="bold" fontSize="xl">
                        <fields.TextField
                          fieldName="apartmentprice"
                          initValue="0"
                          rtf={false}
                        />
                      </Box>
                      <Text ml="1" fontWeight="bold" fontSize="xl">
                        €
                      </Text>
                    </Flex>
                    <Text fontSize="xs" color="gray">
                      inkl. Provision
                    </Text>
                  </Container>
                  <Container centerContent>
                    <Text>Wohnungstyp</Text>
                    <Box fontWeight="bold" fontSize="xl" mb="3">
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
            <Box h="40.5vh" w="27.5vw">
              <fields.ImageField
                fieldName="apartmentrightimg"
                initValue={{src: '', title: 'rightimg', alt: 'rightimg'}}
                borderRadius="25px"
                border="1px"
                borderColor="panoramaweg.lightgray"
              />
            </Box>
          </HStack>
          <HStack spacing="7">
            <Box
              borderRadius="25px"
              h="40.5vh"
              w="27.5vw"
              boxSizing="border-box">
              <fields.ImageField
                fieldName="apartmentleftimg"
                initValue={{src: '', title: 'leftimg', alt: 'lefttimg'}}
                borderRadius="25px"
              />
            </Box>
            <Box
              borderColor="panoramaweg.lightgray"
              border="1px"
              borderRadius="25px"
              h="40vh"
              w="27.5vw">
              <Box padding="4">
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
        borderColor="panoramaweg.lightgray"
        borderBottom="1px">
        <fields.TextField
          fieldName="apartmentbottomrichtext"
          initValue="apartmentbottomrichtext"
        />
        <Button
          leftIcon={<DownloadIcon color="white" />}
          backgroundColor="gray.600"
          _hover={{bg: 'gray.500'}}
          borderRadius="25px"
          textColor="white"
          fontSize="sm"
          fontWeight="light">
          Bau und Ausstattungsbeschreibung
        </Button>
      </Container>
      <Container as="div" centerContent mt="5">
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
      {/* <Footer /> */}
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
