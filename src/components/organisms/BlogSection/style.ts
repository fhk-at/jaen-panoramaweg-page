import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../../utils'

export const CardStyle = styled(Box)`
  .cardImage {
    ${mq[0]} {
      height: 200px;
      width: 300px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
    ${mq[1]} {
      height: 200px;
      width: 300px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
    ${mq[2]} {
      height: 285px;
      width: 425px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
    ${mq[3]} {
      height: 285px;
      width: 425px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
  }
`
