import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
} from './constants';

//get current user profile
export const getCurrentUserProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status}
    })
  }
}

//create/update a profile
export const createProfile = (formData, history, edit=false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('api/profile', formData, config)

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })

    dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', 'success'));

    if(!edit) {
      history.push('/dashboard')
    }
  } catch (err) {
    const errors = err.response.data.error;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status}
    })
  }
}
