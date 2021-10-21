import React, { useState, useEffect, useContext } from 'react'
import './card.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FieldContext } from '../../context/FieldContext';
import CourseService from '../../services/course.service';
import ReactPlayer from 'react-player/youtube'


const { REACT_APP_API_URL } = process.env;





function CardVideo(props) {

    const [courseVideo, setCourseVideo] = useState('')
    const [course, setCourse] = useContext(FieldContext);
    const fetchCourseVideo = async (e) => {
        CourseService.getCourseVideo(e).then(e => {
            courseVideo(e.data)
        })
    }
    useEffect(() => {
        fetchCourseVideo(props.coureId)
    }, [])


    return (
        <div className="card col-sm-3">
            {props.courseId}
            {
                course == '61664bbb9328fd461c4a0f82' ? <ReactPlayer url='https://www.youtube.com/watch?v=WzIXye6Nl10' />
                    : <ReactPlayer url='https://www.youtube.com/watch?v=zd8Yg7wRX7c' />
            }

        </div>

    )
}

export default CardVideo