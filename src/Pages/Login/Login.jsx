import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success("User Login successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorCode);
      });
  };

  return (
    <div className="">
      <div className="relative py-8">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="">
              <h5 className="div bg-error text-white rounded-t-xl px-8 text-center break-words">
                {loginError}
              </h5>
            </div>
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-12">
                <div className="space-y-4">
                  <h2 className="mb-5 text-2xl text-cyan-900 font-bold">
                    Login With
                  </h2>
                </div>
                {/* ==================================== */}
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="form-control w-full my-2">
                    <label className="label">
                      <span className="label-text">Email Address</span>

                      {errors.email && (
                        <span className="label-text-alt text-error">
                          {errors.email?.message}
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      placeholder="Email"
                      className={
                        errors.email
                          ? "input-error input text-accent font-medium input-bordered w-full"
                          : "input-accent input text-accent font-medium input-bordered w-full"
                      }
                    />
                  </div>
                  <div className="form-control w-full my-2">
                    <label className="label">
                      <span className="label-text">Password</span>
                      {errors.password && (
                        <span className="label-text-alt text-error">
                          {errors.password?.message}
                        </span>
                      )}
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be 6 characters or longer",
                        },
                      })}
                      placeholder="Password"
                      className={
                        errors.password
                          ? "input-error input text-accent font-medium input-bordered w-full"
                          : "input-accent input text-accent font-medium input-bordered w-full"
                      }
                    />
                  </div>
                  <div className="font-medium">
                    <span className="cursor-pointer btn-link text-base text-purple-500 hover:text-purple-600">
                      Forgot password?
                    </span>
                  </div>

                  <input
                    className="btn btn-accent w-full my-2 text-white"
                    value="Login"
                    type="submit"
                  />
                </form>

                {/* ==================================== */}
                <div className="text-accent font-medium">
                  <small>
                    New to Doctors Portal?{" "}
                    <Link
                      to={"/signup"}
                      className="text-secondary btn-link text-base"
                    >
                      Create new account
                    </Link>
                  </small>
                </div>
                <div className="divider">or Continue with</div>
                <div className="mt-5 grid space-y-4">
                  <button
                    className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div
                      onClick={() => signInWithGoogle()}
                      className="relative flex items-center space-x-4 justify-center"
                    >
                      <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        className="absolute left-0 w-5"
                        alt="google logo"
                      />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
                <div className="mt-5 space-y-4 text-gray-600 text-center sm:-mb-2">
                  {/* <p className="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
