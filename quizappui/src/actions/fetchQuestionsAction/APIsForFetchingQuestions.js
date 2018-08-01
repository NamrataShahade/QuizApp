import axios from 'axios';

const FETCH_QUESTION_ROOT_URL = '/api/question/v1/questions/_searchByQuizCriteria';

//const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlEwRXdSVGRHUmtWRE16UXhOa1kwUWpCRVJEazRNMFpCTWpjNFJqSXdSa00wTlVGRU9EZ3hSUSJ9.eyJodHRwczovL2N1c3RvbS5jbGFpbXMvZW1haWwiOiJ6YWZhcm44QGdtYWlsLmNvbSIsImh0dHBzOi8vY3VzdG9tLmNsYWltcy9vcmciOiI1YWFhNDBjMjViODg3MDVlNzMyYWY4MDEiLCJodHRwczovL2N1c3RvbS5jbGFpbXMvcm9sZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6Ly9yZXpvb21leC1kZXYyMDE4LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWFhNDI1MzMwOTJmNTAzYTNkZGM2ODgiLCJhdWQiOiJodHRwczovL2dhdGV3YXkucmV6b29tZXgtZGV2LmNvbS8iLCJpYXQiOjE1MzI2OTY2MjMsImV4cCI6MTUzMjc4MzAyMywiYXpwIjoiYk5FOVdPZmsxSjdQbkZ0ZUduWmJpMFBvMVJaazBTRFQiLCJzY29wZSI6ImFkbWluIiwiZ3R5IjoicGFzc3dvcmQifQ.GUBTT1SlwoKt4rrHqE2v2lDN2zpSXto1dS1_LZH8lnTBI33giKffjnbRVgAhDoejKyi2QQM-KKPGU5h40g96m2Aee3hLHvhwa1c-XQHthtQ6UUQpN_DIK8qJ7mtoQV98tJNQOo-_gkEGNCHxGxiMnfATc-68VFh2ZIwVVO5T0WuhNFucQ8V2gH6odXsU0Mn4kd1KIfatWbt_7vhxYOGiWvkoPlZ7GIk57NR1NRQbtMpkt65tFKwuYT5vo8oWQLqV-unAhVxl6dlaCbmbd66zmC_2hSqEMwGVTEsTA9Pe3e02p10Ol2_WB-YtZkR1VVDBSThQj8IjzjW-TXQhXKzSWQ';
var token = sessionStorage.getItem('auth_token');
// var headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
// }
//console.log('tokn in api..', token);
export const fetchQestionApiMethod = (questionsObj) => axios.post(
    `${FETCH_QUESTION_ROOT_URL}`, questionsObj, { headers: { "Authorization": `Bearer ${token}`, 'Content-Type': 'application/json' } }
);