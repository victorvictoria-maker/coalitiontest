import { Box, Heading, Grid, GridItem, Flex } from "@chakra-ui/react";
import SearchIcon from "../assets/SearchIcon.svg";
import EachPatientCard from "./EachPatientCard";
import Loading from "./Loading";
import { useState } from "react";

const PatientList = ({ patientsdata, onCardClick }) => {
  if (!patientsdata) {
    return <Loading />;
  }

  const patients = patientsdata;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
    onCardClick(index);
  };

  return (
    <Box as='aside' className='mt-12 rounded-xl text-default-blue bg-white'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h1' className='font-headings' p={4}>
          Patients
        </Heading>
        <img src={SearchIcon} alt='Search Icon' className='pr-4' />
      </Flex>
      <Box className='scrollable-container mt-2'>
        <Grid
          className='bg-white pr-1'
          templateColumns='repeat(auto-fit, minmax(250px, 1fr))'
        >
          {patients.slice(0, 50).map((patient, index) => (
            <GridItem key={patient.phone_number}>
              <EachPatientCard
                patient={patient}
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

export default PatientList;
