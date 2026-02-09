"use client";

import { useMemo } from "react";
import { List } from "@refinedev/mui";
import { GridColDef } from "@mui/x-data-grid";
import { Account } from "@generated/prisma/client";
import DataGrid from "@app/(protected)/_components/data-grid";
import { useAccountsList } from "./hooks/use-accounts-list";
import { Button } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActionButtons from "./_components/action-buttons";

export default function AccountsPage() {
  const pathname = usePathname();
  const { dataGridProps } = useAccountsList();

  const columns: GridColDef<Account>[] = useMemo(() => {
    return [
      {
        field: "name",
        headerName: "Name",
        renderCell: ({ row }) => row.name ?? "—",
        minWidth: 500,
      },
      {
        field: "balance",
        headerName: "Balance",
        renderCell: ({ row }) => row.balance?.toLocaleString() ?? "—",
        minWidth: 500,
      },
      {
        field: "actions",
        headerName: "",
        sortable: false,
        minWidth: 700,
        renderCell: ({ row }) => <ActionButtons account={row} />,
      },
    ];
  }, []);

  return (
    <List
      breadcrumb={
        pathname.includes("/edit") || pathname.includes("/create")
          ? null
          : undefined
      }
      headerButtons={
        <Link href="/accounts/create" passHref>
          <Button variant="contained" startIcon={<AddRounded />}>
            Create new account
          </Button>
        </Link>
      }
    >
      <DataGrid
        columns={columns}
        dataGridProps={dataGridProps}
        noRowsMessage={"You have no accounts, create some now!"}
      />
    </List>
  );
}
