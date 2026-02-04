import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

class HttpService {
    #url = '/board';

    async save(params) {        
        const res = await axios.post(this.#url, params);
        return res.data;
    }

    async findAll(params) {
        const res = await axios.get(this.#url, { params });
        return res.data;
    }

    async findById(id) {
        const res = await axios.get(`${this.#url}/${id}`);
        return res.data;
    }
}

export default new HttpService();