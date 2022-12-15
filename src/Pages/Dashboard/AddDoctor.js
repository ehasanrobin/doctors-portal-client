import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const AddDoctor = () => {
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, data: services } = useQuery("services", () =>
    fetch(`https://doctors-portal-server-kappa-seven.vercel.app/services`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const imgStorageKey = "a3bb2ebae7abfe87c1b15dc40dca577a";

  const onSubmit = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img,
          };

          //   add to database
          fetch(
            "https://doctors-portal-server-kappa-seven.vercel.app/doctor/",
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              method: "POST",
              body: JSON.stringify(doctor),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                toast.success("doctor added");
                reset();
              } else {
                toast.error("failed to add doctor");
              }
            });
        }
      });
  };
  return (
    <div className=" grid grid-cols-1 justify-center">
      <div className="max-w-3xl">
        <h2>Add Doctors</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-2">
            <input
              {...register("name", { required: true })}
              className="input input-bordered"
              placeholder="Name"
            />
          </div>
          <div className="form-control mb-2">
            <input
              {...register("email", { required: true })}
              className="input input-bordered"
              placeholder="Email"
            />
          </div>
          <div className="form-control mb-2">
            <select
              {...register("speciality")}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Speciality
              </option>
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control mb-2">
            <input
              type="file"
              {...register("img", { required: true })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-2">
            <input type="submit" className="input input-bordered bg-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
