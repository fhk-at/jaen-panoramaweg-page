import {Box} from '@chakra-ui/react'
import {useOptions} from '@snek-at/jaen-pages'
import {withRedux} from '@snek-at/jaen-pages'

const HeroHidden = () => {
  const {isEditing} = useOptions()

  return (
    <Box
      display={isEditing ? 'none' : 'absolute'}
      bg="#9C27B01A"
      width="100vw"
      height="100vh"
      position="absolute"
      top="0"
      left="0"
      zIndex="1"
    />
  )
}

export default withRedux(HeroHidden)
