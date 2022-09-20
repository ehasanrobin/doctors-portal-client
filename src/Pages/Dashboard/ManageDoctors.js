import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  console.log(deleteConfirm);
  const {
    isLoading,
    data: doctors,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`https://doctors-portal-server-10001.herokuapp.com/doctors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>Manage Doctors {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>avatar</th>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                doctor={doctor}
                refetch={refetch}
                index={index}
                setDeleteConfirm={setDeleteConfirm}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteConfirm && (
        <DeleteConfirmModal
          deleteConfirm={deleteConfirm}
          refetch={refetch}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
