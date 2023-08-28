import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './authActionType'


const initialState = {
    user:[],
    loading: false,
    error: null,
  };

  
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case  LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          user: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };