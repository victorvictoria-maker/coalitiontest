import { Box, Circle, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import ExpandMoreIcon from "../../assets/ExpandMoreIcon.svg";
import ArrowUpIcon from "../../assets/ArrowUp.svg";
import ArrowDownIcon from "../../assets/ArrowDown.svg";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ diagnosisHistory }) => {
  const chartLabel = diagnosisHistory.map(({ month, year }) => {
    const monthYear = { month, year };
    return `${monthYear.month.slice(0, 3)}, ${monthYear.year}`;
  });

  const systolicData = diagnosisHistory.map(
    (result) => result.blood_pressure.systolic.value
  );

  const diastolicData = diagnosisHistory.map(
    (result) => result.blood_pressure.diastolic.value
  );

  const presentSystolicResult = systolicData[0];
  const presentSystolicResultLevel =
    diagnosisHistory[0].blood_pressure.systolic.levels;
  const presentDiastolicResult = diastolicData[0];
  const presentDiastolicResultLevel =
    diagnosisHistory[0].blood_pressure.diastolic.levels;

  const data = {
    labels: chartLabel.slice(0, 6).reverse(),
    datasets: [
      {
        label: "Systolic",
        data: systolicData.slice(0, 6).reverse(),
        borderColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        pointRadius: 5,
        pointHoverRadius: 5,
        tension: 0.45,
      },
      {
        label: "Diastolic",
        data: diastolicData.slice(0, 6).reverse(),
        borderColor: "#8C6FE6",
        pointBackgroundColor: "#8C6FE6",
        pointRadius: 5,
        pointHoverRadius: 5,
        tension: 0.45,
      },
    ],
  };

  console.log(diagnosisHistory);

  const options = {
    reponsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <Box mt={5} p={4} bg='#F4F0FE' className='rounded-2xl'>
      <Flex>
        {/* THE CHART */}
        <Box flex='3'>
          <Flex justifyContent='space-between' alignItems='center' mb={4}>
            <Heading as='h1' size='lg'>
              Blood Pressure
            </Heading>
            <Flex alignItems='center' pr={6}>
              <Text pr={4}>Latest 6 months</Text>
              <img src={ExpandMoreIcon} alt='Expan More Icon' />
            </Flex>
          </Flex>

          <Line data={data} options={options} />
        </Box>

        {/* THE TEXT BESIDE */}
        <Box flex='1' pl={4}>
          <Box>
            <Flex alignItems='center' mb={2}>
              <Circle size='10px' mr={2} bgColor='#e66fd2' />
              <Text fontWeight='bold'>Systolic</Text>
            </Flex>
            <Text fontSize='2xl' fontWeight='bold' mb={2}>
              {presentSystolicResult}
            </Text>
            <Flex alignItems='center'>
              <img src={ArrowUpIcon} alt='Arrow Up Icon' />
              <Text ml={2} fontSize='sm'>
                {presentSystolicResultLevel}
              </Text>
            </Flex>
          </Box>
          <Divider borderColor='gray.300' my={4} />
          <Box>
            <Flex alignItems='center' mb={2}>
              <Circle size='10px' mr={2} bgColor='#8C6FE6' />
              <Text fontWeight='bold'>Diastolic</Text>
            </Flex>
            <Text fontSize='2xl' fontWeight='bold' mb={2}>
              {presentDiastolicResult}
            </Text>
            <Flex alignItems='center'>
              <img src={ArrowDownIcon} alt='Arrow Up Icon' />
              <Text ml={2} fontSize='sm'>
                {presentDiastolicResultLevel}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Chart;
