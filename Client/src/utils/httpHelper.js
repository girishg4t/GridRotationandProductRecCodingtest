
const axios = require('axios');
const url = "http://localhost:8000"

export default class httpHelper {
    static post(api, data) {
        console.log(`httpHelper.post: POST request made`);
        return axios({
            method: 'post',
            url: url + "/" + api,
            data
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
}