import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'
import MySwal from 'sweetalert2/src/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'

function UsersScreen() {
  const API_URL = `http://localhost:8000/`
  const Swal = withReactContent(MySwal)
  const [tableUser, setTableUser] = useState('')
  const [role, setRole] = useState('')
  const [roledata, setRoleData] = useState('')

  // Setting the data table
  const datatableUser = (user) => {
    let rowsData = []

    for (var index = 0; index < user.length; index++) {
      let rowItem = {}
      rowItem['no'] = index + 1
      rowItem['username'] = user[index].username
      rowItem['email'] = user[index].email
      rowItem['role'] = user[index].role[0].nama_role
      rowItem['action'] = (
        <>
          <div className="dropdown no-caret">
            <button
              className="btn btn-transparent-dark btn-icon dropdown-toggle"
              id="dropdownMenuButton"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-right animated--fade-in-up"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="#!" id={user[index].id}>
                <div className="dropdown-item-icon">
                  <i className="fas fa-trash-alt text-gray-500"></i>
                </div>
                Hapus User
              </a>
            </div>
          </div>
        </>
      )
      rowsData.push(rowItem)
    }
    setTableUser(rowsData)
  }

  //   fetch user data
  const fetchUser = async () => {
    try {
      const data = await fetch(`${API_URL}api/getuser`, {
        method: 'GET',
      })
      const userdata = await data.json()
      datatableUser(userdata.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  //   fetch role data
  const fetchRole = async () => {
    try {
      const data = await fetch(`${API_URL}api/getrole`, {
        method: 'GET',
      })
      const roledata = await data.json()
      setRoleData(roledata.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    fetchUser().then(() => {
      fetchRole()
    })
  }, [])

  // data user
  const dataUser = (data) => {
    return {
      columns: [
        {
          label: 'No',
          field: 'no',
          sort: 'asc',
        },
        {
          label: 'Username',
          field: 'username',
          sort: 'asc',
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
        },
        {
          label: 'Role',
          field: 'role',
          sort: 'asc',
        },
        {
          label: 'Action',
          field: 'action',
          sort: 'asc',
        },
      ],
      rows: data,
    }
  }

  const submitUser = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {
      const data = await fetch(`${API_URL}api/createuser`, {
        method: 'POST',
        body: formData,
      })
      const adduser = await data.json()
      if (adduser.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Menambah Data User',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
        }).then(() => {
          fetchUser()
          document.getElementById('userForm').reset()
          window.$('#addModal').modal('hide')
        })
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <>
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div className="container">
          <div className="page-header-content pt-4">
            <ol className="breadcrumb mb-0 mt-4">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">User</li>
            </ol>
          </div>
        </div>
      </header>
      {/* Main page content*/}
      <div className="container mt-n10">
        <div className="card card-header-actions">
          <div className="card-header">
            Table User
            <div class="dropdown no-caret">
              <button
                class="btn btn-transparent-dark btn-icon dropdown-toggle"
                id="dropdownMenuButton"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v text-gray-500" />
              </button>
              <div
                class="dropdown-menu dropdown-menu-right animated--fade-in-up"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  class="dropdown-item"
                  href="#!"
                  data-toggle="modal"
                  data-target="#addModal"
                >
                  <div class="dropdown-item-icon">
                    <i class="text-gray-500 fas fa-plus-circle"></i>
                  </div>
                  Tambah User
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <MDBDataTable
              sortable={true}
              noBottomColumns={true}
              striped
              data={dataUser(tableUser)}
              responsive={true}
            />
          </div>
        </div>
      </div>

      {/* user */}
      <div className="modal fade" tabIndex={-1} id="addModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">User Modal</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={(e) => submitUser(e)} id="userForm">
              <div className="modal-body">
                <div className="form-group">
                  <label>
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan Username"
                    name="username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Masukkan Email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Masukkan Password"
                    name="password"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>
                    <b>Role</b>
                  </label>
                  <select
                    class="form-control"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option selected>Choose...</option>
                    {roledata.length > 0 ? (
                      roledata.map((item) => (
                        <option value={item.id}>{item.nama_role}</option>
                      ))
                    ) : (
                      <option>No Option In Here!</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersScreen
