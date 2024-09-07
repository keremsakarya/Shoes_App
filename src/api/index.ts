import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3050",
})

//* bütün ayakkabıları al
export const getShoes = (params: string) => api.get(`/shoes${params}`)
    .then((res) => res.data)

//* bir ayakkabıyı al
export const getShoe = (id: string) =>
    api.get(`/shoes/${id}`).then((res) => res.data)