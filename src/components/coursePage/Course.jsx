import React, { useState, useContext } from 'react'
import Card from './Card';
import CourseService from '../../services/course.service'
import { FieldContext } from '../../context/FieldContext';
import './card.scss'
import CardVideo from './CardVideo';
import CourseModal from './CourseModal'




const Course = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [course, setCourse] = useContext(FieldContext);
    const [showModal, setShowModal] = useState(false);
    const [modalName, setModalName] = useState('');
    const [video, setVideo] = useState({
        video: ''
    })
    const [material, setMaterial] = useState({
        material: ''
    })

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleChange = (e) => {
        if (modalName === 'Video') {
            console.log(props.courseId)
            setVideo({
                video: e.file
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        CourseService.uploadVideo(video, course)
        console.log(video)
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
                        <CardVideo courseId={course} />
                        <div className="card col-sm-3">
                            test
                        </div>
                        <div className="card col-sm-3">
                            test
                        </div>

                    </div>
                </div>


                <div className="resources">
                    <h3 >Resources</h3>
                    <div className="row">
                        <div className="card col-sm-3">
                            test
                        </div>
                        <div className="card col-sm-3">
                            test
                        </div>
                        <div className="card col-sm-3">
                            test
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Course