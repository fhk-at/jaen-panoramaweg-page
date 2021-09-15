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
import Footer from '../components/molecules/Footer'

import {useFormik} from 'formik'
import {BifrostBridge} from '@snek-at/bridge'
import gql from 'graphql-tag'
import {Navbar} from '../components/molecules'
//#endregion

//#region
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
        git_remote: 'emailwerk/jaen-panoramaweg-page',
        form_first_name: formData.fname,
        form_last_name: formData.lname,
        form_telephone: formData.telephone,
        subject: formData.subject,
        from_email: formData.email,
        from_project_link: formData.url,
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
  // const top = useSelector((state: RootState) => state.lastVisited)

  const query = (typeof window !== 'undefined' && window.location.search) || ''
  const urlParams = new URLSearchParams(query)
  let url = typeof window === 'undefined' ? '' : window.location.href
  let top = urlParams.get('top') || ''
  let house = urlParams.get('house') || ''

  url = url.substring(0, url.indexOf('?'))
  if (top !== '' && house !== '') {
    url = url.replace('/kontakt/', '/' + house + '/' + top + '/')
  }
  top = top.replace('top', 'Top ')

  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      telephone: '',
      subject: 'Panoramaweg',
      message: '',
      url: url
    },
    onSubmit: values => {
      sendMail(values)
    },
    validationSchema: Yup.object({
      telephone: Yup.string().phone('AT').required(),
      email: Yup.string().email().required(),
      fname: Yup.string().required(),
      lname: Yup.string().required(),
      message: Yup.string().required()
    })
  })

  return (
    <Box
      as="section"
      id="contactpage"
      overflow="hidden"
      minH="100vh"
      paddingTop="15vh">
      <Navbar />
      <Container
        centerContent
        maxW={['100%', '100%', '40vw', '40vw']}
        mt={['10', '10', '0', '0']}>
        {top === '' ? (
          <Heading fontSize="1.75rem">
            Sie sind an einer unserer Immobilien interessiert?
          </Heading>
        ) : (
          <Flex fontSize="1.75rem">
            <Heading mr="1">Sie sind an</Heading>
            <Badge colorScheme="greenwhite" borderRadius="25px" pl="3" pr="3">
              <Text marginTop="2" fontSize="xl">
                {top}
              </Text>
            </Badge>
            <Heading ml="1">interessiert?</Heading>
          </Flex>
        )}
        <Text fontSize="1.5rem" fontWeight="thin">
          <fields.TextField
            fieldName="contactsubheading"
            initValue="<p>Kontaktieren Sie uns und und wir melden uns bei Ihnen!</p>"
          />
        </Text>
      </Container>
      <Container
        width={['100%', '100%', '70vw', '70vw']}
        centerContent
        mb="5"
        mt="20">
        <Flex direction={['column', 'column', 'row', 'row']}>
          <Box w={['90%', '90%', '30vw', '30vw']} mr="5">
            <Heading
              fontSize="1.5rem"
              w={['100%', '100%', '35vw', '35vw']}
              mb="7">
              Kontaktformular
            </Heading>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                id="fname"
                mb="5"
                isInvalid={
                  (formik.errors.fname && formik.touched.fname) || false
                }>
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
                isInvalid={
                  (formik.errors.lname && formik.touched.lname) || false
                }>
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
                isInvalid={
                  (formik.errors.email && formik.touched.email) || false
                }>
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
                isInvalid={
                  (formik.errors.telephone && formik.touched.telephone) || false
                }>
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
              <FormControl
                id="message"
                mb="5"
                isInvalid={
                  (formik.errors.message && formik.touched.message) || false
                }>
                <FormErrorMessage>
                  Bitte schreiben Sie uns eine Nachricht.
                </FormErrorMessage>
                <Textarea
                  placeholder="Nachricht"
                  borderRadius="25px"
                  size="lg"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
              </FormControl>
              <Box
                textAlign={['center', 'center', 'right', 'right']}
                mb={['5', '5']}>
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
          <Box
            w={['90%', '90%', '30vw', '30vw']}
            h={['content-fit', 'content-fit', '40vh', '40vh']}>
            <Heading fontSize="1.5rem">
              <fields.TextField
                fieldName="contactheadingright"
                initValue="<p>Wer sind wir</p>?"
              />
            </Heading>
            <Text fontSize="lg" mt="5">
              <fields.TextField
                fieldName="contactrightrichtext"
                initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
              />
            </Text>
          </Box>
        </Flex>
      </Container>
      <Footer />
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
