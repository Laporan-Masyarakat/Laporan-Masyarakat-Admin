import React from 'react'
import { Route } from 'react-router-dom'
import DashboardScreen from '../Screens/DashboardScreen'
import Swal from 'sweetalert2/src/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'
import LaporanScreen from '../Screens/LaporanScreen'
import TanggapanScreen from '../Screens/TanggapanScreen'
import KategoriScreen from '../Screens/KategoriScreen'

function HomeScreen(props) {
  const API_URL = `http://localhost:8000/`
  const MySwal = withReactContent(Swal)

  // Middleware
  if (!localStorage.getItem('token')) {
    window.location.href = '/'
  }

  // function logout
  const logoutFunc = async () => {
    MySwal.fire({
      title: 'currently logged out of account...',
      didOpen: () => {
        MySwal.showLoading()
      },
    })
    try {
      const getLogout = await fetch(`${API_URL}api/logout`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      const logout = await getLogout.json()
      console.log(logout)
      if (logout.success) {
        localStorage.clear()
        props.history.push('/')
        MySwal.close()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* Navbar Component */}
      <nav
        className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
        id="sidenavAccordion"
      >
        {/* Navbar Brand*/}
        {/* * * Tip * * You can use text or an image for your navbar brand.*/}
        {/* * * * * * * When using an image, we recommend the SVG format.*/}
        {/* * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px*/}
        <a className="navbar-brand" href="/dashboard">
          <img
            src="assets/img/logolapor.png"
            alt="logo"
            style={{ height: 35, marginRight: 10 }}
          />
          Lapor Masyarakat
        </a>
        {/* Sidenav Toggle Button*/}
        <button
          className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
          id="sidebarToggle"
        >
          <i data-feather="menu" />
        </button>
        {/* Navbar Items*/}
        <ul className="navbar-nav align-items-center ml-auto">
          {/* User Dropdown*/}
          <li className="nav-item dropdown no-caret mr-3 mr-lg-0 dropdown-user">
            <a
              className="btn btn-icon btn-transparent-dark dropdown-toggle"
              id="navbarDropdownUserImage"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="img-fluid"
                src={`https://ui-avatars.com/api/?name=${localStorage.getItem(
                  'username',
                )}`}
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-left border-0 shadow animated--fade-in-up"
              aria-labelledby="navbarDropdownUserImage"
            >
              <h6 className="dropdown-header d-flex align-items-center">
                <img
                  className="dropdown-user-img"
                  src={`https://ui-avatars.com/api/?name=${localStorage.getItem(
                    'username',
                  )}`}
                />
                <div className="dropdown-user-details">
                  <div className="dropdown-user-details-name">
                    {localStorage.getItem('username')}
                  </div>
                  <div className="dropdown-user-details-email">
                    {localStorage.getItem('email')}
                  </div>
                </div>
              </h6>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#!">
                <div className="dropdown-item-icon">
                  <i data-feather="settings" />
                </div>
                Account
              </a>
              <a className="dropdown-item" onClick={logoutFunc}>
                <div className="dropdown-item-icon">
                  <i data-feather="log-out" />
                </div>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
              <div className="nav accordion" id="accordionSidenav">
                {/* Sidenav Menu Heading (Account)*/}
                {/* * * Note: * * Visible only on and above the sm breakpoint*/}
                <div className="sidenav-menu-heading d-sm-none">Account</div>
                {/* Sidenav Link (Alerts)*/}
                {/* * * Note: * * Visible only on and above the sm breakpoint*/}
                <a className="nav-link d-sm-none" href="#!">
                  <div className="nav-link-icon">
                    <i data-feather="bell" />
                  </div>
                  Alerts
                  <span className="badge badge-warning-soft text-warning ml-auto">
                    4 New!
                  </span>
                </a>
                {/* Sidenav Link (Messages)*/}
                {/* * * Note: * * Visible only on and above the sm breakpoint*/}
                <a className="nav-link d-sm-none" href="#!">
                  <div className="nav-link-icon">
                    <i data-feather="mail" />
                  </div>
                  Messages
                  <span className="badge badge-success-soft text-success ml-auto">
                    2 New!
                  </span>
                </a>
                {/* Sidenav Menu Heading (Core)*/}
                <div className="sidenav-menu-heading">Core</div>
                {/* Sidenav Accordion (Dashboard)*/}
                <a className="nav-link" href="/dashboard">
                  <div className="nav-link-icon">
                    <i data-feather="activity" />
                  </div>
                  Dashboard
                </a>
                {/* Sidenav Heading (Data Master)*/}
                <div className="sidenav-menu-heading">Data Master</div>
                {/* Sidenav Accordion (Data Laporan)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div className="nav-link-icon">
                    <i data-feather="book-open" />
                  </div>
                  Data Laporan
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapsePages"
                  data-parent="#accordionSidenav"
                >
                  <nav
                    className="sidenav-menu-nested nav accordion"
                    id="accordionSidenavPagesMenu"
                  >
                    <a className="nav-link" href="/laporanmasyarakat">
                      Laporan Masuk
                    </a>
                    <a className="nav-link" href="/kategorilaporan">
                      Kategori Laporan
                    </a>
                    <a className="nav-link" href="/tanggapanlaporan">
                      Tanggapan Laporan
                    </a>
                  </nav>
                </div>
                {/* Sidenav Accordion (Data User)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseFlows"
                  aria-expanded="false"
                  aria-controls="collapseFlows"
                >
                  <div className="nav-link-icon">
                    <i data-feather="users" />
                  </div>
                  Data User
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseFlows"
                  data-parent="#accordionSidenav"
                >
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="multi-tenant-select.html">
                      Data User
                    </a>
                    <a className="nav-link" href="wizard.html">
                      Data Admin & Petugas
                    </a>
                  </nav>
                </div>
                {/* Sidenav Accordion (Cetak Laporan)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapsePrint"
                  aria-expanded="false"
                  aria-controls="collapsePrint"
                >
                  <div className="nav-link-icon">
                    <i data-feather="printer" />
                  </div>
                  Cetak Laporan
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapsePrint"
                  data-parent="#accordionSidenav"
                >
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="multi-tenant-select.html">
                      Cetak Data Pdf
                    </a>
                    <a className="nav-link" href="wizard.html">
                      Cetak Data Excel
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            {/* Sidenav Footer*/}
            <div className="sidenav-footer">
              <div className="sidenav-footer-content">
                <div className="sidenav-footer-subtitle">Logged in as:</div>
                <div className="sidenav-footer-title">
                  {localStorage.getItem('username')}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          {/* Content */}
          <main>
            {/* Dashboard Screen */}
            <Route path="/dashboard">
              <DashboardScreen />
            </Route>

            {/* Laporan Screen */}
            <Route path="/laporanmasyarakat">
              <LaporanScreen />
            </Route>

            {/* Tanggapan Screen */}
            <Route path="/tanggapanlaporan">
              <TanggapanScreen />
            </Route>

            {/* Kategori Screen */}
            <Route path="/kategorilaporan">
              <KategoriScreen />
            </Route>
          </main>

          <footer className="footer mt-auto footer-light">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 small">Copyright © Pelapor 2021</div>
                <div className="col-md-6 text-md-right small">
                  <a href="#!">Privacy Policy</a>·
                  <a href="#!">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
