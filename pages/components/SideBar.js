import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'

const SideBar = () => {
  return (
    <Box w="100%" h={[170,170,"100%"]} bg="black" fontFamily="Spline">
        <Button 
        as='a'
        color="white"
        variant="ghost"
        aria-label="Digimon"
        my={5}
        w="100%"
        >Digimon</Button>
        <Button 
        as='a'
        color="white"
        variant="ghost"
        aria-label="Pokemon"
        my={5}
        w="100%"
        >Pokemon</Button>
    </Box>
  )
}

export default SideBar