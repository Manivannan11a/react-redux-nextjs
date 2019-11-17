import { getRequest } from '../../service/api';

export const getConfig = () => {
  return (dispatch) => {
    const processResponse = (res) => {
      dispatch({type:"GET_CONFIG", payload: res})
    }
    getRequest('5dcea5ff3000004e00931bb7', processResponse)
  }
  return null;
}
