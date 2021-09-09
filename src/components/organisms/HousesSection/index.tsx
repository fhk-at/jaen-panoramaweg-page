//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from 'react'
import {fields} from '@snek-at/jaen-pages'
// React Router
// import { Link } from "react-router-dom";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
//> Components
//> CSS
import './index.scss'
import {Box, Container, Heading, Text, Wrap} from '@chakra-ui/react'
//#endregion

interface Props {
  househead: React.ReactNode
  housesubhead: React.ReactNode
}

//#region > Components
const HousesSection = ({househead, housesubhead}: Props): JSX.Element => {
  // const addDot = (x: any) => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  // };

  return (
    <Box as="section" id="housesection">
      <Container centerContent maxW="40vw">
        <Heading fontSize="1.75rem">{househead}</Heading>
        <Text fontSize="1.1rem">{housesubhead}</Text>
        <fields.IndexField
          fieldName="houseindex"
          fixedSlug="SitePage /haus/"
          onRender={page => {
            console.log(page)
            const children = page?.children || []
            const cards = []
            for (const child of children) {
              console.log(child)
              cards.push(<Box></Box>)
            }
            return (
              <Wrap>
                {cards.map((card, key) => {
                  return <Box key={key}>{card}</Box>
                })}
              </Wrap>
            )
          }}
        />
      </Container>
    </Box>
  )
}

export default HousesSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
