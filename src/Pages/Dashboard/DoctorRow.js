import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeleteConfirm }) => {
  const { name, email, speciality, img } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <td>
        <label
          htmlFor="delete-confirm-modal"
          className="btn modal-button btn btn-xs btn-error"
          onClick={() => setDeleteConfirm(doctor)}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
