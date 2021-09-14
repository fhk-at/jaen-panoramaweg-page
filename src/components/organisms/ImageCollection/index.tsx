import {Center, Wrap, WrapItem} from '@chakra-ui/layout'

const ImageCollection: React.FC = ({children}) => {
  // BlockContainer
  // ImageCollectionBlock

  // children inside of Wrap

  return (
    <Wrap>
      <WrapItem>
        <Center boxSize="300px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center boxSize="300px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center boxSize="300px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center boxSize="300px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center boxSize="300px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center boxSize="300px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center boxSize="300px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center boxSize="300px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  )
}

export default ImageCollection
