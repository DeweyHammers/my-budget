import { Account } from "@generated/prisma/client";
import { useDataGrid } from "@refinedev/mui";

export function useAccountsList() {
  const { dataGridProps } = useDataGrid<Account>({
    resource: "accounts",
    pagination: {
      pageSize: 25,
      mode: "server",
    },
    sorters: {
      initial: [
        {
          field: "name",
          order: "asc",
        },
      ],
      mode: "server",
    },
  });

  return {
    dataGridProps,
  };
}
