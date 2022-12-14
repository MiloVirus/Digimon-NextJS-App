import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Digimon from './Digimon'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Box, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box overflow="hidden" h="100vh">
      <NavBar/>
      <Flex direction={['column','column','row']} height="100%">
        <Box w={['100%','100%','20%']}>
          <SideBar/>
        </Box>
        <Box w="100%" h="100%">
          <Digimon className="digimon" />
        </Box>
      </Flex>
    </Box>
  )
}
