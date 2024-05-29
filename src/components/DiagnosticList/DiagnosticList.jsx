import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import DiagnosticListCard from "./DiagnosticListCard";

const DiagnosticList = ({ diagnosticList }) => {
  return (
    <Box as='aside' className='mt-8 rounded-xl text-default-blue bg-white'>
      <Heading as='h1' className='font-headings' p={4}>
        Diagnostic List
      </Heading>

      <Box m={4} px={2} py={4} className='bg-background-color rounded-full '>
        <Flex alignItems='center'>
          <Box flex='1'>
            <Text className='text-sm font-bold'>Problem/Diagnosis</Text>
          </Box>
          <Box flex='2'>
            <Text className='text-sm font-bold'>Description</Text>
          </Box>
          <Box flex='1'>
            <Text className='text-sm font-bold'>Status</Text>
          </Box>
        </Flex>
      </Box>

      <Box className='scrollable-container-diagnostic '>
        <Grid
          className='bg-white pr-1'
          templateColumns='repeat(auto-fit, minmax(450px, 1fr))'
        >
          {diagnosticList.map((diagnosis, index) => (
            <GridItem key={index}>
              <DiagnosticListCard
                problem={diagnosis.name}
                description={diagnosis.description}
                status={diagnosis.status}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DiagnosticList;
