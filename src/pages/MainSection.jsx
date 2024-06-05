import { Grid, GridItem, Box } from "@chakra-ui/react";
import PatientList from "./../components/PatientList";
import { useEffect, useState } from "react";

import UserProfile from "../components/UserProfile";
import DiagnosisHistory from "../components/DiagnosisHistory/DiagnosisHistory";
import DiagnosticList from "../components/DiagnosticList/DiagnosticList";
import LabResults from "../components/LabResults/LabResults";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";

const MainSection = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [presentPatientIndex, setPresentPatientIndex] = useState(0);
  const [patientData, setPatientData] = useState(null);

  // ENCYPTING THE KEY
  const username = "coalition";
  const password = "skills-test";
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
            },
            // mode: "no-cors",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        setData(result);
        setPatientData(result[presentPatientIndex]);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [encodedCredentials, presentPatientIndex]);

  const handleCardClick = (index) => {
    setPresentPatientIndex(index);
    console.log("Inside handlecard click inside use effect  " + index);
  };

  console.log("end of main section " + presentPatientIndex);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Patient {patientData.name} | Tech Care </title>
        <meta
          name='description'
          content='This page shows a patients health details'
        />
      </Helmet>

      <Grid as='main' templateColumns='repeat(4, 1fr)' gap={4}>
        {/* LEFT SECTION*/}
        <GridItem colSpan={1}>
          <PatientList patientsdata={data} onCardClick={handleCardClick} />
        </GridItem>

        {/* CENTER  */}
        <GridItem colSpan={2}>
          <Box p={4} className='mt-8 rounded-xl '>
            <DiagnosisHistory
              diagnosisHistory={patientData.diagnosis_history}
            />

            <DiagnosticList diagnosticList={patientData.diagnostic_list} />
          </Box>
        </GridItem>

        {/* RIGHT SECTION*/}
        <GridItem colSpan={1}>
          <UserProfile patientData={patientData} />
          <LabResults labResults={patientData.lab_results} />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainSection;
