import React, { useState, useEffect } from 'react'
import { ReactComponent as BackgroundLogin } from '../image/loginback.svg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LoginScreen(props) {
  const API_URL = `http://localhost:8000/`
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const MySwal = withReactContent(Swal)

  // function login
  const loginForm = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)

    try {
      const fetchLogin = await fetch(`${API_URL}api/login`, {
        method: 'POST',
        body: formData,
      })
      const datalogin = await fetchLogin.json()
      console.log(datalogin)
      if (datalogin.success) {
        localStorage.setItem('username', datalogin.result.username)
        localStorage.setItem('role', datalogin.result.role)
        localStorage.setItem('token', datalogin.result.token)
        localStorage.setItem('iduser', datalogin.result.iduser)
        props.setData({
          loggedIn: true,
          user: datalogin.result.username,
        })
        MySwal.fire({
          title: 'Loading...',
          timer: 1000,
          didOpen: () => {
            MySwal.showLoading()
          },
        }).then(() => {
          window.location.href = '/dashboard'
        })
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'There is an error!',
          text: 'Email or password is not correct!',
        })
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.history.push('/dashboard')
    }
  }, [props.history])

  return (
    <>
      <main>
        <BackgroundLogin
          style={{
            width: '50%',
            position: 'absolute',
            height: '50%',
            left: '-14%',
            bottom: '3',
          }}
        />
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
                  <form onSubmit={loginForm}>
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
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {/* Form Group (login box)*/}
                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
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
      </main>
    </>
  )
}

export default LoginScreen
