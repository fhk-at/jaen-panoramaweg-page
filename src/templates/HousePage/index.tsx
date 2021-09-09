//#region > Imports
//> React
import React from 'react'
// Contains all the functionality necessary to define React components
import {fields} from '@snek-at/jaen-pages'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework

//> Components
//> CSS
import './index.scss'
import {Navbar, Footer} from '../../components/molecules'
import {
  Box,
  Checkbox,
  Center,
  Container,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  HStack,
  Image,
  Progress,
  Wrap,
  AspectRatio,
  Button
} from '@chakra-ui/react'
import {Link} from 'gatsby'
//#endregion

//#region > Components
const HousePage: JaenTemplate = (): JSX.Element => {
  const [maxSize, setMaxSize] = React.useState<number>(0)
  const [maxRooms, setMaxRooms] = React.useState<number>(0)
  const [minSize, setMinSize] = React.useState<number>(0)

  const [filters, setFilters] = React.useState<any>({
    sizeFilter: 0,
    roomFilter: 1,
    hasFilter: false,
    availableFilter: false
  })

  const handleValueChange = (val: any, stateName: string) => {
    setFilters({
      [stateName]: val,
      hasFilter: true
    })
  }

  const disableFilter = () => {
    setFilters({
      filterRooms: 1,
      filterSize: 0,
      availableFilter: false,
      hasFilter: false
    })
  }

  const findMinMax = (rooms: string, size: string) => {
    let parsedSize = parseInt(size)
    if (parsedSize > maxSize) {
      setMaxSize(parsedSize)
    }
    let parsedRooms = parseInt(rooms)
    if (parsedRooms > maxRooms) {
      setMaxRooms(parsedRooms)
    }
    if (parsedSize < minSize) {
      setMinSize(parsedSize)
    }
  }
  return (
    <Box
      as="section"
      id="housepage"
      minH="100vh"
      paddingTop="15vh"
      overflow="hidden"
      paddingBottom="12vh">
      <Navbar />
      <Container
        centerContent
        maxW="80vw"
        borderBottom="1px"
        borderColor="panoramaweg.lightgray"
        pb="12"
        mb="7">
        <Heading mb="0">
          <fields.TextField
            fieldName="housetitle"
            initValue="Housetitle"
            rtf={false}
          />
        </Heading>
        <Text fontSize="1.5rem" marginBottom="10">
          <fields.TextField
            fieldName="houseteaser"
            initValue="houseteaser"
            rtf="false"
          />
        </Text>
        <Flex>
          <AspectRatio ratio={16 / 10} minWidth="22vw">
            <fields.ImageField
              fieldName="houseimg"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'houseimg',
                title: 'houseimg'
              }}
            />
          </AspectRatio>

          <Container maxW="35vw" ml="10" fontSize="1.1rem">
            <fields.TextField
              fieldName="houserichtext"
              initValue="houserichtext"
            />
          </Container>
        </Flex>
      </Container>

      <Container centerContent maxW="40vw">
        <Text fontWeight="light" fontSize="1.75rem">
          <fields.TextField
            fieldName="houseadtext"
            initValue="houseadtext"
            rtf={false}
          />
        </Text>
        <HStack spacing="3">
          <Box
            width="fit-content"
            borderRadius="25px"
            border="1px"
            borderColor="panoramaweg.lightgray"
            padding="1vh"
            height="7vh">
            <Text>Wohnungsgröße mindestens</Text>
            <HStack spacing="3">
              <Text>0m²</Text>
              <Slider
                max={maxSize}
                step={5}
                value={filters.sizeFilter}
                onChange={value => {
                  handleValueChange(value, 'sizeFilter')
                }}>
                <SliderTrack bg="panoramaweg.lightgray">
                  <SliderFilledTrack bg="panoramaweg.green" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{maxSize}m²</Text>
            </HStack>
          </Box>
          <Box
            width="fit-content"
            borderRadius="25px"
            border="1px"
            borderColor="panoramaweg.lightgray"
            padding="1vh"
            height="7vh">
            <Text>Zimmer mindestens</Text>
            <HStack spacing="3">
              <Text>1</Text>
              <Slider
                min={1}
                max={maxRooms}
                value={filters.roomFilter}
                onChange={value => {
                  handleValueChange(value, 'roomFilter')
                }}>
                <SliderTrack bg="panoramaweg.lightgray">
                  <SliderFilledTrack bg="panoramaweg.green" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{maxRooms}</Text>
            </HStack>
          </Box>
          <Box
            width="fit-content"
            borderRadius="25px"
            border="1px"
            borderColor="panoramaweg.lightgray"
            padding="1vh"
            height="7vh">
            <Text>Verfügbar</Text>
            <Center marginTop="1">
              <Checkbox
                isChecked={filters.availableFilter}
                onChange={() =>
                  handleValueChange(!filters.availableFilter, 'availableFilter')
                }
              />
            </Center>
          </Box>
        </HStack>
      </Container>
      <fields.IndexField
        onRender={page => {
          function cleanFieldValues(value: string, type: string) {
            value = value.slice(3, value.length - 4)
            if (type === 'price') {
              value = value.replace('.', '')
            }
            return value
          }
          const filter: number[] = []
          const cards = []
          for (const child of page.children) {
            const fields = child.page.fields || {}

            const richtext =
              fields?.apartmentrichtextright?.content?.text ||
              '<p>No content found<p/>'
            const image =
              fields?.apartmentrightimg?.content?.src ||
              'https://i.ibb.co/J2jzkBx/placeholder.jpg'
            const size = fields?.apartmentsize?.content?.text || '<p>0</p>'
            const rooms = fields?.apartmentrooms?.content?.text || '<p>1</p>'
            const available =
              fields?.apartmentavailable?.content?.option || 'Verfügbar'
            let slug = child?.page?.slug

            const formatedSlug = slug.replace('top', 'Top ')
            const cleanedSize = cleanFieldValues(size, 'size')
            const cleanedRooms = cleanFieldValues(rooms, 'rooms')
            const cleanedRichtext = cleanFieldValues(richtext, 'richtext')
            const link = window.location.pathname + slug + '/'
            console.log(link)
            findMinMax(cleanedRooms, cleanedSize)

            if (
              parseInt(cleanedSize) < filters.sizeFilter ||
              parseInt(cleanedRooms) < filters.roomFilter ||
              (filters.availableFilter && available === 'Verkauft')
            ) {
              filter.push(cards.length)
            }

            cards.push(
              <>
                <Link to={link}>
                  <Box
                    width="25vw"
                    border="1px"
                    borderColor="panoramaweg.lightgray"
                    padding="5"
                    paddingRight="0"
                    borderRadius="25px">
                    <Flex>
                      <AspectRatio ratio={16 / 10} w="20vw">
                        <Image src={image}></Image>
                      </AspectRatio>

                      <Container size="lg">
                        <Heading>{formatedSlug}</Heading>
                        <Text>Wohnungsgröße: {cleanedSize}m²</Text>
                        <Progress
                          value={parseInt(cleanedSize)}
                          max={maxSize}
                          colorScheme="greenwhite"
                          borderRadius="25px"
                          size="sm"
                          width="100%"
                        />
                        <Text>Zimmer: {cleanedRooms}</Text>
                        <Progress
                          value={parseInt(cleanedRooms)}
                          max={maxRooms}
                          colorScheme="greenwhite"
                          borderRadius="25px"
                          size="sm"
                          width="100%"
                        />
                        <Text mt="1" noOfLines={4}>
                          {cleanedRichtext}
                        </Text>
                      </Container>
                    </Flex>
                  </Box>
                </Link>
              </>
            )
          }
          return (
            <Wrap spacing="5" justify="center" mt="5" mb="10">
              {cards.map((component, index) => {
                return (
                  <Box
                    key={index}
                    display={filter.includes(index) ? 'none' : 'static'}>
                    {component}
                  </Box>
                )
              })}
            </Wrap>
          )
        }}
      />
      <Container centerContent>
        <Button
          colorScheme="greenwhite"
          borderRadius="25px"
          display={filters.hasFilter ? 'static' : 'none'}
          onClick={() => disableFilter()}>
          Filter deaktivieren
        </Button>
      </Container>
      <Footer />
    </Box>
  )
}
//#endregion

HousePage.TemplateName = 'HousePage'
//#region > Exports
export default HousePage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
