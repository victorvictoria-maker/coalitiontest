import { Flex, Text } from "@chakra-ui/react";
import DownloadIcon from "../../assets/DownloadIcon.svg";

const EachLabResultCard = ({ testname, isActive, onClick }) => {
  return (
    <Flex
      justify='space-between'
      align='center'
      className='px-4 py-3'
      bg={isActive ? "#f6f7f8" : ""}
      transition='border-color 0.3s ease'
      _hover={{ bg: "#f6f7f8" }}
      onClick={onClick}
    >
      <Text className='text-sm'>{testname}</Text>
      <img src={DownloadIcon} alt='Download icon' />
    </Flex>
  );
};

export default EachLabResultCard;
