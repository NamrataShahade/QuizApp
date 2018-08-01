import axios from 'axios';

const FETCH_JD_ROOT_URL = '/api/job/v1/jobs';

export const fetchListOfJds = (token) => axios.get(
    `${FETCH_JD_ROOT_URL}`, { headers: { "Authorization": `Bearer ${token}` } }
);