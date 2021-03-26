import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'
import MySwal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LaporanScreen() {
  const API_URL = `http://localhost:8000/`
  const Swal = withReactContent(MySwal)
  const [tableLaporan, setTableLaporan] = useState('')
  const [loading, setLoading] = useState(false)

  // Setting the data table
  const datatableLaporan = (laporan) => {
    let rowsData = []

    for (var index = 0; index < laporan.length; index++) {
      let rowItem = {}
      rowItem['no'] = index + 1
      rowItem['nik'] = laporan[index].nik
      rowItem['tgl_pengaduan'] = laporan[index].tgl_pengaduan
      rowItem['isi_laporan'] = laporan[index].isi_laporan
      rowItem['foto_laporan'] = (
        <img
          style={{ width: '200px', height: '150px', borderRadius: '5px' }}
          src={laporan[index].foto_laporan}
          alt="tidak ada gambar"
        />
      )
      rowItem['status'] = (
        <div class="badge badge-success badge-pill">
          {laporan[index].status}
        </div>
      )
      rowItem['action'] = (
        <>
          <button
            class="btn btn-datatable btn-icon btn-transparent-dark"
            id={laporan[index].id}
          >
            <i className="fas fa-ellipsis-v" />
          </button>
          <button
            class="btn btn-datatable btn-icon btn-transparent-dark mr-2"
            id={laporan[index].id}
          >
            <i className="far fa-trash-alt" />
          </button>
        </>
      )
      rowsData.push(rowItem)
    }
    setTableLaporan(rowsData)
  }

  //   fetch laporan data
  const fetchLaporan = async () => {
    try {
      const data = await fetch(`${API_URL}api/getlaporan`, {
        method: 'GET',
      })
      const laporandata = await data.json()
      datatableLaporan(laporandata.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  //   running the state
  useEffect(() => {
    fetchLaporan().then(() => {
      setLoading(true)
    })
  }, [])

  // data laporan
  const dataLaporan = (data) => {
    return {
      columns: [
        {
          label: 'No',
          field: 'no',
          sort: 'asc',
        },
        {
          label: 'NIK',
          field: 'nik',
          sort: 'asc',
        },
        {
          label: 'Tanggal Pengaduan',
          field: 'tgl_pengaduan',
          sort: 'asc',
        },
        {
          label: 'Isi Laporan',
          field: 'isi_laporan',
          sort: 'asc',
        },
        {
          label: 'Foto Laporan',
          field: 'foto_laporan',
          sort: 'asc',
        },
        {
          label: 'Status',
          field: 'status',
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
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Laporan Masuk</li>
            </ol>
          </div>
        </div>
      </header>
      {/* Main page content*/}
      <div className="container mt-n10">
        <div className="card">
          <div className="card-header">Table Laporan Masuk</div>
          <div className="card-body">
            <MDBDataTable
              sortable={false}
              noBottomColumns={true}
              striped
              data={dataLaporan(tableLaporan)}
              responsive={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LaporanScreen
