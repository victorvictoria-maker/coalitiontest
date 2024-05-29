import { Heading, Box } from "@chakra-ui/react";
import Chart from "./Chart";

import HealthStatusCards from "./HealthStatusCards";

const DiagnosisHistory = ({ diagnosisHistory }) => {
  const latestDiagnosisHistory = diagnosisHistory[0];
  return (
    <Box as='section'>
      <Heading>Diagnosis History</Heading>
      <Chart />
      <HealthStatusCards latestDiagnosisHistory={latestDiagnosisHistory} />
    </Box>
  );
};

export default DiagnosisHistory;
