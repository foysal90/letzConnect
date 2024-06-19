import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log(formData);
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="email"
            name="email"
            id="email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-700 text-2xl font-extrabold">
              This field is required
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="input input-bordered"
          />
          {errors.password && (
            <span className="text-red-700 text-2xl font-extrabold">
              This field is required
            </span>
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
