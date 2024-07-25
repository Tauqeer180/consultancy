"use client";
import { useAuth } from "@/Providers/AuthContext";
import Loader from "@/components/common/Loader";
import { H2, H3 } from "@/components/common/Typography";
import { Switch } from "@headlessui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { toast } from "sonner";

const fetchData = async () => {
  const res = await fetch(`/api/appointments/getlist`);
  const data = await res.json();
  return data;
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["allLeads"],
    queryFn: fetchData,
  });
  const columns = [
    {
      name: "Name",
      selector: (row) => row?.fName + " " + row?.lName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Service",
      selector: (row) => <div className=" capitalize" > {row.service} </div>,
      sortable: true,
    },
  ];

  return (
    <div className=" max-w-7xl lg:px-11 sm:px-4 px-2 mx-auto pt-20">
      {isLoading && <Loader />}
      <H3 className="text-start">Leads</H3>
      <DataTable
        columns={columns}
        data={data?.data}
        pagination
        // progressPending={isLoading}
      />
      {/* {JSON.stringify(data)} */}
    </div>
  );
}
