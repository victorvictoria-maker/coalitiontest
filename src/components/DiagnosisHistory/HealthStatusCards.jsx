import { Box, Image, Text, Grid } from "@chakra-ui/react";
import RespiratoryRateIcon from "../../assets/RespiratoryRate.svg";
import TemperatureIcon from "../../assets/Temperature.svg";
import HeartRateIcon from "../../assets/HeartBPM.svg";

const HealthStatusCards = ({ latestDiagnosisHistory }) => {
  const { temperature, respiratory_rate, heart_rate } = latestDiagnosisHistory;
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={4} className='mt-4'>
      {/* Respiratory rate */}
      <Box
        className='bg-white shadow-md rounded-lg p-4 respiratoryrate'
        alignItems='center'
      >
        <Image src={RespiratoryRateIcon} alt='Image' borderRadius='md' mb={2} />
        <Text className='text-default-blue font-base'>RespiratoryRate</Text>
        <Text className='text-default-blue font-bold text-3xl'>
          {respiratory_rate.value} bpm
        </Text>
        <Text className='text-default-blue font-base text-sm mt-4'>
          {respiratory_rate.levels}
        </Text>
      </Box>

      {/* Temperature */}
      <Box
        className='bg-white shadow-md rounded-lg p-4 temperaturerate'
        alignItems='center'
      >
        <Image src={TemperatureIcon} alt='Image' borderRadius='md' mb={4} />
        <Text className='text-default-blue font-base'>Temperature</Text>
        <Text className='text-default-blue font-bold text-3xl'>
          {temperature.value}&deg;F
        </Text>
        <Text className='text-default-blue font-base text-sm mt-4'>
          {temperature.levels}
        </Text>
      </Box>

      {/* Heart Rate */}
      <Box
        className='bg-white shadow-md rounded-lg p-4 heartrate'
        alignItems='center'
      >
        <Image src={HeartRateIcon} alt='Image' borderRadius='md' mb={4} />
        <Text className='text-default-blue font-base'>HeartRate</Text>
        <Text className='text-default-blue font-bold text-3xl'>
          {heart_rate.value} bpm
        </Text>
        <Text className='text-default-blue font-base text-sm mt-4'>
          {heart_rate.levels}
        </Text>
      </Box>
    </Grid>
  );
};

export default HealthStatusCards;
