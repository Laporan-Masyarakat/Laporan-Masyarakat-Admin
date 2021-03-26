import React, { useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'
import MySwal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function LaporanScreen() {
  const API_URL = `http://localhost:8000/`
  const Swal = withReactContent(MySwal)
  const [statusdata, setStatusData] = useState('')
  const [tableLaporan, setTableLaporan] = useState('')
  const [judulLaporan, setJudulLaporan] = useState('')
  const [isiLaporan, setIsiLaporan] = useState('')
  const [tgllaporan, setTglLaporan] = useState('')
  const [lokasiKejadian, setLokasiKejadian] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  // get data to verification
  const getIdLaporan = async (e) => {
    try {
      const data = await fetch(
        `${API_URL}api/getIdLaporan/${e.currentTarget.id}`,
        {
          method: 'GET',
        },
      )
      const result = await data.json()
      setJudulLaporan(result.data[0].judul_laporan)
      setIsiLaporan(result.data[0].isi_laporan)
      setTglLaporan(result.data[0].tgl_pengaduan)
      setLokasiKejadian(result.data[0].lokasi_kejadian)
      setStatus(result.data[0].status[0].id)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

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
      rowItem['foto_laporan'] = (
        <img
          style={{ width: '200px', height: '150px', borderRadius: '5px' }}
          src={laporan[index].foto_laporan}
          alt="tidak ada gambar"
        />
      )
      let status = laporan[index].status[0].status
      switch (status) {
        case 'Belum Diproses':
          rowItem['status'] = (
            <div class="badge badge-danger badge-pill">
              {laporan[index].status[0].status}
            </div>
          )
          break

        case 'Diproses':
          rowItem['status'] = (
            <div class="badge badge-warning badge-pill">
              {laporan[index].status[0].status}
            </div>
          )
          break

        case 'Selesai':
          rowItem['status'] = (
            <div class="badge badge-success badge-pill">
              {laporan[index].status[0].status}
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
                onClick={(event) => getIdLaporan(event)}
              >
                <div className="dropdown-item-icon">
                  <i className="fas fa-pen-nib text-gray-500"></i>
                </div>
                Verifikasi Laporan
              </a>
              <a className="dropdown-item" href="#!">
                <div className="dropdown-item-icon">
                  <i className="far fa-edit text-gray-500"></i>
                </div>
                Berikan Tanggapan
              </a>
              <a className="dropdown-item" href="#!">
                <div className="dropdown-item-icon">
                  <i className="fas fa-trash-alt text-gray-500"></i>
                </div>
                Hapus Laporan
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

  // fetch status data
  const fetchStatus = async () => {
    try {
      const data = await fetch(`${API_URL}api/getstatus`, {
        method: 'GET',
      })
      const result = await data.json()
      setStatusData(result.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  //   running the state
  useEffect(() => {
    fetchLaporan()
      .then(() => {
        setLoading(true)
      })
      .then(() => {
        fetchStatus().then(() => {
          setLoading(true)
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
                <a href="/">Dashboard</a>
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
              sortable={true}
              noBottomColumns={true}
              striped
              data={dataLaporan(tableLaporan)}
              responsive={true}
            />
          </div>
        </div>
      </div>

      {/* verifikasi laporan */}
      <div className="modal fade" tabIndex={-1} id="verifModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Verifikasi Laporan</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Judul Laporan
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    value={judulLaporan}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Isi Laporan
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    value={isiLaporan}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Tanggal Kejadian
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    value={tgllaporan}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Lokasi Kejadian
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    value={lokasiKejadian}
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Status</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    value={status}
                  >
                    <option selected>Choose...</option>
                    {statusdata.length > 0 ? (
                      statusdata.map((item) => (
                        <option value={item.id}>{item.status}</option>
                      ))
                    ) : (
                      <option>No Option In Here!</option>
                    )}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LaporanScreen
