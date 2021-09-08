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
  AspectRatio
} from '@chakra-ui/react'
//#endregion

//#region > Components
const HousePage: JaenTemplate = (): JSX.Element => {
  const [maxSize, setMaxSize] = React.useState<number>(0)
  const [maxRooms, setMaxRooms] = React.useState<number>(0)
  const [minSize, setMinSize] = React.useState<number>(0)

  const [filters, setFilters] = React.useState<any>({
    sizeFilter: 0,
    roomFilter: 1,
    hasFilter: false
  })

  const handleValueChange = (val: number, stateName: string) => {
    setFilters({
      [stateName]: val,
      hasFilter: true
    })
  }

  const disableFilter = () => {
    setFilters({filterRooms: 1, filterSize: 0, hasFilter: false})
  }

  const disableFilterReset =
    filters.roomFilter === 1 && filters.sizeFilter === 0

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
    <Box as="section" id="housepage">
      <Container
        centerContent
        maxW="80vw"
        borderBottom="1px"
        borderColor="panoramaweg.lightgray"
        pb="3"
        mb="2">
        <Heading as="h3">
          <fields.TextField
            fieldName="housetitle"
            initValue="Housetitle"
            rtf={false}
          />
        </Heading>
        <Text fontSize="1.75rem">
          <fields.TextField
            fieldName="houseteaser"
            initValue="houseteaser"
            rtf="false"
          />
        </Text>
        <Flex>
          <AspectRatio ratio={16 / 10} width="22vw">
            <fields.ImageField
              fieldName="houseimg"
              initValue={{
                src: '../../images/content.placeholder.jpg',
                alt: 'houseimg',
                title: 'houseimg'
              }}
            />
          </AspectRatio>

          <Container maxW="35vw" ml="10">
            <fields.TextField
              fieldName="houserichtext"
              initValue="houserichtext"
            />
          </Container>
        </Flex>
        <hr />
      </Container>

      <Container centerContent maxW="33vw">
        <Text fontSize="1.25rem" fontWeight="lighter">
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
            <Text>Verfügbarkeit</Text>
            <Center marginTop="1">
              <Checkbox />
            </Center>
          </Box>
        </HStack>
      </Container>
      <Center mt="3"></Center>
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

            const image = fields?.apartmentrightimg?.content?.src || ''
            const size = fields?.apartmentsize?.content?.text || '<p>0</p>'
            const rooms = fields?.apartmentrooms?.content?.text || '<p>1</p>'
            let slug = child?.page?.slug

            const formatedSlug = slug.replace('top', 'Top ')
            const cleanedSize = cleanFieldValues(size, 'size')
            const cleanedRooms = cleanFieldValues(rooms, 'rooms')
            // console.log('rooms', rooms)
            findMinMax(cleanedRooms, cleanedSize)

            if (
              parseInt(cleanedSize) < filters.sizeFilter ||
              parseInt(cleanedRooms) < filters.roomFilter
            ) {
              filter.push(cards.length)
              console.log('hi')
            }

            cards.push(
              <>
                <Box
                  width="30vw"
                  border="1px"
                  borderColor="panoramaweg.lightgray"
                  height="24.25vh"
                  paddingTop="5"
                  borderRadius="25px">
                  <Flex>
                    <AspectRatio ml="5" ratio={16 / 10} w="40vw">
                      <Image w="20vw" src={image}></Image>
                    </AspectRatio>

                    <Container>
                      <Heading>{formatedSlug}</Heading>
                      <Text>Wohnungsgröße: {cleanedSize}m²</Text>
                      <Progress
                        value={parseInt(cleanedSize)}
                        max={maxSize}
                        colorScheme="greenwhite"
                        borderRadius="25px"
                        size="sm"
                      />
                      <Text>Zimmer: {cleanedRooms}</Text>
                      <Progress
                        value={parseInt(cleanedRooms)}
                        max={maxRooms}
                        colorScheme="greenwhite"
                        borderRadius="25px"
                        size="sm"
                      />
                      <Text>
                        Diese schöne Wohnung liegt im Süden mit Fenstern auf
                        alle Seiten. Werden Sie von der Sonne bei Panoramablick
                        wachgeküsst.
                      </Text>
                    </Container>
                  </Flex>
                </Box>
              </>
            )
          }
          return (
            <Wrap spacing="5" justify="center">
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
