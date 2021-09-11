import {Box, CircularProgress, Container} from '@chakra-ui/react'
import {Redirect} from '@reach/router'

const HouseRoot = () => {
  return (
    <Box as="section" id="rootingpage" overflow="hidden">
      <Container marginTop="45vh" centerContent>
        <CircularProgress
          isIndeterminate
          color="panoramaweg.green"
          size="5vh"
        />
      </Container>
      <Redirect to="/" />
    </Box>
  )
}

export default HouseRoot
