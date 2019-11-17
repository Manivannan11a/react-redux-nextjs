import { getRequest } from '../../service/api';

export const getConfig = () => {
  return (dispatch) => {
    const processResponse = (res) => {
      debugger;
      dispatch({type:"GET_CONFIG", payload: res.data})
    }
    getRequest('5dcea5ff3000004e00931bb7')
  }
  return null;
}