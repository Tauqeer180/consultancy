"use client";
import { useAuth } from "@/Providers/AuthContext";
import { H2, H3 } from "@/components/common/Typography";
import { Switch } from "@headlessui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import DataTable from "react-data-table-component";
import { toast } from "sonner";

const fetchData = async () => {
  const res = await fetch(`/api/testimonials/getlist`);
  const data = await res.json();
  return data;
};

export default function Page() {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["allTestimonials"],
    queryFn: fetchData,
  });
  const columns = [
    {
      name: "Name",
      selector: (row) => row?.fName + " " + row?.lName,
      sortable: true,
    },
    {
      name: "Service Taken",
      selector: (row) => row.serviceTaken,
      sortable: true,
    },
    {
      name: "message",
      selector: (row) => row.message,
      sortable: true,
    },
    {
      name: "active",
      selector: (row) => (
        <div>
          <Switch
            checked={row?.status || row?.status === 1}
            className="group border border-blue-400 relative flex w-14 cursor-pointer rounded-full bg-white/10 p-[2px] transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-blue-400 data-[checked]:bg-white"
            onChange={(e) => handleUpdateStatus(row?._id, e)}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-blue-400 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
            />
          </Switch>
          {row.status}
        </div>
      ),
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
      <H3 className="text-start">Testimonials</H3>
      <DataTable
        columns={columns}
        data={data?.data}
        pagination
        progressPending={isLoading}
      />
      {JSON.stringify(data)}
    </div>
  );
}
