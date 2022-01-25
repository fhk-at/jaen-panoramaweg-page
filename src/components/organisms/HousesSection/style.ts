import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../../utils'

export const CardStyle = styled(Box)`
  .cardImage {
    ${mq[0]} {
      width: 250px;
      height: 170px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5;
    }
    ${mq[1]} {
      width: 250px;
      height: 170px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5;
    }
    ${mq[2]} {
      width: 250px;
      height: 170px;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 0;
    }
    ${mq[3]} {
      width: 250px;
      height: 170px;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`