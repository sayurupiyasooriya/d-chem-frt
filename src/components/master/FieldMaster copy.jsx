import React, {useEffect, useState} from 'react'

// import components
import DataTable from 'react-data-table-component'
import FieldService from '../../services/field.service';
import { DataGrid } from '@mui/x-data-grid';

const {getFields, getCourseImg} = FieldService;


const FieldMaster = () => {
    const [FieldData, setFieldData] = useState([]);

    const columns = [
        {name:'Title', selector: row => row.name}
    ]

    const data = FieldData

    useEffect(()=>{
        fetchFieldData()
            }, [])

    const fetchFieldData = async()=>{
        getFields().then(e=>{
            setFieldData(e.data)
        })
    }
    return (
        <div>
            {/* <DataTable
            columns={columns}
            data={data}
            selectableRows
            /> */}
            <DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  checkboxSelection
  disableSelectionOnClick
/>
        </div>
    )
}

export default FieldMaster
