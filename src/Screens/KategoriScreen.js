import React from 'react'

function KategoriScreen() {
  return (
    <>
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div className="container">
          <div className="page-header-content pt-4">
            <ol className="breadcrumb mb-0 mt-4">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Kategori Laporan</li>
            </ol>
          </div>
        </div>
      </header>
      {/* Main page content*/}
      <div className="container mt-n10">
        <div className="card">
          <div className="card-header">Table Kategori Laporan</div>
          <div className="card-body">
            {/* <MDBDataTable
              sortable={true}
              noBottomColumns={true}
              striped
              data={dataTanggapan(tableTanggapan)}
              responsive={true}
            /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default KategoriScreen
