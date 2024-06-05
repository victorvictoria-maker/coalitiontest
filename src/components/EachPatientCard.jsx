import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import MoreDetailsIcon from "../assets/MoreHorizontalIcon.svg";
import { NavLink } from "react-router-dom";

const EachPatientCard = ({ patient, isActive, onClick }) => {
  return (
    <NavLink to={`/patients/${patient.name}`}>
      <Box
        className='p-4'
        bg={isActive ? "#d8fcf7" : ""}
        transition='border-color 0.3s ease'
        _hover={{ bg: "#d8fcf7" }}
        onClick={onClick}
      >
        <Flex alignItems='center'>
          <Avatar src={patient.profile_picture} alt='img' size='lg' mr={4} />
          <Flex flexDirection='column' flex='1'>
            <Text
              fontWeight='bold'
              fontSize='14px'
              className='text-default-blue'
            >
              {patient.name}
            </Text>
            <Text fontSize='sm' className='text-default-gray'>
              {patient.gender}, {patient.age}
            </Text>
          </Flex>
          <img src={MoreDetailsIcon} alt='More details icon' />
        </Flex>
      </Box>
    </NavLink>
  );
};

export default EachPatientCard;
