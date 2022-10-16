import React from 'react'

const DigimonList = () => {











  return (
    <>
    <Checkbox defaultChecked onChange={filterLevel}>Rookie</Checkbox>
      <SimpleGrid
        bg="gray.50"
        columns={{ sm: 2, md: 2, lg: 4 }}
        spacing="5"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        {digiLists.map((element, index) => (
          <Box
            w="100%"
            key={index}
            boxShadow="xs"
            p="6"
            rounded="md"
            bg="white"
            onClick={() => callDigimon(element)}
          >
            <Flex>
              <Box w="100%">
                <Box className="digiName">
                  <Text fontSize="1.3em" color="#505050">
                    {element.name}
                  </Text>
                </Box>
                <Box className="digiLevel">
                  <Text>{element.level}</Text>
                </Box>
              </Box>
              <Box flexShrink="0.3" className="digiLevel">
                <img width="100px" src={element.img}></img>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <Box>
        {currentList.map((element, index) => (
          <Button key={index} onClick={() => callArray(index)}>
            {index + 1}
          </Button>
        ))}
      </Box>
        <Box w="100%" rounded="md"  bg="white" p="10" border="0px">
        <Flex>
          <Box w="100%" margin="auto" textAlign="center" alignSelf="center">
            <Box w="100%" m="auto">
              <Box className="digiName">
                <Text fontSize="1.3em" color="#505050">
                  {singleDigimon.name}
                </Text>
              </Box>
              <Box className="digiLevel">
                <Text>{singleDigimon.level}</Text>
              </Box>
            </Box>
            <Box textAlign="center" flexShrink="0.3" className="digiLevel" justifyContent="center">
              <img width="300px" src={singleDigimon.img}></img>
            </Box>
          </Box>
          <Box w="100%" alignSelf="center" justifyContent="center">
            {digiGraph}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default DigimonList