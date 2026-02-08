import { DataGridProps, GridColDef } from "@mui/x-data-grid";

export interface CustomDataGridProps {
  dataGridProps: Omit<DataGridProps, "columns">;
  columns: GridColDef[];
  noRowsMessage?: string;
}
