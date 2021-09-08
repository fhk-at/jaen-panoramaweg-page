//#region > Imports
//> React
// Contains all the functionality necessary to define React components

import * as Yup from 'yup'
import 'yup-phone'

import {
  Box,
  FormControl,
  Input,
  Heading,
  Container,
  Badge,
  Flex,
  Text,
  Button,
  Textarea,
  FormErrorMessage
} from '@chakra-ui/react'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'
import {fields} from '@snek-at/jaen-pages'
import {Footer, Navbar} from '../../molecules'

import {useFormik} from 'formik'

//> CSS
import './index.scss'
import {BifrostBridge} from '@snek-at/bridge'
import {useToast} from '@chakra-ui/react'
import gql from 'graphql-tag'
//#endregion

//#region > Bi-Stack
const Bridge = new BifrostBridge({
  httpUrl: 'https://origin.snek.at/graphql'
})

// const toast = useToast()

const sendMail = async (formData: any) => {
  const mailRes = await Bridge.session.mutate<{
    jaenPublishFormPage: {result: string}
  }>(
    gql`
      mutation jaenEmailFormPageMutation(
        $values: GenericScalar!
        $url: String!
      ) {
        jaenEmailFormPage(values: $values, url: $url) {
          result
          errors {
            name
            errors
          }
        }
      }
    `,
    {
      url: '/jaen-email',
      values: {
        git_remote: 'fhk-at/wg-st-jakob-ros-front',
        form_first_name: formData.fname,
        form_last_name: formData.lname,
        telephone: formData.telephone,
        subject: formData.subject,
        from_email: formData.email,
        html_message: formData.message
      }
    }
  )

  //   if (mailRes.data?.jaenPublishFormPage?.result === 'OK') {
  //     toast({
  //       title: 'Email versendet.',
  //       status: 'success',
  //       duration: 9000,
  //       isClosable: true
  //     })
  //   } else {
  //     toast({
  //       title: 'Error: Email konnte nicht versendet werden.',
  //       status: 'error',
  //       duration: 9000,
  //       isClosable: true
  //     })
  //   }
}
//#endregion

//#region > Components
const ContactPage: JaenTemplate = () => {
  const top = 'TOP 10'

  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      telephone: '',
      subject: 'TopImmo Contact',
      message: ''
    },
    onSubmit: values => {
      sendMail(values)
    },
    validationSchema: Yup.object({
      telephone: Yup.string().phone('AT').required(),
      email: Yup.string().email().required(),
      fname: Yup.string().required(),
      lname: Yup.string().required()
    })
  })

  return (
    <Box as="section" id="contactpage">
      <Container centerContent maxW="40vw">
        <Flex>
          <Heading mr="1">Sie sind an</Heading>
          <Badge colorScheme="greenwhite" borderRadius="25px" pl="3" pr="3">
            <Text marginTop="2" fontSize="xl">
              {top}
            </Text>
          </Badge>
          <Heading ml="1">interessiert?</Heading>
        </Flex>
        <Text>
          <fields.TextField fieldName="contactsubheading" />
        </Text>
      </Container>
      <Container width="70vw" centerContent>
        <Flex>
          <Box w="30vw" mr="5">
            <Heading as="h3" w="35vw">
              Kontaktformular
            </Heading>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                id="fname"
                mb="5"
                isInvalid={formik.errors.fname && formik.touched.fname}>
                <FormErrorMessage>
                  Bitte geben Sie Ihren Vornamen ein.
                </FormErrorMessage>
                <Input
                  placeholder="Vorname"
                  borderRadius="25px"
                  onChange={formik.handleChange}
                  value={formik.values.fname}
                />
              </FormControl>
              <FormControl
                id="lname"
                mb="5"
                isInvalid={formik.errors.lname && formik.touched.lname}>
                <FormErrorMessage>
                  Bitte geben Sie Ihren Nachnamen ein.
                </FormErrorMessage>
                <Input
                  placeholder="Nachname"
                  borderRadius="25px"
                  onChange={formik.handleChange}
                  value={formik.values.lname}
                />
              </FormControl>
              <FormControl
                id="email"
                mb="5"
                isInvalid={formik.errors.email && formik.touched.email}>
                <FormErrorMessage>
                  Bitte geben Sie eine korrekte Emailadresse ein.
                </FormErrorMessage>
                <Input
                  placeholder="Email"
                  borderRadius="25px"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl
                id="telephone"
                mb="5"
                isInvalid={formik.errors.telephone && formik.touched.telephone}>
                <FormErrorMessage>
                  Die Telefonnummer muss in dem Schema +43664 5678901 eingegeben
                  werden.
                </FormErrorMessage>
                <Input
                  type="tel"
                  placeholder="Telefonnummer"
                  borderRadius="25px"
                  onChange={formik.handleChange}
                  value={formik.values.telephone}
                />
              </FormControl>
              <FormControl id="message" mb="5">
                <Textarea
                  placeholder="Notiz"
                  borderRadius="25px"
                  size="lg"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
              </FormControl>
              <Box textAlign="right">
                <Button
                  type="submit"
                  colorScheme="greenwhite"
                  size="lg"
                  borderRadius="25px">
                  Absenden
                </Button>
              </Box>
            </form>
          </Box>
          <Box w="30vw" h="40vh">
            <Heading>
              <fields.TextField
                fieldName="contactheadingright"
                initValue="Wer sind wir?"
              />
            </Heading>
            <fields.TextField
              fieldName="contactrightrichtext"
              initValue="Fill me"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
//#endregion

ContactPage.TemplateName = 'ContactPage'
//#region > Exports
export default ContactPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
