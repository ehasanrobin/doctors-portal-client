import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleteConfirm, refetch }) => {
  const { name, email } = deleteConfirm;

  const handleDelete = () => {
    fetch(
      `https://doctors-portal-server-kappa-seven.vercel.app/doctors/${email}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        refetch();
        toast(`Doctor ${name} Deleted  `);
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Doctor</h3>
          <p className="py-4">{`are you sure you want to delete ${name}`}</p>
          <div className="modal-action">
            <button className="btn  btn-error" onClick={handleDelete}>
              delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
