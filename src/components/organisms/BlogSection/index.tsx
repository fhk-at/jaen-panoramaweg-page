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
import {Step, Steps} from 'chakra-ui-steps'

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
    <Container centerContent maxW="80vw" mb="10" mt="5">
      <Heading fontSize="1.5rem">{bloghead}</Heading>
      <Text fontSize="1.1rem" mb="5">
        {blogsubhead}
      </Text>

      <fields.ChoiceField
        fieldName="stepper"
        options={[
          'Finanzierung',
          'Baustart',
          'Platzhalter',
          'Platzhalter',
          'Fertigstellung'
        ]}
        initValue={2}
        onRenderPopover={null}
        onRender={(selection, options, onSelect, isEditing) => {
          return (
            <Steps activeStep={selection} colorScheme="greenwhite">
              {options.map((option, index) => (
                <Step
                  cursor={isEditing ? 'pointer' : 'default'}
                  isCompletedStep={
                    selection === options.length - 1 ? true : undefined
                  }
                  label={option}
                  key={index}
                  onClick={
                    isEditing ? () => onSelect(index) : () => null
                  }></Step>
              ))}
            </Steps>
          )
        }}
      />
      <Box marginTop="5" />
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
              fields?.bloghead?.content?.text || '<p>Überschrift</p>'
            )
            const text = removePTags(
              fields?.blogrichtext?.content?.text ||
                '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
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
