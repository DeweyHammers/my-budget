import { DataGrid } from "@mui/x-data-grid";
import { CustomDataGridProps } from "./types";
import NoRowsOverlay from "./_components/no-rows-overlay";
import { useMemo } from "react";

export default function CustomDataGrid({
  dataGridProps,
  columns,
  noRowsMessage,
}: CustomDataGridProps) {
  const finalDataGridProps = useMemo(() => {
    if (dataGridProps.loading === false && dataGridProps.rows?.length === 0) {
      return { ...dataGridProps, rowCount: 0 };
    }
    return dataGridProps;
  }, [dataGridProps]);

  return (
    <DataGrid
      {...finalDataGridProps}
      columns={columns}
      pageSizeOptions={[10, 25, 50, 100]}
      disableRowSelectionOnClick
      disableColumnFilter
      sx={{
        "& .MuiTablePagination-actions": {
          paddingRight: "50px",
        },
      }}
      slots={{
        noRowsOverlay: () => (
          <NoRowsOverlay message={noRowsMessage || "No rows to display."} />
        ),
      }}
    />
  );
}
