import axios from "axios";
import authHeader from "./auth.headers";

const API_URL = 'http://localhost:3000/';

class PostService {
    getPublicContent() {
        return axios.get(API_URL + 'post', { headers: authHeader });
    }


}

export default new PostService()