import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../FIrebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Loading/Loading";

const RequiredAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading || adminLoading) {
    return <Loading></Loading>;
  }
  if (!user || !admin) {
    console.log("admin isn't there");
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  }

  return children;
};

export default RequiredAdmin;
