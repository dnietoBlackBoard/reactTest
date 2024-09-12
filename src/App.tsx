import { useEffect, useState } from "react";
import "./App.css";
import { apiGetRepos } from "./services/apiRepositories";
import ContributionsTable from "./features/Contributions/ContributionsTable";
import Typography from "@mui/material/Typography";

interface ContributionData {
  id: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

let contributionData: ContributionData[] = [];

function App() {
  const [learnContributions, setLearnContributions] = useState<
    ContributionData[]
  >([]);
  const [studentContributions, setStudentContributions] = useState<
    ContributionData[]
  >([]);
  const [reachContributions, setReachContributions] = useState<
    ContributionData[]
  >([]);

  function filterByProduct(productName: string) {
    const dataByProduct = contributionData
      .filter((data) => data.name.startsWith(productName))
      .map(({ language, ...data }) => ({
        language: language !== null ? language : "API Collection",
        ...data,
      }));
    console.log(`Filtered ${productName} data`);
    console.log(dataByProduct);
    return dataByProduct;
  }

  useEffect(() => {
    async function getData() {
      contributionData = await apiGetRepos();
      console.log("DATA FROM SERVICE");
      console.log(contributionData);
      setLearnContributions(filterByProduct("Learn"));
      setStudentContributions(filterByProduct("Student"));
      setReachContributions(filterByProduct("Reach"));
    }
    getData();
  }, []);

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Wellcome to the Community Contributions page!
      </Typography>
      <Typography variant="body1" align="justify" gutterBottom>
        This is the index of the applications/programs/documentation currently
        available for our different products, along with the language and a
        brief description of its purpose.
      </Typography>
      <Typography variant="body1" align="justify" gutterBottom>
        If you find any specific error or issue with any of the code
        repositories, feel free to open a new issue within the repository of the
        affected source and we'll review it.
      </Typography>
      <Typography variant="h2" align="left" gutterBottom>
        Index
      </Typography>
      <Typography variant="h4" align="left" gutterBottom>
        Learn
      </Typography>
      {learnContributions.length > 0 ? (
        <ContributionsTable contributionDataRows={learnContributions} />
      ) : (
        <Typography variant="body1" align="justify" gutterBottom>
          There are no Student contributions
        </Typography>
      )}
      <Typography variant="h4" align="left" gutterBottom>
        Student
      </Typography>
      {studentContributions.length > 0 ? (
        <ContributionsTable contributionDataRows={studentContributions} />
      ) : (
        <Typography variant="body1" align="justify" gutterBottom>
          There are no Student contributions
        </Typography>
      )}
      <Typography variant="h4" align="left" gutterBottom>
        Reach
      </Typography>
      {reachContributions.length > 0 ? (
        <ContributionsTable contributionDataRows={reachContributions} />
      ) : (
        <Typography variant="body1" align="justify" gutterBottom>
          There are no Reach contributions
        </Typography>
      )}
    </>
  );
}

export default App;
