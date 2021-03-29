import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'
import CountUp from 'react-countup'
import MySwal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function DashboardScreen() {
  const API_URL = `http://localhost:8000/`
  const Swal = withReactContent(MySwal)
  const [loading, setLoading] = useState(false)
  const [tableLaporan, setTableLaporan] = useState('')
  const [totallaporan, setTotalLaporan] = useState(0)
  const [totalmasyarakat, setTotalMasyarakat] = useState(0)
  const [totalselesai, setTotalSelesai] = useState(0)
  const [totalbelumselesai, setTotalBelum] = useState(0)

  // Setting the data table
  const datatableLaporan = (laporan) => {
    let rowsData = []

    for (var index = 0; index < laporan.length; index++) {
      let rowItem = {}
      rowItem['no'] = index + 1
      rowItem['judul_laporan'] = laporan[index].judul_laporan
      rowItem['isi_laporan'] = laporan[index].isi_laporan
      rowItem['tgl_pengaduan'] = laporan[index].tgl_pengaduan
      rowItem['lokasi_kejadian'] = laporan[index].lokasi_kejadian
      rowItem['instansi_tujuan'] = laporan[index].instansi_tujuan
      rowItem['kategori_laporan'] =
        laporan[index].laporankategori[0].kategori_laporan
      rowItem['foto_laporan'] = (
        <img
          style={{ width: '200px', height: '150px', borderRadius: '5px' }}
          src={laporan[index].foto_laporan}
          alt="tidak ada gambar"
        />
      )
      let status = laporan[index].statuslaporan[0].status
      switch (status) {
        case 'Belum Diproses':
          rowItem['status'] = (
            <div class="badge badge-danger badge-pill">
              {laporan[index].statuslaporan[0].status}
            </div>
          )
          break

        case 'Diproses':
          rowItem['status'] = (
            <div class="badge badge-warning badge-pill">
              {laporan[index].statuslaporan[0].status}
            </div>
          )
          break

        case 'Selesai':
          rowItem['status'] = (
            <div class="badge badge-success badge-pill">
              {laporan[index].statuslaporan[0].status}
            </div>
          )
          break

        default:
          rowItem['status'] = (
            <div class="badge badge-danger badge-pill">Tidak Ada Status</div>
          )
          break
      }
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
              <a
                className="dropdown-item"
                href="#!"
                data-toggle="modal"
                data-target="#verifModal"
                id={laporan[index].id}
              >
                <div className="dropdown-item-icon">
                  <i className="fas fa-pen-nib text-gray-500"></i>
                </div>
                Verifikasi Laporan
              </a>
              <a
                className="dropdown-item"
                href="#!"
                data-toggle="modal"
                data-target="#tanggapanModal"
                id={laporan[index].id}
              >
                <div className="dropdown-item-icon">
                  <i className="far fa-edit text-gray-500"></i>
                </div>
                Berikan Tanggapan
              </a>
            </div>
          </div>
        </>
      )
      rowsData.push(rowItem)
    }
    setTableLaporan(rowsData)
  }

  //   fetch laporan data
  const fetchLaporanData = async () => {
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

  const fetchLaporan = async () => {
    try {
      const data = await fetch(`${API_URL}api/getlaporan`, {
        method: 'GET',
      })
      const result = await data.json()
      setTotalLaporan(result.result.length)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  const fetchUser = async () => {
    try {
      const data = await fetch(`${API_URL}api/getmasyarakat`, {
        method: 'GET',
      })
      const result = await data.json()
      setTotalMasyarakat(result.result.length)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  const fetchSelesai = async () => {
    try {
      const data = await fetch(`${API_URL}api/getlaporanselesai`, {
        method: 'GET',
      })
      const result = await data.json()
      setTotalSelesai(result.result.length)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  const fetchBelum = async () => {
    try {
      const data = await fetch(`${API_URL}api/getlaporanbelum`, {
        method: 'GET',
      })
      const result = await data.json()
      setTotalBelum(result.result.length)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    fetchLaporanData().then(() => {
      fetchLaporan().then(() => {
        fetchUser().then(() => {
          fetchSelesai().then(() => {
            fetchBelum()
          })
        })
      })
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
          label: 'Judul Laporan',
          field: 'judul_laporan',
          sort: 'asc',
        },
        {
          label: 'Isi Laporan',
          field: 'isi_laporan',
          sort: 'asc',
        },
        {
          label: 'Tanggal Pengaduan',
          field: 'tgl_pengaduan',
          sort: 'asc',
        },
        {
          label: 'Lokasi Kejadian',
          field: 'lokasi_kejadian',
          sort: 'asc',
        },
        {
          label: 'Instansi Tujuan',
          field: 'instansi_tujuan',
          sort: 'asc',
        },
        {
          label: 'Kategori Laporan',
          field: 'kategori_laporan',
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
      ],
      rows: data,
    }
  }

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
                  Dashboard Lapor Masyarakat
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
                    <div className="text-lg font-weight-bold">
                      <CountUp end={totallaporan} />
                    </div>
                  </div>
                  <i
                    className="feather-xl text-primary"
                    data-feather="book-open"
                  />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-black stretched-link"
                  href="/laporanmasyarakat"
                >
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
                    <div className="text-lg font-weight-bold">
                      <CountUp end={totalmasyarakat} />
                    </div>
                  </div>
                  <i className="feather-xl text-warning" data-feather="users" />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-black stretched-link" href="/user">
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
                    <div className="text-lg font-weight-bold">
                      <CountUp end={totalselesai} />
                    </div>
                  </div>
                  <i
                    className="feather-xl text-success"
                    data-feather="check-square"
                  />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-black stretched-link"
                  href="/laporanmasyarakat"
                >
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
                    <div className="text-lg font-weight-bold">
                      <CountUp end={totalbelumselesai} />
                    </div>
                  </div>
                  <i
                    className="feather-xl text-danger"
                    data-feather="alert-triangle"
                  />
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-black stretched-link"
                  href="/laporanmasyarakat"
                >
                  Lihat Laporan
                </a>
                <div className="small text-black">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Example DataTable for Dashboard Demo*/}
        <div className="card mb-4">
          <div className="card-header">Data Laporan</div>
          <div className="card-body">
            <MDBDataTable
              sortable={true}
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

export default DashboardScreen
