import React from 'react'
import { Menu } from 'react-feather'

function App() {
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
        <a className="navbar-brand" href="index.html">
          SB Admin Pro
        </a>
        {/* Sidenav Toggle Button*/}
        <button
          className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
          id="sidebarToggle"
        >
          <Menu />
        </button>
        {/* Navbar Search Input*/}
        {/* * * Note: * * Visible only on and above the md breakpoint*/}
        <form className="form-inline mr-auto d-none d-md-block mr-3">
          <div className="input-group input-group-joined input-group-solid">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <i data-feather="search" />
              </div>
            </div>
          </div>
        </form>
        {/* Navbar Items*/}
        <ul className="navbar-nav align-items-center ml-auto">
          {/* Navbar Search Dropdown*/}
          {/* * * Note: * * Visible only below the md breakpoint*/}
          <li className="nav-item dropdown no-caret mr-3 d-md-none">
            <a
              className="btn btn-icon btn-transparent-dark dropdown-toggle"
              id="searchDropdown"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="search" />
            </a>
            {/* Dropdown - Search*/}
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--fade-in-up"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100">
                <div className="input-group input-group-joined input-group-solid">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <i data-feather="search" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </li>
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
                src="assets/img/illustrations/profiles/profile-1.png"
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
              aria-labelledby="navbarDropdownUserImage"
            >
              <h6 className="dropdown-header d-flex align-items-center">
                <img
                  className="dropdown-user-img"
                  src="assets/img/illustrations/profiles/profile-1.png"
                />
                <div className="dropdown-user-details">
                  <div className="dropdown-user-details-name">Valerie Luna</div>
                  <div className="dropdown-user-details-email">
                    vluna@aol.com
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
              <a className="dropdown-item" href="#!">
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
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseDashboards"
                  aria-expanded="false"
                  aria-controls="collapseDashboards"
                >
                  <div className="nav-link-icon">
                    <i data-feather="activity" />
                  </div>
                  Dashboards
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseDashboards"
                  data-parent="#accordionSidenav"
                >
                  <nav
                    className="sidenav-menu-nested nav accordion"
                    id="accordionSidenavPages"
                  >
                    <a className="nav-link" href="index.html">
                      Default
                      <span className="badge badge-primary-soft text-primary ml-auto">
                        Updated
                      </span>
                    </a>
                    <a className="nav-link" href="dashboard-2.html">
                      Multipurpose
                    </a>
                    <a className="nav-link" href="dashboard-3.html">
                      Affiliate
                    </a>
                  </nav>
                </div>
                {/* Sidenav Heading (App Views)*/}
                <div className="sidenav-menu-heading">App Views</div>
                {/* Sidenav Accordion (Pages)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div className="nav-link-icon">
                    <i data-feather="grid" />
                  </div>
                  Pages
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
                    {/* Nested Sidenav Accordion (Pages -> Account)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#pagesCollapseAccount"
                      aria-expanded="false"
                      aria-controls="pagesCollapseAccount"
                    >
                      Account
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="pagesCollapseAccount"
                      data-parent="#accordionSidenavPagesMenu"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="account-profile.html">
                          Profile
                        </a>
                        <a className="nav-link" href="account-billing.html">
                          Billing
                        </a>
                        <a className="nav-link" href="account-security.html">
                          Security
                        </a>
                        <a
                          className="nav-link"
                          href="account-notifications.html"
                        >
                          Notifications
                        </a>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Pages -> Authentication)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#pagesCollapseAuth"
                      aria-expanded="false"
                      aria-controls="pagesCollapseAuth"
                    >
                      Authentication
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="pagesCollapseAuth"
                      data-parent="#accordionSidenavPagesMenu"
                    >
                      <nav
                        className="sidenav-menu-nested nav accordion"
                        id="accordionSidenavPagesAuth"
                      >
                        {/* Nested Sidenav Accordion (Pages -> Authentication -> Basic)*/}
                        <a
                          className="nav-link collapsed"
                          href="#"
                          data-toggle="collapse"
                          data-target="#pagesCollapseAuthBasic"
                          aria-expanded="false"
                          aria-controls="pagesCollapseAuthBasic"
                        >
                          Basic
                          <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down" />
                          </div>
                        </a>
                        <div
                          className="collapse"
                          id="pagesCollapseAuthBasic"
                          data-parent="#accordionSidenavPagesAuth"
                        >
                          <nav className="sidenav-menu-nested nav">
                            <a
                              className="nav-link"
                              href="auth-login-basic.html"
                            >
                              Login
                            </a>
                            <a
                              className="nav-link"
                              href="auth-register-basic.html"
                            >
                              Register
                            </a>
                            <a
                              className="nav-link"
                              href="auth-password-basic.html"
                            >
                              Forgot Password
                            </a>
                          </nav>
                        </div>
                        {/* Nested Sidenav Accordion (Pages -> Authentication -> Social)*/}
                        <a
                          className="nav-link collapsed"
                          href="#"
                          data-toggle="collapse"
                          data-target="#pagesCollapseAuthSocial"
                          aria-expanded="false"
                          aria-controls="pagesCollapseAuthSocial"
                        >
                          Social
                          <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down" />
                          </div>
                        </a>
                        <div
                          className="collapse"
                          id="pagesCollapseAuthSocial"
                          data-parent="#accordionSidenavPagesAuth"
                        >
                          <nav className="sidenav-menu-nested nav">
                            <a
                              className="nav-link"
                              href="auth-login-social.html"
                            >
                              Login
                            </a>
                            <a
                              className="nav-link"
                              href="auth-register-social.html"
                            >
                              Register
                            </a>
                            <a
                              className="nav-link"
                              href="auth-password-social.html"
                            >
                              Forgot Password
                            </a>
                          </nav>
                        </div>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Pages -> Error)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#pagesCollapseError"
                      aria-expanded="false"
                      aria-controls="pagesCollapseError"
                    >
                      Error
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="pagesCollapseError"
                      data-parent="#accordionSidenavPagesMenu"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="error-400.html">
                          400 Error
                        </a>
                        <a className="nav-link" href="error-401.html">
                          401 Error
                        </a>
                        <a className="nav-link" href="error-403.html">
                          403 Error
                        </a>
                        <a className="nav-link" href="error-404-1.html">
                          404 Error 1
                        </a>
                        <a className="nav-link" href="error-404-2.html">
                          404 Error 2
                        </a>
                        <a className="nav-link" href="error-500.html">
                          500 Error
                        </a>
                        <a className="nav-link" href="error-503.html">
                          503 Error
                        </a>
                        <a className="nav-link" href="error-504.html">
                          504 Error
                        </a>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Pages -> Knowledge Base)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#pagesCollapseKnowledgeBase"
                      aria-expanded="false"
                      aria-controls="pagesCollapseKnowledgeBase"
                    >
                      Knowledge Base
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="pagesCollapseKnowledgeBase"
                      data-parent="#accordionSidenavPagesMenu"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <a
                          className="nav-link"
                          href="knowledge-base-home-1.html"
                        >
                          Home 1
                        </a>
                        <a
                          className="nav-link"
                          href="knowledge-base-home-2.html"
                        >
                          Home 2
                        </a>
                        <a
                          className="nav-link"
                          href="knowledge-base-category.html"
                        >
                          Category
                        </a>
                        <a
                          className="nav-link"
                          href="knowledge-base-article.html"
                        >
                          Article
                        </a>
                      </nav>
                    </div>
                    <a className="nav-link" href="pricing.html">
                      Pricing
                    </a>
                    <a className="nav-link" href="invoice.html">
                      Invoice
                    </a>
                  </nav>
                </div>
                {/* Sidenav Accordion (Flows)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseFlows"
                  aria-expanded="false"
                  aria-controls="collapseFlows"
                >
                  <div className="nav-link-icon">
                    <i data-feather="repeat" />
                  </div>
                  Flows
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
                      Multi-Tenant Registration
                    </a>
                    <a className="nav-link" href="wizard.html">
                      Wizard
                    </a>
                  </nav>
                </div>
                {/* Sidenav Heading (UI Toolkit)*/}
                <div className="sidenav-menu-heading">UI Toolkit</div>
                {/* Sidenav Accordion (Layout)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div className="nav-link-icon">
                    <i data-feather="layout" />
                  </div>
                  Layout
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseLayouts"
                  data-parent="#accordionSidenav"
                >
                  <nav
                    className="sidenav-menu-nested nav accordion"
                    id="accordionSidenavLayout"
                  >
                    {/* Nested Sidenav Accordion (Layout -> Navigation)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseLayoutSidenavVariations"
                      aria-expanded="false"
                      aria-controls="collapseLayoutSidenavVariations"
                    >
                      Navigation
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseLayoutSidenavVariations"
                      data-parent="#accordionSidenavLayout"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="layout-static.html">
                          Static Sidenav
                        </a>
                        <a className="nav-link" href="layout-dark.html">
                          Dark Sidenav
                        </a>
                        <a className="nav-link" href="layout-rtl.html">
                          RTL Layout
                        </a>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Layout -> Container Options)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseLayoutContainers"
                      aria-expanded="false"
                      aria-controls="collapseLayoutContainers"
                    >
                      Container Options
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseLayoutContainers"
                      data-parent="#accordionSidenavLayout"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="layout-boxed.html">
                          Boxed Layout
                        </a>
                        <a className="nav-link" href="layout-fluid.html">
                          Fluid Layout
                        </a>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Layout -> Page Headers)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseLayoutsPageHeaders"
                      aria-expanded="false"
                      aria-controls="collapseLayoutsPageHeaders"
                    >
                      Page Headers
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseLayoutsPageHeaders"
                      data-parent="#accordionSidenavLayout"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="header-simplified.html">
                          Simplified
                        </a>
                        <a className="nav-link" href="header-compact.html">
                          Compact
                        </a>
                        <a className="nav-link" href="header-overlap.html">
                          Content Overlap
                        </a>
                        <a className="nav-link" href="header-breadcrumbs.html">
                          Breadcrumbs
                        </a>
                        <a className="nav-link" href="header-light.html">
                          Light
                        </a>
                      </nav>
                    </div>
                    {/* Nested Sidenav Accordion (Layout -> Starter Layouts)*/}
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseLayoutsStarterTemplates"
                      aria-expanded="false"
                      aria-controls="collapseLayoutsStarterTemplates"
                    >
                      Starter Layouts
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down" />
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapseLayoutsStarterTemplates"
                      data-parent="#accordionSidenavLayout"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <a className="nav-link" href="starter-default.html">
                          Default
                        </a>
                        <a className="nav-link" href="starter-minimal.html">
                          Minimal
                        </a>
                      </nav>
                    </div>
                  </nav>
                </div>
                {/* Sidenav Accordion (Components)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseComponents"
                  aria-expanded="false"
                  aria-controls="collapseComponents"
                >
                  <div className="nav-link-icon">
                    <i data-feather="package" />
                  </div>
                  Components
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseComponents"
                  data-parent="#accordionSidenav"
                >
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="alerts.html">
                      Alerts
                    </a>
                    <a className="nav-link" href="avatars.html">
                      Avatars
                    </a>
                    <a className="nav-link" href="badges.html">
                      Badges
                    </a>
                    <a className="nav-link" href="buttons.html">
                      Buttons
                    </a>
                    <a className="nav-link" href="cards.html">
                      Cards
                      <span className="badge badge-primary-soft text-primary ml-auto">
                        Updated
                      </span>
                    </a>
                    <a className="nav-link" href="dropdowns.html">
                      Dropdowns
                    </a>
                    <a className="nav-link" href="forms.html">
                      Forms
                      <span className="badge badge-primary-soft text-primary ml-auto">
                        Updated
                      </span>
                    </a>
                    <a className="nav-link" href="modals.html">
                      Modals
                    </a>
                    <a className="nav-link" href="navigation.html">
                      Navigation
                    </a>
                    <a className="nav-link" href="progress.html">
                      Progress
                    </a>
                    <a className="nav-link" href="step.html">
                      Step
                    </a>
                    <a className="nav-link" href="timeline.html">
                      Timeline
                    </a>
                    <a className="nav-link" href="toasts.html">
                      Toasts
                    </a>
                    <a className="nav-link" href="tooltips.html">
                      Tooltips
                    </a>
                  </nav>
                </div>
                {/* Sidenav Accordion (Utilities)*/}
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="false"
                  aria-controls="collapseUtilities"
                >
                  <div className="nav-link-icon">
                    <i data-feather="tool" />
                  </div>
                  Utilities
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseUtilities"
                  data-parent="#accordionSidenav"
                >
                  <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="animations.html">
                      Animations
                    </a>
                    <a className="nav-link" href="background.html">
                      Background
                    </a>
                    <a className="nav-link" href="borders.html">
                      Borders
                    </a>
                    <a className="nav-link" href="lift.html">
                      Lift
                    </a>
                    <a className="nav-link" href="shadows.html">
                      Shadows
                    </a>
                    <a className="nav-link" href="typography.html">
                      Typography
                    </a>
                  </nav>
                </div>
                {/* Sidenav Heading (Addons)*/}
                <div className="sidenav-menu-heading">Plugins</div>
                {/* Sidenav Link (Charts)*/}
                <a className="nav-link" href="charts.html">
                  <div className="nav-link-icon">
                    <i data-feather="bar-chart" />
                  </div>
                  Charts
                </a>
                {/* Sidenav Link (Tables)*/}
                <a className="nav-link" href="tables.html">
                  <div className="nav-link-icon">
                    <i data-feather="filter" />
                  </div>
                  Tables
                </a>
              </div>
            </div>
            {/* Sidenav Footer*/}
            <div className="sidenav-footer">
              <div className="sidenav-footer-content">
                <div className="sidenav-footer-subtitle">Logged in as:</div>
                <div className="sidenav-footer-title">Valerie Luna</div>
              </div>
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
              <div className="container">
                <div className="page-header-content pt-4">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto mt-4">
                      <h1 className="page-header-title">
                        <div className="page-header-icon">
                          <i data-feather="activity" />
                        </div>
                        Dashboard
                      </h1>
                      <div className="page-header-subtitle">
                        Example dashboard overview and content summary
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Main page content*/}
            <div className="container mt-n10">
              <div className="row">
                <div className="col-xxl-4 col-xl-12 mb-4">
                  <div className="card h-100">
                    <div className="card-body h-100 d-flex flex-column justify-content-center py-5 py-xl-4">
                      <div className="row align-items-center">
                        <div className="col-xl-8 col-xxl-12">
                          <div className="text-center text-xl-left text-xxl-center px-4 mb-4 mb-xl-0 mb-xxl-4">
                            <h1 className="text-primary">
                              Welcome to SB Admin Pro!
                            </h1>
                            <p className="text-gray-700 mb-0">
                              Browse our fully designed UI toolkit! Browse our
                              prebuilt app pages, components, and utilites, and
                              be sure to look at our full documentation!
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-xxl-12 text-center">
                          <img
                            className="img-fluid"
                            src="assets/img/illustrations/at-work.svg"
                            style={{ maxWidth: '26rem' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-6 mb-4">
                  <div className="card card-header-actions h-100">
                    <div className="card-header">
                      Recent Activity
                      <div className="dropdown no-caret">
                        <button
                          className="btn btn-transparent-dark btn-icon dropdown-toggle"
                          id="dropdownMenuButton"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i
                            className="text-gray-500"
                            data-feather="more-vertical"
                          />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <h6 className="dropdown-header">Filter Activity:</h6>
                          <a className="dropdown-item" href="#!">
                            <span className="badge badge-green-soft text-green my-1">
                              Commerce
                            </span>
                          </a>
                          <a className="dropdown-item" href="#!">
                            <span className="badge badge-blue-soft text-blue my-1">
                              Reporting
                            </span>
                          </a>
                          <a className="dropdown-item" href="#!">
                            <span className="badge badge-yellow-soft text-yellow my-1">
                              Server
                            </span>
                          </a>
                          <a className="dropdown-item" href="#!">
                            <span className="badge badge-purple-soft text-purple my-1">
                              Users
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="timeline timeline-xs">
                        {/* Timeline Item 1*/}
                        <div className="timeline-item">
                          <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">
                              27 min
                            </div>
                            <div className="timeline-item-marker-indicator bg-green" />
                          </div>
                          <div className="timeline-item-content">
                            New order placed!
                            <a className="font-weight-bold text-dark" href="#!">
                              Order #2912
                            </a>
                            has been successfully placed.
                          </div>
                        </div>
                        {/* Timeline Item 2*/}
                        <div className="timeline-item">
                          <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">
                              58 min
                            </div>
                            <div className="timeline-item-marker-indicator bg-blue" />
                          </div>
                          <div className="timeline-item-content">
                            Your
                            <a className="font-weight-bold text-dark" href="#!">
                              weekly report
                            </a>
                            has been generated and is ready to view.
                          </div>
                        </div>
                        {/* Timeline Item 3*/}
                        <div className="timeline-item">
                          <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">
                              2 hrs
                            </div>
                            <div className="timeline-item-marker-indicator bg-purple" />
                          </div>
                          <div className="timeline-item-content">
                            New user
                            <a className="font-weight-bold text-dark" href="#!">
                              Valerie Luna
                            </a>
                            has registered
                          </div>
                        </div>
                        {/* Timeline Item 4*/}
                        <div className="timeline-item">
                          <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">
                              1 day
                            </div>
                            <div className="timeline-item-marker-indicator bg-yellow" />
                          </div>
                          <div className="timeline-item-content">
                            Server activity monitor alert
                          </div>
                        </div>
                        {/* Timeline Item 5*/}
                        <div className="timeline-item">
                          <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">
                              1 day
                            </div>
                            <div className="timeline-item-marker-indicator bg-green" />
                          </div>
                          <div className="timeline-item-content">
                            New order placed!
                            <a className="font-weight-bold text-dark" href="#!">
                              Order #2911
                            </a>
                            has been successfully placed.
                          </div>
                        </div>
                        {/* Timeline Item 6*/}
                        <div className="timeline-item">
                          <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">
                              1 day
                            </div>
                            <div className="timeline-item-marker-indicator bg-purple" />
                          </div>
                          <div className="timeline-item-content">
                            Details for
                            <a className="font-weight-bold text-dark" href="#!">
                              Marketing and Planning Meeting
                            </a>
                            have been updated.
                          </div>
                        </div>
                        {/* Timeline Item 7*/}
                        <div className="timeline-item">
                          <div className="timeline-item-marker">
                            <div className="timeline-item-marker-text">
                              2 days
                            </div>
                            <div className="timeline-item-marker-indicator bg-green" />
                          </div>
                          <div className="timeline-item-content">
                            New order placed!
                            <a className="font-weight-bold text-dark" href="#!">
                              Order #2910
                            </a>
                            has been successfully placed.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-6 mb-4">
                  <div className="card card-header-actions h-100">
                    <div className="card-header">
                      Progress Tracker
                      <div className="dropdown no-caret">
                        <button
                          className="btn btn-transparent-dark btn-icon dropdown-toggle"
                          id="dropdownMenuButton"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i
                            className="text-gray-500"
                            data-feather="more-vertical"
                          />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#!">
                            <div className="dropdown-item-icon">
                              <i
                                className="text-gray-500"
                                data-feather="list"
                              />
                            </div>
                            Manage Tasks
                          </a>
                          <a className="dropdown-item" href="#!">
                            <div className="dropdown-item-icon">
                              <i
                                className="text-gray-500"
                                data-feather="plus-circle"
                              />
                            </div>
                            Add New Task
                          </a>
                          <a className="dropdown-item" href="#!">
                            <div className="dropdown-item-icon">
                              <i
                                className="text-gray-500"
                                data-feather="minus-circle"
                              />
                            </div>
                            Delete Tasks
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="small">
                        Server Migration
                        <span className="float-right font-weight-bold">
                          20%
                        </span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: '20%' }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small">
                        Sales Tracking
                        <span className="float-right font-weight-bold">
                          40%
                        </span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: '40%' }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small">
                        Customer Database
                        <span className="float-right font-weight-bold">
                          60%
                        </span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '60%' }}
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small">
                        Payout Details
                        <span className="float-right font-weight-bold">
                          80%
                        </span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: '80%' }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small">
                        Account Setup
                        <span className="float-right font-weight-bold">
                          Complete!
                        </span>
                      </h4>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: '100%' }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <a className="card-footer" href="#!">
                      <div className="d-flex align-items-center justify-content-between small text-body">
                        Visit Task Center
                        <i data-feather="arrow-right" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* Example Colored Cards for Dashboard Demo*/}
              <div className="row">
                <div className="col-xxl-3 col-lg-6">
                  <div className="card bg-primary text-white mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-3">
                          <div className="text-white-75 small">
                            Earnings (Monthly)
                          </div>
                          <div className="text-lg font-weight-bold">
                            $40,000
                          </div>
                        </div>
                        <i
                          className="feather-xl text-white-50"
                          data-feather="calendar"
                        />
                      </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Report
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-lg-6">
                  <div className="card bg-warning text-white mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-3">
                          <div className="text-white-75 small">
                            Earnings (Annual)
                          </div>
                          <div className="text-lg font-weight-bold">
                            $215,000
                          </div>
                        </div>
                        <i
                          className="feather-xl text-white-50"
                          data-feather="dollar-sign"
                        />
                      </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Report
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-lg-6">
                  <div className="card bg-success text-white mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-3">
                          <div className="text-white-75 small">
                            Task Completion
                          </div>
                          <div className="text-lg font-weight-bold">24</div>
                        </div>
                        <i
                          className="feather-xl text-white-50"
                          data-feather="check-square"
                        />
                      </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Tasks
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-lg-6">
                  <div className="card bg-danger text-white mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-3">
                          <div className="text-white-75 small">
                            Pending Requests
                          </div>
                          <div className="text-lg font-weight-bold">17</div>
                        </div>
                        <i
                          className="feather-xl text-white-50"
                          data-feather="message-circle"
                        />
                      </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-white stretched-link" href="#">
                        View Requests
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Example DataTable for Dashboard Demo*/}
              <div className="card mb-4">
                <div className="card-header">Personnel Management</div>
                <div className="card-body">
                  <div className="datatable">
                    <table
                      className="table table-bordered table-hover"
                      id="dataTable"
                      width="100%"
                      cellSpacing={0}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td>$170,750</td>
                          <td>
                            <div className="badge badge-warning badge-pill">
                              Pending
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td>$86,000</td>
                          <td>
                            <div className="badge badge-secondary badge-pill">
                              Part-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Cedric Kelly</td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                          <td>
                            <div className="badge badge-info badge-pill">
                              Contract
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Airi Satou</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>33</td>
                          <td>2008/11/28</td>
                          <td>$162,700</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Brielle Williamson</td>
                          <td>Integration Specialist</td>
                          <td>New York</td>
                          <td>61</td>
                          <td>2012/12/02</td>
                          <td>$372,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Herrod Chandler</td>
                          <td>Sales Assistant</td>
                          <td>San Francisco</td>
                          <td>59</td>
                          <td>2012/08/06</td>
                          <td>$137,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Rhona Davidson</td>
                          <td>Integration Specialist</td>
                          <td>Tokyo</td>
                          <td>55</td>
                          <td>2010/10/14</td>
                          <td>$327,900</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Colleen Hurst</td>
                          <td>Javascript Developer</td>
                          <td>San Francisco</td>
                          <td>39</td>
                          <td>2009/09/15</td>
                          <td>$205,500</td>
                          <td>
                            <div className="badge badge-info badge-pill">
                              Contract
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Sonya Frost</td>
                          <td>Software Engineer</td>
                          <td>Edinburgh</td>
                          <td>23</td>
                          <td>2008/12/13</td>
                          <td>$103,600</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jena Gaines</td>
                          <td>Office Manager</td>
                          <td>London</td>
                          <td>30</td>
                          <td>2008/12/19</td>
                          <td>$90,560</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Quinn Flynn</td>
                          <td>Support Lead</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2013/03/03</td>
                          <td>$342,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Charde Marshall</td>
                          <td>Regional Director</td>
                          <td>San Francisco</td>
                          <td>36</td>
                          <td>2008/10/16</td>
                          <td>$470,600</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Haley Kennedy</td>
                          <td>Senior Marketing Designer</td>
                          <td>London</td>
                          <td>43</td>
                          <td>2012/12/18</td>
                          <td>$313,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Tatyana Fitzpatrick</td>
                          <td>Regional Director</td>
                          <td>London</td>
                          <td>19</td>
                          <td>2010/03/17</td>
                          <td>$385,750</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Michael Silva</td>
                          <td>Marketing Designer</td>
                          <td>London</td>
                          <td>66</td>
                          <td>2012/11/27</td>
                          <td>$198,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Paul Byrd</td>
                          <td>Chief Financial Officer (CFO)</td>
                          <td>New York</td>
                          <td>64</td>
                          <td>2010/06/09</td>
                          <td>$725,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Gloria Little</td>
                          <td>Systems Administrator</td>
                          <td>New York</td>
                          <td>59</td>
                          <td>2009/04/10</td>
                          <td>$237,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Bradley Greer</td>
                          <td>Software Engineer</td>
                          <td>London</td>
                          <td>41</td>
                          <td>2012/10/13</td>
                          <td>$132,000</td>
                          <td>
                            <div className="badge badge-warning badge-pill">
                              Pending
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Dai Rios</td>
                          <td>Personnel Lead</td>
                          <td>Edinburgh</td>
                          <td>35</td>
                          <td>2012/09/26</td>
                          <td>$217,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jenette Caldwell</td>
                          <td>Development Lead</td>
                          <td>New York</td>
                          <td>30</td>
                          <td>2011/09/03</td>
                          <td>$345,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Yuri Berry</td>
                          <td>Chief Marketing Officer (CMO)</td>
                          <td>New York</td>
                          <td>40</td>
                          <td>2009/06/25</td>
                          <td>$675,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Caesar Vance</td>
                          <td>Pre-Sales Support</td>
                          <td>New York</td>
                          <td>21</td>
                          <td>2011/12/12</td>
                          <td>$106,450</td>
                          <td>
                            <div className="badge badge-secondary badge-pill">
                              Part-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Doris Wilder</td>
                          <td>Sales Assistant</td>
                          <td>Sidney</td>
                          <td>23</td>
                          <td>2010/09/20</td>
                          <td>$85,600</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Angelica Ramos</td>
                          <td>Chief Executive Officer (CEO)</td>
                          <td>London</td>
                          <td>47</td>
                          <td>2009/10/09</td>
                          <td>$1,200,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Gavin Joyce</td>
                          <td>Developer</td>
                          <td>Edinburgh</td>
                          <td>42</td>
                          <td>2010/12/22</td>
                          <td>$92,575</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jennifer Chang</td>
                          <td>Regional Director</td>
                          <td>Singapore</td>
                          <td>28</td>
                          <td>2010/11/14</td>
                          <td>$357,650</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Brenden Wagner</td>
                          <td>Software Engineer</td>
                          <td>San Francisco</td>
                          <td>28</td>
                          <td>2011/06/07</td>
                          <td>$206,850</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Fiona Green</td>
                          <td>Chief Operating Officer (COO)</td>
                          <td>San Francisco</td>
                          <td>48</td>
                          <td>2010/03/11</td>
                          <td>$850,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Shou Itou</td>
                          <td>Regional Marketing</td>
                          <td>Tokyo</td>
                          <td>20</td>
                          <td>2011/08/14</td>
                          <td>$163,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Michelle House</td>
                          <td>Integration Specialist</td>
                          <td>Sidney</td>
                          <td>37</td>
                          <td>2011/06/02</td>
                          <td>$95,400</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Suki Burks</td>
                          <td>Developer</td>
                          <td>London</td>
                          <td>53</td>
                          <td>2009/10/22</td>
                          <td>$114,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Prescott Bartlett</td>
                          <td>Technical Author</td>
                          <td>London</td>
                          <td>27</td>
                          <td>2011/05/07</td>
                          <td>$145,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Gavin Cortez</td>
                          <td>Team Leader</td>
                          <td>San Francisco</td>
                          <td>22</td>
                          <td>2008/10/26</td>
                          <td>$235,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Martena Mccray</td>
                          <td>Post-Sales support</td>
                          <td>Edinburgh</td>
                          <td>46</td>
                          <td>2011/03/09</td>
                          <td>$324,050</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Unity Butler</td>
                          <td>Marketing Designer</td>
                          <td>San Francisco</td>
                          <td>47</td>
                          <td>2009/12/09</td>
                          <td>$85,675</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Howard Hatfield</td>
                          <td>Office Manager</td>
                          <td>San Francisco</td>
                          <td>51</td>
                          <td>2008/12/16</td>
                          <td>$164,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Hope Fuentes</td>
                          <td>Secretary</td>
                          <td>San Francisco</td>
                          <td>41</td>
                          <td>2010/02/12</td>
                          <td>$109,850</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Vivian Harrell</td>
                          <td>Financial Controller</td>
                          <td>San Francisco</td>
                          <td>62</td>
                          <td>2009/02/14</td>
                          <td>$452,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Timothy Mooney</td>
                          <td>Office Manager</td>
                          <td>London</td>
                          <td>37</td>
                          <td>2008/12/11</td>
                          <td>$136,200</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jackson Bradshaw</td>
                          <td>Director</td>
                          <td>New York</td>
                          <td>65</td>
                          <td>2008/09/26</td>
                          <td>$645,750</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Olivia Liang</td>
                          <td>Support Engineer</td>
                          <td>Singapore</td>
                          <td>64</td>
                          <td>2011/02/03</td>
                          <td>$234,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Bruno Nash</td>
                          <td>Software Engineer</td>
                          <td>London</td>
                          <td>38</td>
                          <td>2011/05/03</td>
                          <td>$163,500</td>
                          <td>
                            <div className="badge badge-info badge-pill">
                              Contract
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Sakura Yamamoto</td>
                          <td>Support Engineer</td>
                          <td>Tokyo</td>
                          <td>37</td>
                          <td>2009/08/19</td>
                          <td>$139,575</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Thor Walton</td>
                          <td>Developer</td>
                          <td>New York</td>
                          <td>61</td>
                          <td>2013/08/11</td>
                          <td>$98,540</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Finn Camacho</td>
                          <td>Support Engineer</td>
                          <td>San Francisco</td>
                          <td>47</td>
                          <td>2009/07/07</td>
                          <td>$87,500</td>
                          <td>
                            <div className="badge badge-info badge-pill">
                              Contract
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Serge Baldwin</td>
                          <td>Data Coordinator</td>
                          <td>Singapore</td>
                          <td>64</td>
                          <td>2012/04/09</td>
                          <td>$138,575</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Zenaida Frank</td>
                          <td>Software Engineer</td>
                          <td>New York</td>
                          <td>63</td>
                          <td>2010/01/04</td>
                          <td>$125,250</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Zorita Serrano</td>
                          <td>Software Engineer</td>
                          <td>San Francisco</td>
                          <td>56</td>
                          <td>2012/06/01</td>
                          <td>$115,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jennifer Acosta</td>
                          <td>Junior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>43</td>
                          <td>2013/02/01</td>
                          <td>$75,650</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Cara Stevens</td>
                          <td>Sales Assistant</td>
                          <td>New York</td>
                          <td>46</td>
                          <td>2011/12/06</td>
                          <td>$145,600</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Hermione Butler</td>
                          <td>Regional Director</td>
                          <td>London</td>
                          <td>47</td>
                          <td>2011/03/21</td>
                          <td>$356,250</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Lael Greer</td>
                          <td>Systems Administrator</td>
                          <td>London</td>
                          <td>21</td>
                          <td>2009/02/27</td>
                          <td>$103,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Jonas Alexander</td>
                          <td>Developer</td>
                          <td>San Francisco</td>
                          <td>30</td>
                          <td>2010/07/14</td>
                          <td>$86,500</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Shad Decker</td>
                          <td>Regional Director</td>
                          <td>Edinburgh</td>
                          <td>51</td>
                          <td>2008/11/13</td>
                          <td>$183,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Michael Bruce</td>
                          <td>Javascript Developer</td>
                          <td>Singapore</td>
                          <td>29</td>
                          <td>2011/06/27</td>
                          <td>$183,000</td>
                          <td>
                            <div className="badge badge-primary badge-pill">
                              Full-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Donna Snider</td>
                          <td>Customer Support</td>
                          <td>New York</td>
                          <td>27</td>
                          <td>2011/01/25</td>
                          <td>$112,000</td>
                          <td>
                            <div className="badge badge-secondary badge-pill">
                              Part-time
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2">
                              <i data-feather="more-vertical" />
                            </button>
                            <button className="btn btn-datatable btn-icon btn-transparent-dark">
                              <i data-feather="trash-2" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer mt-auto footer-light">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 small">
                  Copyright © Your Website 2021
                </div>
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

export default App
