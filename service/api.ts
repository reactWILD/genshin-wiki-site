import axios from "axios"

const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : process.env.NEXT_PUBLIC_API_URL

const api = axios.create({
  baseURL: apiUrl,
})

export default api
