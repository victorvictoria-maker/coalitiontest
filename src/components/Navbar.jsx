import { Box, Flex, HStack, Avatar, Text, Link } from "@chakra-ui/react";
import Logo from "../assets/Logo.svg";
import HomeIcon from "../assets/HomeIcon.svg";
import PatientIcon from "../assets/PatientIcon.svg";
import CalenderIcon from "../assets/CalenderIcon.svg";
import MessageIcon from "../assets/MessageIcon.svg";
import CreditCardIcon from "../assets/CreditCardIcon.svg";
import SettingsIcon from "../assets/SettingsIcon.svg";
import MoreDetailsIcon from "../assets/MoreIcon.svg";
import DrJose from "../assets/DrJose.png";

const Navbar = () => {
  return (
    <Box as='nav' px={4} py={2} className='bg-white rounded-full '>
      <Flex justify='space-between' align='center'>
        {/* Logo */}
        <Box className='pl-8'>
          <Link href='/' aria-label='Home'>
            <img src={Logo} alt='Logo' className='h-8' />
          </Link>
        </Box>

        {/* Nav Items */}
        <HStack
          as='ul'
          spacing={8}
          className='flex-1 justify-center list-none no-underline text-default-blue'
        >
          <li>
            <Link
              href='/'
              aria-label='Home'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={HomeIcon} alt='Icon for the Overview page' />
                <span className='text-sm font-bold ml-2'>Overview</span>
              </Flex>
            </Link>
          </li>
          <li className=' rounded-full px-4 py-2'>
            <Link
              href='/patients/Emily'
              aria-label='Patients'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={PatientIcon} alt='Icon for the Patient page' />
                <span className='text-sm font-bold ml-2 '>Patients</span>
              </Flex>
            </Link>
          </li>
          <li>
            <Link
              href='/schedule'
              aria-label='Schedule'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={CalenderIcon} alt='Icon for the Schedule page' />
                <span className='text-sm font-bold ml-2'>Schedule</span>
              </Flex>
            </Link>
          </li>
          <li>
            <Link
              href='/message'
              aria-label='Message'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={MessageIcon} alt='Icon for the Message page' />
                <span className='text-sm font-bold ml-2'>Message</span>
              </Flex>
            </Link>
          </li>
          <li>
            <Link
              href='/transactions'
              aria-label='Transactions'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={CreditCardIcon} alt='Icon for the Transaction page' />
                <span className='text-sm font-bold ml-2'>Transactions</span>
              </Flex>
            </Link>
          </li>
        </HStack>

        {/* Doctor Details */}
        <HStack spacing={4} className='pr-8'>
          <Avatar
            name='Dr. John Doe'
            src={DrJose}
            alt='senior-woman-doctor-and-portrait-smile-for-health'
          />
          <Box textAlign='right' className='text-default-blue'>
            <Text fontSize='sm' fontWeight='bold'>
              Dr. Jose Simmons
            </Text>
            <Text fontSize='xs' color='gray-400'>
              General Practitioner
            </Text>
          </Box>

          {/* Divider */}
          <Box height='34px' width='1px' bg='gray.400' />

          <img src={SettingsIcon} alt='Icon for the Settings page' />
          <img src={MoreDetailsIcon} alt='Icon for the More Details page' />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
