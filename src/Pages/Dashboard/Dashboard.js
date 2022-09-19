import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../FIrebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col  ">
          {/* <!-- Page content here --> */}
          <h3 className="text-3xl font-bold text-primary capitalize">
            Wellcome to Dashboard
          </h3>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-2 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link as={Link} to="/dashboard">
                My appointment
              </Link>
            </li>
            <li>
              <Link as={Link} to="review">
                Reviews
              </Link>
            </li>
            {admin && (
              <li>
                <Link as={Link} to="users">
                  All Users
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
