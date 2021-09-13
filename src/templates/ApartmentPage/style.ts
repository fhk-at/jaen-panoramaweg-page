import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../utils'

export const responsiveImage = styled(Box)`
  .responsiveImage {
    ${mq[0]} {
      width: 300px;
      height: 30vh;
    }
    ${mq[1]} {
      width: 300px;
      height: 30vh;
    }
    ${mq[2]} {
      width: 600px;
      height: 40vh;
    }
    ${mq[3]} {
      width: 600px;
      height: 40vh;
    }
  }
`
