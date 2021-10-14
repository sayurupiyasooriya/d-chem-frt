import React, { useEffect, useState } from 'react'

// import components
import CourseService from '../../services/course.service';
import FieldService from '../../services/field.service'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap'
import CourseModal from './MasterModal';
import axios from 'axios';


const { REACT_APP_API_URL } = process.env;

const { getCourses, getCourseImg } = CourseService;
const { getFieldSelect } = FieldService



const CourseMaster = () => {


    //state hooks
    const [CourseData, setCourseData] = useState([]);
    const [FieldData, setFieldData] = useState([]);
    const [selectionModel, setSelectionModel] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [NewCourse, setNewCourse] = useState({
        name: '',
        field: ''
    })


    // initial data fetch and display
    useEffect(() => {
        fetchCourseData()
        fetchFieldData()
    }, [])

    const fetchCourseData = async () => {
        getCourses().then(e => {
            setCourseData(e.data)
        })
    }

    const fetchFieldData = async () => {
        getFieldSelect().then(e => {
            setFieldData(e.data)
        })
    }



    // handle form field data changes
    const handleChange = (e) => {
        const data = { ...NewCourse }
        data[e.id] = e.val

        setNewCourse({
            ...data
        })
    }

    const handleSelect = (e) => {
        const data = { ...NewCourse }
        data['field'] = e
        setCourseData({
            data
        })
        console.log(NewCourse)
    }

    // handle form submit
    const handleSubmit = (e) => {

    }


    const createCourse = (e) => {
        e.preventDefault()
        let formData = new FormData()

        for (let key in NewCourse) {
            formData.append(key, NewCourse[key])
        }
        axios({
            method: 'post',
            url: REACT_APP_API_URL + 'course/create',
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
    console.log(NewCourse)
    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
            >
                Add New
            </Button>
            <CourseModal
                showModal={showModal}
                NewCourse={NewCourse}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                createCourse={createCourse}
                handleSelect={handleSelect}
                modalName='Course'
                fieldData={FieldData}
            />

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={CourseData}
                    getRowId={(row) => row._id}
                    columns={columns}
                    pageSize={5}
                    checkboxSelectiondisable={true}
                    MultipleSelection={false}
                    disableSelectionOnClick={false}
                    onSelectionModelChange={(newSelection) => {
                        CourseData.forEach((item) => {
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

export default CourseMaster
