import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import EachLabResultCard from "./EachLabResultCard";
import { useState } from "react";

const LabResults = ({ labResults }) => {
  const [activeCard, setActiveCard] = useState(1);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <Box as='aside' className='mt-8 rounded-xl text-default-blue bg-white'>
      <Heading as='h1' className='font-headings' p={4}>
        Lab Results
      </Heading>

      <Box className='scrollable-container-labresult mt-4 ml-4'>
        <Grid
          className='bg-white pr-1'
          templateColumns='repeat(auto-fit, minmax(250px, 1fr))'
        >
          {labResults.map((testname, index) => (
            <GridItem key={index}>
              <EachLabResultCard
                testname={testname}
                isActive={index === activeCard}
                onClick={() => handleCardClick(index)}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LabResults;
