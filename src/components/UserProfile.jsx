import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import BirthIcon from "../assets/BirthIcon.png";
import GenderIcon from "../assets/GenderIcon.png";
import ContactIcon from "../assets/PhoneIcon.png";
import InsuranceIcon from "../assets/InsuranceIcon.png";

const UserProfile = ({ jenniferData }) => {
  const {
    name,
    profile_picture,
    date_of_birth,
    gender,
    phone_number,
    insurance_type,
  } = jenniferData;
  return (
    <Box as='aside' className='bg-white mt-8 rounded-xl p-6 mb-2'>
      {/* User Profile Details */}
      <Flex direction='column' alignItems='center' className='align-center'>
        <Avatar
          mt={4}
          name='Patient'
          src={profile_picture}
          mb={4}
          width={200}
          height={200}
        />
        <Text className='text-2xl' fontWeight='bold' mt={2}>
          {name}
        </Text>
      </Flex>

      <Flex align='center' mt={8}>
        <img src={BirthIcon} alt='Calender Icon' className='mr-3 ' />
        <Box>
          <Text fontSize='sm'>Date of Birth</Text>
          <Text fontSize='sm' fontWeight='bold'>
            {date_of_birth}
          </Text>
        </Box>
      </Flex>

      <Flex align='center' mt={6}>
        <img src={GenderIcon} alt='' className='mr-3' />
        <Box>
          <Text fontSize='sm'>Gender</Text>
          <Text fontSize='sm' fontWeight='bold'>
            {gender}
          </Text>
        </Box>
      </Flex>

      <Flex align='center' mt={6}>
        <img src={ContactIcon} alt='' className='mr-3' />
        <Box>
          <Text fontSize='sm'>Contact Info</Text>
          <Text fontSize='sm' fontWeight='bold'>
            {phone_number}
          </Text>
        </Box>
      </Flex>
      <Flex align='center' mt={6}>
        <img src={ContactIcon} alt='' className='mr-3' />
        <Box>
          <Text fontSize='sm'>Emergency Contacts</Text>
          <Text fontSize='sm' fontWeight='bold'>
            {phone_number}
          </Text>
        </Box>
      </Flex>

      <Flex align='center' mt={6}>
        <img src={InsuranceIcon} alt='' className='mr-3' />
        <Box>
          <Text fontSize='sm'>Insurance Provider</Text>
          <Text fontSize='sm' fontWeight='bold'>
            {insurance_type}
          </Text>
        </Box>
      </Flex>

      <button className='rounded-full w-full bg-button p-3 mt-12 mb-4'>
        Show All Information
      </button>
    </Box>
  );
};

export default UserProfile;
