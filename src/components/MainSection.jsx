import { Grid, GridItem, Box } from "@chakra-ui/react";
import PatientList from "./PatientList";
import { useEffect, useState } from "react";

import UserProfile from "./UserProfile";
import DiagnosisHistory from "./DiagnosisHistory/DiagnosisHistory";
import DiagnosticList from "./DiagnosticList/DiagnosticList";
import LabResults from "./LabResults/LabResults";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";

const MainSection = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jenniferData, setJenniferData] = useState(null);

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
        setJenniferData(result[3]);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (jenniferData) {
  //   console.log(jenniferData);
  // }

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Patient {jenniferData.name} | Tech Care </title>
        <meta
          name='description'
          content='This page shows a patients health details'
        />
      </Helmet>

      <Grid as='main' templateColumns='repeat(4, 1fr)' gap={4}>
        {/* LEFT SECTION*/}
        <GridItem colSpan={1}>
          <PatientList patientsdata={data} />
        </GridItem>

        {/* CENTER  */}
        <GridItem colSpan={2}>
          <Box p={4} className='mt-8 rounded-xl '>
            <DiagnosisHistory
              diagnosisHistory={jenniferData.diagnosis_history}
            />

            <DiagnosticList diagnosticList={jenniferData.diagnostic_list} />
          </Box>
        </GridItem>

        {/* RIGHT SECTION*/}
        <GridItem colSpan={1}>
          <UserProfile jenniferData={jenniferData} />
          <LabResults labResults={jenniferData.lab_results} />
        </GridItem>
      </Grid>
    </>
  );
};

export default MainSection;
