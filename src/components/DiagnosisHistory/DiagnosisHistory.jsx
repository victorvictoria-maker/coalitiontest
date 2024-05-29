import { Heading, Box } from "@chakra-ui/react";
import Chart from "./Chart";

import HealthStatusCards from "./HealthStatusCards";

const DiagnosisHistory = ({ diagnosisHistory }) => {
  const latestDiagnosisHistory = diagnosisHistory[0];

  // console.log(bloodPressureDetails);
  return (
    <Box as='section' p={4} className='bg-white rounded-2xl'>
      <Heading>Diagnosis History</Heading>
      <Chart diagnosisHistory={diagnosisHistory} />
      <HealthStatusCards latestDiagnosisHistory={latestDiagnosisHistory} />
    </Box>
  );
};

export default DiagnosisHistory;
