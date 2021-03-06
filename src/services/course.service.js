import axios from "axios";
import authHeader from "./auth.headers";

const {REACT_APP_API_URL} = process.env;

class CourseService {
    getCourses() {
        return axios.get(REACT_APP_API_URL + 'course')

    }

    getCourseImg(courseData) {
        return axios.get(REACT_APP_API_URL + 'courseImage/' + courseData)

    }

    getCourseByFieldId(fieldId) {
        return axios.get(REACT_APP_API_URL + 'course/field/' + fieldId)
    }

    getCourseVideo(courseId) {
        return axios.get(REACT_APP_API_URL + 'course/video/' + courseId)

    }

    uploadVideo(video, courseId) {
        let formData = new FormData()
        for (let key in video) {
            formData.append(key, video[key])
        }
        return axios(
            {
                method: 'POST',
                url: REACT_APP_API_URL + 'course/upload/video/' + courseId,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data : formData
            }
        )
    }


}

export default new CourseService()