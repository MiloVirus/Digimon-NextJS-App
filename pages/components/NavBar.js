import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex bg="black" fontFamily="Spline">
      <Button 
      as='a'
      color="white"
      variant="ghost"
      aria-label="home"
      my={5}
      w="100%"
      >Home</Button>
      <Button 
      as='a'
      color="white"
      variant="ghost"
      aria-label="about"
      my={5}
      w="100%"
      >About</Button>
      <Button 
      as='a'
      color="white"
      variant="ghost"
      aria-label="contact"
      my={5}
      w="100%"
      >Contact</Button>
    </Flex>
  )
}

export default NavBar