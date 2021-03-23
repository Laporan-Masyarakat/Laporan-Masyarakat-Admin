import React from 'react'

function LoginScreen() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            {/* Basic login form*/}
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header justify-content-center">
                <div className="row">
                  <div className="col-sm-1">
                    <i
                      data-feather="log-in"
                      style={{ width: 30, height: 30, marginTop: '100%' }}
                    />
                  </div>
                  <div className="col">
                    <h3 className="font-weight-light my-4">Login</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {/* Login form*/}
                <form>
                  {/* Form Group (email address)*/}
                  <div className="form-group">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  {/* Form Group (password)*/}
                  <div className="form-group">
                    <label className="small mb-1" htmlFor="inputPassword">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>
                  {/* Form Group (remember password checkbox)*/}
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="rememberPasswordCheck"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                  </div>
                  {/* Form Group (login box)*/}
                  <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a className="btn btn-primary" href="index.html">
                      Login
                    </a>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <div className="small">
                  <a href="auth-register-basic.html">
                    Need an account? Sign up!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen
