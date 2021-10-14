import axios from "axios";
import authHeader from "./auth.headers";

const { REACT_APP_API_URL } = process.env;

class FieldService {
    getFields() {
        return axios.get(REACT_APP_API_URL + 'field')
    }

    // getFieldImage(courseData) {
    //     return axios.get(REACT_APP_API_URL + 'fieldImage/' + fielddata)

    // }

    getFieldSelect() {
        return axios.get(REACT_APP_API_URL + 'field/fieldSelect')
    }
}

export default new FieldService()