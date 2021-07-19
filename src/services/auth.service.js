import axios from "axios";

const API_URL = "http://localhost:3000/user/"

class AuthService {
    login(userEmail, password) {
        console.log(userEmail, password)
        return axios
            .post(API_URL + "login", {
                email: userEmail,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                return response.data
            })
    }

    logout() {
        localStorage.removeItem("user")
    }

    register(firstName, lastName, email, password,) {

        return axios
            .post(API_URL + "create", {
                firstName,
                lastName,
                email,
                password
            })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"))
    }
}

export default new AuthService()