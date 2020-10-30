import axios from 'axios';
import { GET_ALL_COUNTRY } from './types';

const baseURL = 'http://0.0.0.0:3010';

export const getAllCountry = () => async (dispatch: any) => {
  const res = await axios.get(baseURL + '/api/getAllCountry');
  dispatch ({
      type: GET_ALL_COUNTRY,
      payload: res.data
  })
};