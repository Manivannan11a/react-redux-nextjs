import axios from "axios";

const devApi = axios.create({
  baseURL: process.env.API_HOST
})
debugger;

export const getRequest = async (url, callback) => {
  try {
    const res = await devApi.get(url);

    if(Number(res.data.code) == 400 ) alert("Error")
    if(res.data.sucessResponse) {
      callback(res.data.data)
    }
  }
  catch(error) {
    console.log("Error", error)
  }
}