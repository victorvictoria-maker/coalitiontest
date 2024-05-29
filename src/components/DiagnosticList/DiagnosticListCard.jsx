import { Box, Flex, Text } from "@chakra-ui/react";

const DiagnosticListCard = ({ problem, description, status }) => {
  return (
    <Box p={4} borderRadius='lg'>
      <Flex alignItems='center'>
        <Box flex='1'>
          <Text className='text-sm '>{problem}</Text>
        </Box>
        <Box flex='2'>
          <Text className='text-sm'>{description}</Text>
        </Box>
        <Box flex='1'>
          <Text className='text-sm '>{status}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default DiagnosticListCard;
