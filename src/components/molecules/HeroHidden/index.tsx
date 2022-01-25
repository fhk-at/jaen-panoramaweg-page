import {Box} from '@chakra-ui/react'
import {useOptions} from '@jaenjs/jaen'
import {withRedux} from '@jaenjs/jaen'

const HeroHidden = () => {
  return (
    <Box
      bg="#9C27B01A"
      width="100%"
      height="100vh"
      position="absolute"
      top="0"
      left="0"
      zIndex="1"
      pointerEvents="none"
    />
  )
}

export default HeroHidden
