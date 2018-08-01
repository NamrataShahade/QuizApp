import axios from 'axios';

const ROOT_URL = '/auth0/token?scope=admin&';
//const TOKEN = sessionStorage.getItem('auth_token');
//console.log('TOKEN:--', TOKEN);
//const tkn = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlEwRXdSVGRHUmtWRE16UXhOa1kwUWpCRVJEazRNMFpCTWpjNFJqSXdSa00wTlVGRU9EZ3hSUSJ9.eyJodHRwczovL2N1c3RvbS5jbGFpbXMvZW1haWwiOiJ6YWZhcm44QGdtYWlsLmNvbSIsImh0dHBzOi8vY3VzdG9tLmNsYWltcy9vcmciOiI1YWFhNDBjMjViODg3MDVlNzMyYWY4MDEiLCJodHRwczovL2N1c3RvbS5jbGFpbXMvcm9sZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6Ly9yZXpvb21leC1kZXYyMDE4LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWFhNDI1MzMwOTJmNTAzYTNkZGM2ODgiLCJhdWQiOiJodHRwczovL2dhdGV3YXkucmV6b29tZXgtZGV2LmNvbS8iLCJpYXQiOjE1MzI2MTUwMDksImV4cCI6MTUzMjcwMTQwOSwiYXpwIjoiYk5FOVdPZmsxSjdQbkZ0ZUduWmJpMFBvMVJaazBTRFQiLCJzY29wZSI6ImFkbWluIiwiZ3R5IjoicGFzc3dvcmQifQ.F5dEHjhh2tX5a9PcB_ibePGEAGrC1F7ueHRJXO5AukPVWS2mLibRM86LY3LDn4SJg2edi0UuTkjE13VL9bPKJlZroQyI_-ahGeh-lto8_5wQOae7ZyUH91My1N6Cc66QacF3HbPwpKMF7S5bYYobFGEVLiPx5vvjL9pe0YCIxoxGJ_uOjlJFrlziU7kw3MeSgGcmbzEGZIRDRWuJDndeWpObEY-LZshsXC7Qjuqv6OkVfq00X7B2XVvI4tyia64uK0KWmYcSgdrta2efYBtMMEVqRdp7fDLynHq9PxjNR0JJgSgvP3zgP34JuEnpIYwUExnK9r6JTveEwrYr6e3SPg';

const FETCH_TECH_URL = '/api/masterdata/v1/technologies/';

export const loginAction = (userName, password) => axios.post(
    `${ROOT_URL}username=${userName}&password=${password}`
);

export const fetchListOfTechnology = (token) => axios.get(
    `${FETCH_TECH_URL}`, { headers: { "Authorization": `Bearer ${token}` } }
);