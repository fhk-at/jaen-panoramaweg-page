import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../utils'

export const responsiveImage = styled(Box)`
  .responsiveImage {
    ${mq[0]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5;
    }
    ${mq[1]} {
      width: 300px;
      height: 180px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5;
    }
    ${mq[2]} {
      width: 600px;
      height: 360px;
    }
    ${mq[3]} {
      width: 600px;
      height: 360px;
    }
  }
`

export const CardStyle = styled(Box)`
  .responsiveImage {
    ${mq[0]} {
      max-width: 200px;
      max-height: 150px;
    }
    ${mq[1]} {
      max-width: 300px;
      max-height: 200px;
    }
  }
`