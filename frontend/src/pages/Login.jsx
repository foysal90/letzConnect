import { Link } from "react-router-dom";
import loginLogo from "../assets/images/loginLogo.png";
import SocialLogin from "./SocialLogin/SocialLogin";
import Typical from "react-typical";
const Login = () => {
  return (
    <div className="hero min-h-screen bg-lighterDark">
      <div className="hero-content flex-col lg:flex-row gap-40">
        <div className="text-center lg:text-left">
          <img className="h-92 w-96" src={loginLogo} alt="" />
          <h1 className="mt-10 text-5xl text-white">LetZConnect</h1>
          <p className="py-6 text-gray-500">
            Create a social Media app to find and connect with your friends and
            family
          </p>
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-300">
          <h1 className="text-3xl text-cyan-500  text-center mt-10  font-bold">
            <Typical
              steps={["Please Login!", 2500, "", 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <h2>
                <SocialLogin />
              </h2>
            </div>
            <h1 className="text-center">
              New User?
              <Link to="/register" className="underline px-3 btn-link">
                Create One
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
