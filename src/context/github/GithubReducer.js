import {
  GET_TOP_USERS,
  FORM_SUBMIT,
  GET_USER,
  GET_USER_REPOS,
  SET_LOADING,
  CLEAR_USER_STATE
} from "../types";

//REDUCER IS THE PROPS FOR THE APPLICATION
export default (state, action) => {
  switch (action.type) {
    case GET_TOP_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case FORM_SUBMIT:
      return {
        ...state,
        searchedUsers: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_USER:
      return {
        ...state,
        searchedUser: action.payload,
        loading: false
      };
    case GET_USER_REPOS:
      return {
        ...state,
        repo: action.payload,
        loading: false
      };
    case CLEAR_USER_STATE:
      return {
        ...state,
        searchedUsers: [],
        searchedUser: [],
        repo: [],
        loading: false
      };

    default:
      return state;
  }
};
