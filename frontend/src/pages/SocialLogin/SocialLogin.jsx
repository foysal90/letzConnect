import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <div className="divider gap-2"></div>
      <div className="flex items-center gap-3 justify-center">
        <button
          // onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline"
        >
          <FcGoogle className="w-6 h-6" />
        </button>
        <button
          // onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline"
        >
          <FaGithub className="text-[#4078c0] w-6 h-6 " />
        </button>
        <button
          // onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline"
        >
          <FaTwitter className="text-[#00ACEE] w-6 h-6 " />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
