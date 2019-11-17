import axios from "axios";

const devApi = axios.create({
  baseURL: 'http://www.mocky.io/v2/',
  headers: { 'Content-Type':'application/json' }
})

export const getRequest = async (url, callback) => {
  try {
    const res = await devApi.get(url);

    if(Number(res.data.code) == 400 ) alert("Error")
    if(res.data) {
      callback(res.data)
    }
  }
  catch(error) {
    console.log("Error", error)
  }
}