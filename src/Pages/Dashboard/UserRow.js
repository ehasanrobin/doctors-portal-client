import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const handleAdmin = () => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      fetch(
        `https://doctors-portal-server-10001.herokuapp.com/user/admin/${email}`,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("admin added");
            refetch();
          } else {
            toast.error("You can't make admin");
          }
        });
    }
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" ? (
            <button className="btn btn-xs" onClick={handleAdmin}>
              Make Admin
            </button>
          ) : (
            <>
              <p className="text-success">already admin</p>
            </>
          )}
        </td>
        <td>
          <button className="btn btn-xs">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
