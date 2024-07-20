"use client";
import { useAuth } from "@/Providers/AuthContext";
import { H2, H3 } from "@/components/common/Typography";
import { Switch } from "@headlessui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import DataTable from "react-data-table-component";
import { toast } from "sonner";

const fetchData = async () => {
  const res = await fetch(`/api/contactus/getlist`);
  const data = await res.json();
  return data;
};

export default function Page() {
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
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: "message",
      selector: (row) => <div> row.message </div>,
      sortable: true,
    },
  ];

  const handleUpdateStatus = async (id, status) => {
    // debugger;
    let res = await fetch("/api/testimonials/updatestatus", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Barear ${token}`,
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });
    let data = await res?.json();
    if (data?.success) {
      queryClient?.invalidateQueries({
        queryKey: ["allTestimonials"],
      });
      queryClient?.invalidateQueries({
        queryKey: ["activeTestimonials"],
      });
    } else {
    }
    toast(data?.message);
  };
  return (
    <div className=" max-w-7xl lg:px-11 sm:px-4 px-2 mx-auto pt-20">
      <H3 className="text-start">Leads</H3>
      <DataTable
        columns={columns}
        data={data?.data}
        pagination
        progressPending={isLoading}
      />
      {/* {JSON.stringify(data)} */}
    </div>
  );
}
