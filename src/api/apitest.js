import Axios from "axios";

export default {
    testapi(params, succb, errcb) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(res => {
                succb(res);
            })
            .catch(err => {
                errcb(err);
            })
    }
}