import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container">
      <div className="row m-5 no-gutters shadow-lg">
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://auth.tracnghiem.vn/auth/resources/c9oah/login/tracnghiemvn/img/tracnghiemvn/background-login.jpg"
            className="img-fluid"
            style={{ minHeight: '100%' }}
          />
        </div>
        <div className="col-md-6 bg-white p-5">
          <h3 className="pb-3 text-center">Login Form</h3>
          <div className="form-style">
            <form>
              <div className="form-group pb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group pb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <input type="checkbox" />{' '}
                  <span className="pl-2 font-weight-bold">Remember Me</span>
                </div>
                <div>
                  <Link to="#">
                    Forget Password?
                  </Link>
                </div>
              </div>
              <div className="pb-2">
                <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2">
                  Submit
                </button>
              </div>
            </form>
            <div className="pt-4 text-center">
              Get Members Benefit. <Link to="#">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
