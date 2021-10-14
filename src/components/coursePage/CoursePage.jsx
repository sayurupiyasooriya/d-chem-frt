import React, { useState, useContext } from 'react'
import Card from './Card';
import CourseService from '../../services/course.service'
import { FieldContext } from '../../context/FieldContext';

const { getCourses, getCourseImg, getCourseByFieldId } = CourseService;
const CoursePage = (props) => {
    const [courseData, setCourseData] = useState([]);
    const [fieldName, setFieldName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [field, setField] = useContext(FieldContext);

    const fetchCoursedData = async () => {
        getCourseByFieldId(field).then(e => {
            setCourseData(e.data)
            setIsLoading(false)
        })
    }
    fetchCoursedData()


    return (
        <div>
            <div className="row">
                {isLoading ? <div>loading</div> :
                    courseData.map((course, i) => {
                        return (<Card key={course._id} courseData={course} />)
                    })
                }

            </div>
        </div>
    )
}

export default CoursePage