import {Box, Text, Flex} from '@chakra-ui/react'
import {fields, useOptions} from '@jaenjs/jaen'
import {withRedux} from '@jaenjs/jaen'

const Rooms = () => {
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

const Download = () => {
  const {isEditing} = useOptions()
  return (
    <Box display={isEditing ? 'static' : 'none'}>
      <Text mr="1">Download URL:</Text>
      <fields.TextField
        fieldName="apartmentpdf"
        initValue="<p>snek.at</p>"
        rtf={false}
      />
    </Box>
  )
}

export const ApartmentDownload = withRedux(Download)
export const ApartmentRooms = withRedux(Rooms)
