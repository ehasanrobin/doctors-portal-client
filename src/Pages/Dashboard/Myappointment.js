import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../FIrebase/Firebase.init";
import Loading from "../Loading/Loading";

const Myappointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
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
                <th>Price</th>
                <th>Status</th>
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
                  <td>{a.price}</td>
                  <td>
                    {a.price && !a.paid && (
                      <Link
                        to={`/dashboard/payment/${a._id}`}
                        className="btn btn-primary"
                      >
                        pay
                      </Link>
                    )}
                    {a.price && a.paid && <p className="text-success">paid</p>}
                  </td>
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
