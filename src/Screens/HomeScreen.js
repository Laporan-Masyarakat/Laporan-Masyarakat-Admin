import React from 'react'

function DashboardScreen() {
  return (
    <>
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div className="container">
          <div className="page-header-content pt-4">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto mt-4">
                <h1 className="page-header-title">
                  <div className="page-header-icon">
                    <i data-feather="activity" />
                  </div>
                  Dashboard Admin
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main page content*/}
      <div className="container mt-n10">
        {/* Example Colored Cards for Dashboard Demo*/}
        <div className="row">
          <div className="col-xxl-3 col-lg-6">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mr-3">
                    <div className="text-black-75 small">
                      Laporan Masyarakat
                    </div>
                    <div className="text-lg font-weight-bold">40,000</div>
                  </div>
                  <i
                    className="feather-xl text-primary"
                    data-feather="book-open"
                  />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-black stretched-link" href="#">
                  Lihat Laporan
                </a>
                <div className="small text-black">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-6">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mr-3">
                    <div className="text-black-75 small">Data Masyarakat</div>
                    <div className="text-lg font-weight-bold">10,000</div>
                  </div>
                  <i className="feather-xl text-warning" data-feather="users" />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-black stretched-link" href="#">
                  Lihat Data Masyarakat
                </a>
                <div className="small text-black">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-6">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mr-3">
                    <div className="text-black-75 small">Laporan Selesai</div>
                    <div className="text-lg font-weight-bold">24</div>
                  </div>
                  <i
                    className="feather-xl text-success"
                    data-feather="check-square"
                  />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-black stretched-link" href="#">
                  Lihat Laporan
                </a>
                <div className="small text-black">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-6">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mr-3">
                    <div className="text-black-75 small">
                      Laporan Belum Selesai
                    </div>
                    <div className="text-lg font-weight-bold">17</div>
                  </div>
                  <i
                    className="feather-xl text-danger"
                    data-feather="alert-triangle"
                  />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-black stretched-link" href="#">
                  Lihat Laporan
                </a>
                <div className="small text-black">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardScreen
