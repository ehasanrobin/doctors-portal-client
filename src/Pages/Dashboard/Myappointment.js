import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../FIrebase/Firebase.init";
import Loading from "../Loading/Loading";

const Myappointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://doctors-portal-server-10001.herokuapp.com/booking?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setAppointment(data));
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl capitalize font-bold py-3">
        dashboard appointment {appointment.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Id</th>
                <th>doctors name</th>
                <th>patient Name</th>
                <th>Patietenct Email</th>
                <th>Date</th>
                <th>Slot</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {appointment.map((a, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{a.treatment}</td>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myappointment;
