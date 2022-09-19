import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../FIrebase/Firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Loading/Loading";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [token] = useToken(user);
  let errorMsg;
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorMsg = <p className="text-red-500">Error: {error?.message}</p>;
  }
  if (token) {
    navigate("/appointment");
  }
  const handleRegistration = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    await sendEmailVerification();
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="">
        <div className=" card text-center w-96  bg-base-100  shadow-xl">
          <div className="card-body justify-center text-center ">
            <h2 className="card-title mx-auto">Login</h2>
            <form action="" onSubmit={handleRegistration}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
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
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                {errorMsg}
                <p>
                  Have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control w-full max-w-xs mt-3">
                <input
                  type="submit"
                  value="Register"
                  className="input input-bordered w-full max-w-xs bg-primary text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
