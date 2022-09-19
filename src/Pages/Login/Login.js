import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../FIrebase/Firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Loading/Loading";
const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user || guser);
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  let errorMsg;
  let passlink;
  const navigate = useNavigate();
  if (gloading || loading) {
    return <Loading></Loading>;
  }
  if (gerror || error) {
    errorMsg = <p className="text-red-500">Error: {error?.message}</p>;
  }
  if (token) {
    navigate(from);
  }
  if (sending) {
    passlink = (
      <div className="alert alert-success">
        <div>
          <span>Password Link has been send</span>
        </div>
      </div>
    );
  }

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  const handleforgotpass = (event) => {
    event.preventDefault();
    const email = event.target.femail.value;
    sendPasswordResetEmail(email);
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="">
        <div className=" card text-center w-96  bg-base-100  shadow-xl">
          <div className="card-body justify-center text-center ">
            <h2 className="card-title mx-auto">Login</h2>
            <form action="" onSubmit={handleLogin}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs text-right">
                <label
                  htmlFor="forgotpasswordModal"
                  className="btn btn-link mr-px"
                >
                  Forgot password?
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">password</span>
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                {errorMsg}
                <p>
                  need to Doctors Portal?{" "}
                  <Link to="/registration" className="text-primary">
                    create account
                  </Link>
                </p>
              </div>
              <div className="form-control w-full max-w-xs mt-3">
                <input
                  type="submit"
                  value="Login"
                  className="input input-bordered w-full max-w-xs bg-primary text-white"
                />
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid  card bg-base-300 rounded-box place-items-center"></div>
              <div className="divider">OR</div>
              <div className="grid  card bg-base-300 rounded-box place-items-center"></div>
            </div>
            <button
              className="btn btn-outline"
              onClick={() => signInWithGoogle()}
            >
              Sign in With Google
            </button>
          </div>
        </div>
      </div>
      {/* forgot password modal  */}
      <input
        type="checkbox"
        id="forgotpasswordModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="forgotpasswordModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Reset Password</h3>
          <form action="" onSubmit={handleforgotpass}>
            <div className="form-control w-full max-w-xs mt-3">
              <input
                type="email"
                placeholder="email"
                name="femail"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {passlink}
            <div className="form-control w-full max-w-xs mt-3">
              <input
                type="submit"
                value="Reset Password"
                className="input input-bordered w-full max-w-xs bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
