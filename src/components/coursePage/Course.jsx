import React, { useState, useContext } from 'react'
import Card from './Card';
import CourseService from '../../services/course.service'
import { FieldContext } from '../../context/FieldContext';
import './card.scss'
import CardVideo from './CardVideo';




const Course = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [course, setCourse] = useContext(FieldContext);


    return (
        <div>

            <div className="container">
                <div className="top-buttons">
                    <a className="btn btn-primary" >Add Video</a>
                    <a className="btn btn-primary" >Add Materials</a>
                </div>

                <h3 >Lessons</h3>
                <div className="video">
                    <div className="row">
                        <CardVideo courseId={props.courseId} />
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
        </div>
    )
}

export default Course