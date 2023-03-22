import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import {
  fetchAttendees,
  fetchListAttendanceIndividual,
  fetchParticipantDetails,
} from "../API/calls";
import { toast } from "react-hot-toast";
import KriyaInput from "../components/KriyaInput";
import Row from "../components/Row";
import Button from "../components/Button";

const ListAttendance = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    toast.promise(fetchAttendees(localStorage.getItem("user")), {
      loading: "Loading...",
      success: (data) => {
        console.log(data.data);
        setData(data.data);
        return "Success";
      },
      error: (err) => {
        console.log(err);
        return "Error";
      },
    });
  }, []);

  return (
    <div className="h-full w-full overflow-hidden font-poppins  pb-16 px-4">
      <h1 className="text-4xl font-semibold text-sky-900 mb-8">
        Attendees List
      </h1>
      {!data ? (
        <h1 className="text-3xl font-semibold">Loading...</h1>
      ) : (
        <React.Fragment>
          <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[0.5fr_1fr_1fr_1fr] h-[calc(100vh-)]">
            <h1 className="text-lg font-semibold">Kriya ID</h1>
            <h1 className="text-lg font-semibold">Name</h1>
            <h1 className="hidden lg:block text-lg font-semibold">Email</h1>
            <h1 className="hidden lg:block text-lg font-semibold">Time</h1>
          </div>
          <div className="mt-2 gap-1 grid grid-cols-[1fr_1fr] lg:grid-cols-[0.5fr_1fr_1fr_1fr] max-h-[calc(100vh-20rem)] overflow-y-auto">
            {data.map((item) => (
              <React.Fragment>
                <p className="h-fit ">{item.user[0].kriyaId}</p>
                <p className="h-fit ">{item.user[0].name}</p>
                <p className="h-fit hidden lg:block">{item.user[0].email}</p>
                <p className="h-fit hidden lg:block">
                  {new Date(item.attendedAt).toLocaleString()}
                </p>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ListAttendance;
