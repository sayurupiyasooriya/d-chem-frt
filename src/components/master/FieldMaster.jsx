import React, { useEffect, useState } from 'react'

// import components
import FieldService from '../../services/field.service';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap'
import FieldModal from './FieldModal';

const { getFields, getCourseImg } = FieldService;



const FieldMaster = () => {


  //state hooks
  const [FieldData, setFieldData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const columns = [

    {
      field: 'name',
      headerName: 'Name',
      width: 500
    }
  ]


  useEffect(() => {
    fetchFieldData()
  }, [])


  const fetchFieldData = async () => {
    getFields().then(e => {
      setFieldData(e.data)
    })
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
      >
        Add New
      </Button>
      <FieldModal methods={handleClose} stat={showModal} />

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={FieldData}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={5}
          checkboxSelectiondisable={true}
          MultipleSelection={false}
          disableSelectionOnClick={false}
          onSelectionModelChange={(newSelection) => {
            FieldData.forEach((item) => {
              if (item._id == newSelection) {
                setSelectionModel(item)
              }
            })
          }
          }

        />
      </div>
    </>

  )
}

export default FieldMaster
