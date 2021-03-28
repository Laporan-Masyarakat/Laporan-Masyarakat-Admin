import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'
import MySwal from 'sweetalert2/src/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'

function TanggapanScreen() {
  const API_URL = `http://localhost:8000/`
  const Swal = withReactContent(MySwal)
  const [tableTanggapan, setTableTanggapan] = useState('')

  // Setting the data table
  const datatableTanggapan = (tanggapan) => {
    let rowsData = []

    for (var index = 0; index < tanggapan.length; index++) {
      let rowItem = {}
      rowItem['no'] = index + 1
      rowItem['judul_laporan'] = tanggapan[index].id_pengaduan[0].judul_laporan
      rowItem['isi_tanggapan'] = tanggapan[index].isi_tanggapan
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
              <a className="dropdown-item" href="#!">
                <div className="dropdown-item-icon">
                  <i className="fas fa-trash-alt text-gray-500"></i>
                </div>
                Hapus Tanggapan
              </a>
            </div>
          </div>
        </>
      )
      rowsData.push(rowItem)
    }
    setTableTanggapan(rowsData)
  }

  //   fetch laporan data
  const fetchTanggapan = async () => {
    try {
      const data = await fetch(`${API_URL}api/gettanggapan`, {
        method: 'GET',
      })
      const tanggapandata = await data.json()
      datatableTanggapan(tanggapandata.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    fetchTanggapan()
  }, [])

  // data tanggapan
  const dataTanggapan = (data) => {
    return {
      columns: [
        {
          label: 'No',
          field: 'no',
          sort: 'asc',
        },
        {
          label: 'Judul Laporan',
          field: 'judul_laporan',
          sort: 'asc',
        },
        {
          label: 'Isi Tanggapan',
          field: 'isi_tanggapan',
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

  return (
    <>
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div className="container">
          <div className="page-header-content pt-4">
            <ol className="breadcrumb mb-0 mt-4">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Tanggapan Laporan</li>
            </ol>
          </div>
        </div>
      </header>
      {/* Main page content*/}
      <div className="container mt-n10">
        <div className="card">
          <div className="card-header">Table Tanggapan Laporan</div>
          <div className="card-body">
            <MDBDataTable
              sortable={true}
              noBottomColumns={true}
              striped
              data={dataTanggapan(tableTanggapan)}
              responsive={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TanggapanScreen
