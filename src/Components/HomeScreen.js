import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardScreen from '../Screens/DashboardScreen'
import Swal from 'sweetalert2/src/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'
import LaporanScreen from '../Screens/LaporanScreen'

function HomeScreen(props) {
  const API_URL = `http://localhost:8000/`
  const MySwal = withReactContent(Swal)

  // Middleware
  if (localStorage.getItem('token') === '') {
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
        window.localStorage.clear()
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
          Pelapor!
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
          {/* Alerts Dropdown*/}
          <li className="nav-item dropdown no-caret d-none d-sm-block mr-3 dropdown-notifications">
            <a
              className="btn btn-icon btn-transparent-dark dropdown-toggle"
              id="navbarDropdownAlerts"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="bell" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
              aria-labelledby="navbarDropdownAlerts"
            >
              <h6 className="dropdown-header dropdown-notifications-header">
                <i className="mr-2" data-feather="bell" />
                Alerts Center
              </h6>
              {/* Example Alert 1*/}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <div className="dropdown-notifications-item-icon bg-warning">
                  <i data-feather="activity" />
                </div>
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-details">
                    December 29, 2020
                  </div>
                  <div className="dropdown-notifications-item-content-text">
                    This is an alert message. It's nothing serious, but it
                    requires your attention.
                  </div>
                </div>
              </a>
              {/* Example Alert 2*/}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <div className="dropdown-notifications-item-icon bg-info">
                  <i data-feather="bar-chart" />
                </div>
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-details">
                    December 22, 2020
                  </div>
                  <div className="dropdown-notifications-item-content-text">
                    A new monthly report is ready. Click here to view!
                  </div>
                </div>
              </a>
              {/* Example Alert 3*/}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <div className="dropdown-notifications-item-icon bg-danger">
                  <i className="fas fa-exclamation-triangle" />
                </div>
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-details">
                    December 8, 2020
                  </div>
                  <div className="dropdown-notifications-item-content-text">
                    Critical system failure, systems shutting down.
                  </div>
                </div>
              </a>
              {/* Example Alert 4*/}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <div className="dropdown-notifications-item-icon bg-success">
                  <i data-feather="user-plus" />
                </div>
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-details">
                    December 2, 2020
                  </div>
                  <div className="dropdown-notifications-item-content-text">
                    New user request. Woody has requested access to the
                    organization.
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item dropdown-notifications-footer"
                href="#!"
              >
                View All Alerts
              </a>
            </div>
          </li>
          {/* Messages Dropdown*/}
          <li className="nav-item dropdown no-caret d-none d-sm-block mr-3 dropdown-notifications">
            <a
              className="btn btn-icon btn-transparent-dark dropdown-toggle"
              id="navbarDropdownMessages"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="mail" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
              aria-labelledby="navbarDropdownMessages"
            >
              <h6 className="dropdown-header dropdown-notifications-header">
                <i className="mr-2" data-feather="mail" />
                Message Center
              </h6>
              {/* Example Message 1  */}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <img
                  className="dropdown-notifications-item-img"
                  src="assets/img/illustrations/profiles/profile-2.png"
                />
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="dropdown-notifications-item-content-details">
                    Thomas Wilcox · 58m
                  </div>
                </div>
              </a>
              {/* Example Message 2*/}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <img
                  className="dropdown-notifications-item-img"
                  src="assets/img/illustrations/profiles/profile-3.png"
                />
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="dropdown-notifications-item-content-details">
                    Emily Fowler · 2d
                  </div>
                </div>
              </a>
              {/* Example Message 3*/}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <img
                  className="dropdown-notifications-item-img"
                  src="assets/img/illustrations/profiles/profile-4.png"
                />
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="dropdown-notifications-item-content-details">
                    Marshall Rosencrantz · 3d
                  </div>
                </div>
              </a>
              {/* Example Message 4*/}
              <a
                className="dropdown-item dropdown-notifications-item"
                href="#!"
              >
                <img
                  className="dropdown-notifications-item-img"
                  src="assets/img/illustrations/profiles/profile-5.png"
                />
                <div className="dropdown-notifications-item-content">
                  <div className="dropdown-notifications-item-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="dropdown-notifications-item-content-details">
                    Colby Newton · 3d
                  </div>
                </div>
              </a>
              {/* Footer Link*/}
              <a
                className="dropdown-item dropdown-notifications-footer"
                href="#!"
              >
                Read All Messages
              </a>
            </div>
          </li>
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
              className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
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
                    <a className="nav-link" href="">
                      Histori Laporan
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
