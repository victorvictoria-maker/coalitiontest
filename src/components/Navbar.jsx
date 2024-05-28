import { Box, Flex, HStack, Avatar, Text, Link } from "@chakra-ui/react";
import Logo from "../assets/TestLogo.svg";
import HomeLogo from "../assets/HomeLogo.svg";
import PatientLogo from "../assets/PatientLogo.svg";
import CalenderLogo from "../assets/CalenderLogo.svg";
import MessageLogo from "../assets/MessageLogo.svg";
import CreditCardLogo from "../assets/CreditCardLogo.svg";
import SettingsLogo from "../assets/SettingsLogo.svg";
import MoreDetailsLogo from "../assets/MoreLogo.svg";
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
              href='/home'
              aria-label='Home'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={HomeLogo} alt='Logo for the Overview page' />
                <span className='text-sm font-bold ml-2'>Overview</span>
              </Flex>
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              aria-label='About'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={PatientLogo} alt='Logo for the Patient page' />
                <span className='text-sm font-bold ml-2'>Patient</span>
              </Flex>
            </Link>
          </li>
          <li>
            <Link
              href='/services'
              aria-label='Services'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={CalenderLogo} alt='Logo for the Schedule page' />
                <span className='text-sm font-bold ml-2'>Schedule</span>
              </Flex>
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              aria-label='Contact'
              _hover={{ textDecoration: "none" }}
            >
              <Flex align='center'>
                <img src={MessageLogo} alt='Logo for the Message page' />
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
                <img src={CreditCardLogo} alt='Logo for the Transaction page' />
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

          <img src={SettingsLogo} alt='Logo for the Settings page' />
          <img src={MoreDetailsLogo} alt='Logo for the More Details page' />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
