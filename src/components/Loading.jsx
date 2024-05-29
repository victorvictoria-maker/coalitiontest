import { Spinner, Flex } from "@chakra-ui/react";

function Loading() {
  return (
    <Flex height='100vh' justifyContent='center' alignItems='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='teal.800'
        size='xl'
      />
    </Flex>
  );
}

export default Loading;
