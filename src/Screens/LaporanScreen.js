import React from 'react'

function LaporanScreen() {
  return (
    <>
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div className="container">
          <div className="page-header-content pt-4">
            <ol className="breadcrumb mb-0 mt-4">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Laporan Masuk</li>
            </ol>
          </div>
        </div>
      </header>
      {/* Main page content*/}
      <div className="container mt-n10">
        <div className="card card-header-actions">
          <div className="card-header">
            Table Laporan Masuk
            <div class="dropdown no-caret">
              <button
                class="btn btn-transparent-dark btn-icon dropdown-toggle"
                id="dropdownMenuButton"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="text-gray-500" data-feather="more-vertical"></i>
              </button>
              <div
                class="dropdown-menu dropdown-menu-right animated--fade-in-up"
                aria-labelledby="dropdownMenuButton"
              >
                <a class="dropdown-item" href="#!">
                  <div class="dropdown-item-icon">
                    <i class="text-gray-500" data-feather="plus-circle"></i>
                  </div>
                  Add New Task
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            The Bootstrap breadcrumbs component is supported within the page
            header for the SB Admin Pro theme. The page header on this page is
            an example of a page with breadcrumbs added!
          </div>
        </div>
      </div>
    </>
  )
}

export default LaporanScreen
