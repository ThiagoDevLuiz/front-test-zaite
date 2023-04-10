import axios from "axios";

const Api = axios.create({
  baseURL: "http://zaite.com.br/test/api/v1"
})

export default Api