import {Box, Text, Flex} from '@chakra-ui/react'
import {fields, useOptions} from '@snek-at/jaen-pages'
import {withRedux} from '@snek-at/jaen-pages'

const ApartmentHidden = () => {
  const {isEditing} = useOptions()

  return (
    <Box display={isEditing ? 'static' : 'none'}>
      <Flex>
        <Text>Zimmer: </Text>
        <fields.TextField
          fieldName="apartmentrooms"
          initValue="<p>0</p>"
          rtf={false}
        />
      </Flex>
    </Box>
  )
}

export default withRedux(ApartmentHidden)
