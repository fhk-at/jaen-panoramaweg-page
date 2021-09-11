//#region > Imports
//> React
// Contains all the functionality necessary to define React components
// import React from "react";
// React Router
// import { Link } from "react-router-dom";

//> CSS
import {Container, Heading, Text, Box, Image, Wrap} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {Link} from 'gatsby'
import './index.scss'
//> Images
// import logoImg from "../../../common/img/agency-small.png";
//#endregion

//#region > Components
interface Props {
  bloghead: React.ReactNode
  blogsubhead: React.ReactNode
}

const BlogSection = ({bloghead, blogsubhead}: Props): JSX.Element => {
  return (
    <Container centerContent maxW="70vw">
      <Heading fontSize="1.5rem">{bloghead}</Heading>
      <Text fontSize="1.1rem">{blogsubhead}</Text>
      {/* <MDBStepper>
        <MDBStep className="done">
          <span className="step-item">
            <span className="circle green">
              <MDBIcon icon="check" />
            </span>
            <span className="label">Finanzierung</span>
          </span>
        </MDBStep>
        <MDBStep className="active">
          <span className="step-item">
            <span className="circle">2</span>
            <span className="label">Baustart</span>
          </span>
        </MDBStep>
        <MDBStep>
          <span className="step-item">
            <span className="circle">3</span>
            <span className="label">Baustart</span>
          </span>
        </MDBStep>
        <MDBStep className="info">
          <span className="step-item">
            <span className="circle">4</span>
            <span className="label">Platzhalter</span>
          </span>
        </MDBStep>
        <MDBStep className="info">
          <span className="step-item">
            <span className="circle">5</span>
            <span className="label">Fertigstellung</span>
          </span>
        </MDBStep>
      </MDBStepper> */}

      <fields.IndexField
        fieldName="blogindex"
        fixedSlug="SitePage /blog/"
        onRender={page => {
          function removePTags(value: string) {
            return value.substring(3, value.length - 4)
          }

          const children = page?.children
          const cards = []

          for (const child of children) {
            const slug = child?.page?.slug
            const fields = child?.page?.fields
            const heading = removePTags(
              fields?.bloghead?.content?.text || '<p>No content available</p>'
            )
            const text = removePTags(
              fields?.blogrichtext?.content?.text ||
                '<p>No content available</p>'
            )
            const img =
              fields?.blogimgleftimg?.content?.src ||
              'https://i.ibb.co/J2jzkBx/placeholder.jpg'

            console.log(slug)

            cards.push(
              <Link to={'/' + slug + '/'}>
                <Box
                  border="1px"
                  borderColor="panoramaweg.lightgray"
                  borderRadius="25px"
                  boxSizing="border-box"
                  width="425px">
                  <Image
                    src={img}
                    height="285px"
                    width="425px"
                    borderTopRadius="25px"
                  />
                  <Box padding="5">
                    <Heading fontSize="1.5rem">{heading}</Heading>
                    <Text noOfLines={3} fomtSize="1.1rem">
                      {text}
                    </Text>
                  </Box>
                </Box>
              </Link>
            )
          }

          return (
            <Wrap justify="center" spacing="5" marginTop="5">
              {cards.map((card, key) => {
                return <Box key={key}>{card}</Box>
              })}
            </Wrap>
          )
        }}
      />
    </Container>
  )
}

export default BlogSection
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
