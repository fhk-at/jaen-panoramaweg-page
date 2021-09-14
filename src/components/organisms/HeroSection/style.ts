import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

export const HeroStyle = styled(Box)`
  .herobackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .herologo {
    position: relative;
    z-index: 10;
    width: 450px;
  }
`
