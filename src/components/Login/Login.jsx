// import React from 'react'

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full md:w-1/2 mx-auto">
      <div className="my-32">
        <div className="flex-col">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
          </div>
          <div className="flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-xl">
            <div className="card-body">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
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
                  />
                  <label className="label">
                    <Link className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                    <span className="text-sm">Or</span>
                    <div>
                      <span className="label-text-alt link link-hover">
                        New to this site?
                      </span>
                      <button
                        type="button"
                        className="py-1 px-3 border ms-1 rounded-lg bg-blue-700 text-white"
                      >
                        <Link to="/register">Register</Link>
                      </button>
                    </div>
                  </label>
                </div>
              </form>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
