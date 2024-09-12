import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  alignSelf: "center",
  textAlign: "center",
  width: 300,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200, type: "string" },
  {
    field: "description",
    headerName: "Description",
    width: 200,
    type: "string",
  },
  { field: "language", headerName: "Language", width: 200, type: "string" },
  {
    field: "html_url",
    headerName: "Location/URL",
    width: 500,
    renderCell: (params: GridRenderCellParams) => (
      <a href={params.value} target="_blank">
        {params.value}
      </a>
    ),
    type: "custom",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

function ContributionsTable({ contributionDataRows }: ContributionsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = contributionDataRows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper sx={{ height: "100%", width: "100%" }}>
      <StyledTextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default ContributionsTable;
