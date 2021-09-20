import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import {navigate} from 'gatsby-link'
import * as scroll from 'react-scroll'

const Links = [
  {text: 'Immobilie', to: '/projekt/'},
  {text: 'Lage', to: '/lage/'},
  {
    text: 'Baufortschritt',
    to: 'blogsection',
    scroll: true,
    onClick: () =>
      window.location.pathname === '/' ? null : navigate('/#blogsection')
  },
  {text: 'Kontakt', to: '/kontakt/'}
]

import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import {StaticImage} from 'gatsby-plugin-image'

const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const mainImageStyle = {
    width: '17rem',
    maxWidth: '50%',
    marginLeft: '4.1vw'
  }

  const navbarBg = useColorModeValue('whiteAlpha.800', '#1a202cdc')

  const mainImage = useColorModeValue(
    <StaticImage
      src="../../../images/panoramaweg_dark.svg"
      alt="logo"
      style={mainImageStyle}
    />,
    <StaticImage
      src="../../../images/panoramaweg_light.svg"
      alt="logo"
      style={mainImageStyle}
    />
  )

  const mobileImageStyle = {
    width: '45px'
  }

  const mobileImage = (
    <StaticImage
      src="../../../images/panoramaweg_icon.svg"
      alt="logo"
      style={mobileImageStyle}
    />
  )

  const logo = useBreakpointValue({base: mobileImage, md: mainImage})

  const navbarHeight = useBreakpointValue({base: 75, md: 140})

  const links = Links.map((link, index) => (
    <Box
      key={index}
      fontWeight="bold"
      fontSize={['1.1rem', '1.1em', '1.1rem', '1.4rem']}>
      {link.scroll ? (
        <scroll.Link
          offset={-80}
          to={link.to}
          isDynamic
          smooth
          onClick={link.onClick}
          style={{cursor: 'pointer'}}>
          <Box
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700')
            }}>
            {link.text}
          </Box>
        </scroll.Link>
      ) : (
        <Link to={link.to} key={index}>
          <Box
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700')
            }}>
            {link.text}
          </Box>
        </Link>
      )}
    </Box>
  ))

  return (
    <Box
      bg={navbarBg}
      zIndex={100}
      textAlign="center"
      pos="absolute"
      top={0}
      left={0}
      width="100%">
      <Flex
        h={navbarHeight}
        mx={5}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/">{logo}</Link>
          </HStack>
        </Flex>
        <HStack
          as={'nav'}
          spacing={4}
          display={{base: 'none', md: 'flex'}}
          mr="4.1vw">
          {links}
        </HStack>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{md: 'none'}}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{md: 'none'}}>
          <Stack as={'nav'} spacing={4}>
            {links}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar
