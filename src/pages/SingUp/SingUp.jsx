import login from "../../../src/assets/images/login/login.svg";
import { Link } from 'react-router-dom';

const SingUp = () => {
  return (
    <div className="hero bg-white mb-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 mr-7">
          <p className="py-6">
            <img src={login} />
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  bg-white border border-[#D0D0D0] ml-7">
          <form className="card-body">
            <h1 className="text-4xl font-semibold my-5 text-center">Sign UP</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Sign Up</button>
            </div>
            <p className="text-center">Or Sign In with</p>
            <div className="flex justify-evenly w-1/3 mx-auto">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="#F5F5F8"
                >
                  <path
                    d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74948C17.3047 8.55339 17.6379 7.73448 19.3545 7.73448H21.5297V4.03902C20.4714 3.9256 19.4076 3.87084 18.3432 3.87498C15.1863 3.87498 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5269H13.0267V27.1211H17.3047Z"
                    fill="#3B5998"
                  />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74948C17.3047 8.55339 17.6379 7.73448 19.3545 7.73448H21.5297V4.03902C20.4714 3.9256 19.4076 3.87084 18.3432 3.87498C15.1863 3.87498 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5269H13.0267V27.1211H17.3047Z"
                    fill="#3B5998"
                  />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74948C17.3047 8.55339 17.6379 7.73448 19.3545 7.73448H21.5297V4.03902C20.4714 3.9256 19.4076 3.87084 18.3432 3.87498C15.1863 3.87498 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5269H13.0267V27.1211H17.3047Z"
                    fill="#3B5998"
                  />
                </svg>
              </p>
            </div>
            <p className="text-center">
              Already have an account? <Link to="/login" className="text-[#FF3811]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
