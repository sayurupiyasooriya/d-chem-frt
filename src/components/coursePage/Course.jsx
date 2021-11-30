import React, { useState, useContext, useEffect } from 'react'
import CourseService from '../../services/course.service'
import { FieldContext } from '../../context/FieldContext';
import './card.scss'
import CardVideo from './CardVideo';
import CourseModal from './CourseModal'
import base64 from 'base-64'



const Course = (props) => {


    // get course id from context api
    const [course] = useContext(FieldContext);

    //toggle modal
    const [showModal, setShowModal] = useState(false);

    //set modal name
    const [modalName, setModalName] = useState('');

    //upload video
    const [video, setVideo] = useState({
        video: ''
    })

    //upload material
    const [material, setMaterial] = useState({
        material: ''
    })

    const [courseVideo, setCourseVideo] = useState([])

    const [courseDoc, setCourseDoc] = useState([])

    const fetchCourseVideo = async () => {
        CourseService.getCourseVideo(course).then(e => {
            setCourseVideo(e.data[0].video)
        })
    }

    const fetchCourseDoc = async () => {

        CourseService.getCourseDocs(course).then(e => {
            setCourseDoc(e.data[0].doc)
            // console.log(e.data[0].doc)
        })
    }

    useEffect(() => {
        fetchCourseVideo()
        fetchCourseDoc()
    }, [])

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleChange = (e) => {
        if (modalName === 'Video') {
            setVideo({
                video: e.file
            })
        }
        if (modalName === 'Material') {
            setMaterial({
                material: e.file
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (modalName === 'Video') {
            await CourseService.uploadVideo(video, course)
        }
        if (modalName === 'Material') {
            await CourseService.uploadMaterial(material, course)
        }

    }
    return (
        <div>

            <div className="container">


                <CourseModal showModal={showModal} handleClose={handleClose} modalName={modalName} handleSubmit={handleSubmit} handleChange={handleChange} />


                <div className="top-buttons">
                    <a className="btn btn-primary" onClick={() => { handleShow(); setModalName('Video'); }}>Add Video</a>
                    <a className="btn btn-primary" onClick={() => { handleShow(); setModalName('Material'); }}>Add Materials</a>
                </div>

                <h3 >Lessons</h3>


                <div className="video">
                    <div className="row">
                        {courseVideo.map((videos, i) => {
                            return (<CardVideo videoId={videos._id} />)
                        })}

                    </div>
                </div>


                <div className="resources">
                    <h3 >Resources</h3>
                    {courseDoc.map((doc, i) => {
                        return (<a href={`http://localhost:3000/course/doc/download/${doc.docLocation}`}>
                            test
                        </a>)
                    })}

                </div>


            </div>
        </div >
    )
}

export default Course