import React, { useEffect, useState } from 'react'

// import components
import FieldService from '../../services/field.service';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap'
import FieldModal from './MasterModal';
import axios from 'axios';


const { REACT_APP_API_URL } = process.env;

const { getFields, getCourseImg } = FieldService;



const FieldMaster = () => {


  //state hooks
  const [FieldData, setFieldData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newField, setNewField] = useState({
    name: '',
    image: {}
  })


  // initial data fetch and display
  useEffect(() => {
    fetchFieldData()
  }, [])

  const fetchFieldData = async () => {
    getFields().then(e => {
      setFieldData(e.data)
    })
  }


  // handle form field data changes
  const handleChange = (e) => {
    const data = { ...newField }
    if (e.id !== 'image') {
      data[e.id] = e.val
    } else {
      data[e.id] = e.file
    }
    setNewField({
      ...data
    })
    console.log(newField)
  }

  // handle form submit
  const handleSubmit = (e) => {

  }


  const create = (e) => {
    e.preventDefault()
    let formData = new FormData()
    for (let key in newField) {
      formData.append(key, newField[key])
    }
    axios({
      method: 'post',
      url: REACT_APP_API_URL + 'field/create',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    }).then(data => {
      console.log(data)
    })

  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  const columns = [

    {
      field: 'name',
      headerName: 'Name',
      width: 500
    }
  ]



  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
      >
        Add New
      </Button>
      <FieldModal
        showModal={showModal}
        newField={newField}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        create={create}
        modalName='Field'
      />

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
