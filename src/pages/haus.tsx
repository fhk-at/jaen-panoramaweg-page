import {Box, CircularProgress, Container, Text} from '@chakra-ui/react'
import {navigate} from 'gatsby-link'
import {useEffect} from 'react'
import {CookieModal} from '../components/molecules'

const HouseRoot = () => {
  useEffect(() => navigate('/'), [])

  return (
    <>
      <CookieModal />
      <Box as="section" id="rootingpage" overflow="hidden">
        <Container marginTop="45vh" centerContent>
          <Text>Sie werden auf die Hauptseite weitergeleitet.</Text>
        </Container>
      </Box>
    </>
  )
}

export default HouseRoot
