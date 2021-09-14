import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

import {mq} from '../../../utils'

export const NavbarStyle = styled(Box)`
  .navbarlogodiv {
    ${mq[0]} {
      margin-top: 3.1vh;
      margin-left: 4.1vw;
      width: 50%;
    }
    ${mq[1]} {
      margin-top: 3.1vh;
      margin-left: 4.1vw;
      width: 50%;
    }
    ${mq[2]} {
      margin-top: 3.1vh;
      margin-left: 4.1vw;
      width: 17rem;
      max-width: 50%;
    }
    ${mq[3]} {
      margin-top: 3.1vh;
      margin-left: 4.1vw;
      width: 17rem;
      max-width: 50%;
    }

    .navbarlogoimg {
      width: 100%;
    }
  }
`
