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
  const [instansi, setInstansi] = useState('')
  const [kategori, setKategori] = useState('')
  const [datainstansi, setDataInstansi] = useState('')
  const [datakategori, setDataKategori] = useState('')
  const [loading, setLoading] = useState(false)
  const [idlaporan, setIdLaporan] = useState(1)
  const [id, setId] = useState(1)

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
      setInstansi(result.data[0].instansi_tujuan)
      setKategori(result.data[0].kategori_laporan)
      setIdLaporan(result.data[0].id)
      setId(result.data[0].id_user)
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
      rowItem['instansi_tujuan'] = laporan[index].instansi_tujuan
      rowItem['kategori_laporan'] =
        laporan[index].kategori_laporan[0].kategori_laporan
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
              <a
                className="dropdown-item"
                href="#!"
                data-toggle="modal"
                data-target="#tanggapanModal"
                id={laporan[index].id}
                onClick={(event) => getIdLaporan(event)}
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

  // fetch data instansi
  const fetchInstansi = async () => {
    try {
      const data = await fetch(`${API_URL}api/getinstansi`, {
        method: 'GET',
      })
      const result = await data.json()
      setDataInstansi(result.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  // fetch data kategori
  const fetchKategori = async () => {
    try {
      const data = await fetch(`${API_URL}api/getkategori`, {
        method: 'GET',
      })
      const result = await data.json()
      setDataKategori(result.result)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  // update status
  const updateStatus = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {
      const data = await fetch(`${API_URL}api/editstatus/${idlaporan}`, {
        method: 'POST',
        body: formData,
      })
      const result = await data.json()
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Memvalidasi Data Laporan',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
        }).then(() => {
          fetchLaporan()
          document.getElementById('formEdit').reset()
          window.$('#verifModal').modal('hide')
        })
      }
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  // running the state
  useEffect(() => {
    fetchLaporan()
      .then(() => {
        setLoading(true)
      })
      .then(() => {
        fetchStatus()
      })
      .then(() => {
        fetchInstansi()
      })
      .then(() => {
        fetchKategori()
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
        {
          label: 'Action',
          field: 'action',
          sort: 'asc',
        },
      ],
      rows: data,
    }
  }

  const submitTanggapan = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      const data = await fetch(`${API_URL}api/createtanggapan`, {
        method: 'POST',
        body: formData,
      })
      const result = await data.json()
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Mengirim Tanggapan',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
        }).then(() => {
          fetchLaporan()
          document.getElementById('tanggapanForm').reset()
          window.$('#tanggapanModal').modal('hide')
        })
      }
    } catch (error) {
      console.log(error)
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
            <form onSubmit={(e) => updateStatus(e)} id="formEdit">
              <div className="modal-body">
                <div className="form-group">
                  <label>
                    <b>Judul Laporan</b>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    value={judulLaporan}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Isi Laporan</b>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    value={isiLaporan}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Tanggal Kejadian</b>
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
                  <label>
                    <b>Lokasi Kejadian</b>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Masukkan Judul Laporan"
                    value={lokasiKejadian}
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label>
                    <b>Status</b>
                  </label>
                  <select
                    class="form-control"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
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
                <div className="form-group">
                  <label>
                    <b>Instansi Tujuan</b>
                  </label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect2"
                    value={instansi}
                    disabled
                  >
                    <option selected>Choose...</option>
                    {datainstansi.length > 0 ? (
                      datainstansi.map((item) => (
                        <option value={item.data_instansi}>
                          {item.data_instansi}
                        </option>
                      ))
                    ) : (
                      <option>No Option Here!</option>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>Kategori Laporan</b>
                  </label>
                  <select class="form-control" value={kategori} disabled>
                    <option selected>Choose...</option>
                    {datakategori.length > 0 ? (
                      datakategori.map((item) => (
                        <option value={item.id}>{item.kategori_laporan}</option>
                      ))
                    ) : (
                      <option>No Option Here!</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Edit Laporan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* tanggapan laporan */}
      <div className="modal fade" tabIndex={-1} id="tanggapanModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Tanggapi Laporan</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={(e) => submitTanggapan(e)} id="tanggapanForm">
              <div className="modal-body">
                <input
                  className="form-control"
                  value={id}
                  type="hidden"
                  name="id_user"
                />
                <input
                  className="form-control"
                  value={idlaporan}
                  name="id_pengaduan"
                  type="hidden"
                />
                <div className="form-group">
                  <label>
                    <b>Isi Tanggapan</b>
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Masukkan Isi Tanggapan"
                    name="isi_tanggapan"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan Tanggapan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LaporanScreen
