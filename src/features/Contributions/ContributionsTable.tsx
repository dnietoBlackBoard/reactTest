import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "language", headerName: "Language", width: 200 },
  {
    field: "html_url",
    headerName: "Location/URL",
    width: 500,
  },
];

interface ContributionRowData {
  id: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

interface ContributionsTableProps {
  contributionDataRows: ContributionRowData[];
}

const paginationModel = { page: 0, pageSize: 10 };

function ContributionsTable({ contributionDataRows }: ContributionsTableProps) {
  return (
    <Paper sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={contributionDataRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default ContributionsTable;
