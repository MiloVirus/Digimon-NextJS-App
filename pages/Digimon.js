import { Box, Flex, SimpleGrid, Text, Button, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import DigimonGraph from "./components/DigimonGraph";

const Digimon = () => {
  const [digi, setDigi] = useState([])
  const [digiLists, setDigiLists] = useState([])
  const [currentList, setCurrentList] = useState([])
  const [singleDigimon, setSingleDigimon] = useState("")
  const [digiGraph, setDigiGraph] = useState("")
  const [permaDigiLists, setPermaDigiLists] = useState([])
  const [permaCurrentList, setPermaCurrentList] = useState([])
  const [combinedLevel, setCombinedLevel] = useState([])
  const [digiFilter, setDigiFilter] = useState([])
  const [checks, setChecks] = useState([{level: "Rookie", status: false},
                                        {level: "Champion", status: false},
                                        {level: "Mega", status: false},
                                        {level: "Ultimate", status: false},
                                        {level: "Fresh", status: false},
                                        {level: "In training", status: false},
                                        {level: "Training", status: false},
                                        {level: "Armor", status: false}])
  let combinedArraycurrent = []
 

  
  

  let arrayDigi = [];

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get(
        "https://digimon-api.vercel.app/api/digimon"
      );
      setDigi([...response.data]);

      for (let i = 0; i < response.data.length; i++) {
        arrayDigi[i] = response.data.splice(0, 27);
      }
      setCurrentList([...arrayDigi]);
      setPermaCurrentList([...arrayDigi]);
      setDigiLists([...arrayDigi[0]]);
      setPermaDigiLists([...arrayDigi[0]])
      setCombinedLevel([...arrayDigi[0]])
      
    };

    callApi();
  }, []);

  const callArray = (index) => {
    console.log(digiLists);
    setDigiLists([...currentList[index]]);
  };

  const callDigimon = async (digimonId) => {
    let digimon = digimonId.name;
    const responseDigimon = await axios.get(
      `https://digimon-api.vercel.app/api/digimon/name/${digimon}`
    );
    setSingleDigimon(digimonId);

    const responseDigimonAll = await axios.get(
      "https://digimon-api.vercel.app/api/digimon"
    );

    setDigiGraph(<DigimonGraph responseDigimonAll={responseDigimonAll.data} singleDigimon={digimonId}/>)
  };

  const callSwitch = (level) => 
  { 
    let thisArray = []
    let filterPlease = []
    let filterLevelPages = []
    let filterLevelPages2 = []

    checks.forEach(element => 
      {
        if(element.status == true)
        {
          
          
          const filteredByLevel = digi.filter(digimon =>  digimon.level == level)

          filterPlease = [...digiFilter, ...filteredByLevel]

          setDigiFilter(filterPlease)
          thisArray = [...filterPlease]
          console.log(filterPlease)

          for (let i = 0; i < thisArray.length; i++) {

            filterLevelPages[i] = thisArray.splice(0, 10);

          }
            
          setDigiLists(filterLevelPages[0]) 
          setCurrentList(filterLevelPages)
          //setDigiFilter([...filteredByLevel])
          console.log("checkbox is checked")
          console.log(filterPlease)
        }
        else if(element.status == false && element.level == level)
        {
          let theFilterRemove = [...digiFilter]
          console.log(theFilterRemove)

          let filterRemove = theFilterRemove.filter(digimon => digimon.level != level)
          
          console.log(filterRemove)
          console.log("here first")

          if (filterRemove.length < 1)
          {
            setDigiLists(permaDigiLists)
            setCurrentList(permaCurrentList)
            console.log("here second")
          }
          else
          {
            for (let i = 0; i < filterRemove.length; i++) {

              filterLevelPages2[i] = filterRemove.splice(0, 10);
  
            }
            setDigiLists(filterLevelPages2[0])
            setCurrentList([...filterLevelPages2])
            setDigiFilter(filterRemove)
            console.log("here")
          }
        }
        
      })
      
  }
  
 
  const switchChange = (level) =>
  {
    checks.forEach(element => 
      {
        if(level === element.level)
        {
          element.status = !element.status
        }
      })

    callSwitch(level)
  }

  return (
    <>
    <Checkbox onChange={()=>switchChange("Rookie")}>Rookie</Checkbox>
    <Checkbox onChange={()=>switchChange("In Training")}>In Training</Checkbox>
    <Checkbox onChange={()=>switchChange("Champion")}>Champion</Checkbox>
    <Checkbox onChange={()=>switchChange("Ultimate")}>Ultimate</Checkbox>
    <Checkbox onChange={()=>switchChange("Mega")}>Mega</Checkbox>
    <Checkbox onChange={()=>switchChange("Armor")}>Armor</Checkbox>
    <Checkbox onChange={()=>switchChange("Training")}>Training</Checkbox>
    <Checkbox onChange={()=>switchChange("Fresh")}>Fresh</Checkbox>
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
  );
};

export default Digimon;
