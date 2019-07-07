// ===================
//IMPORT ALL COMPONENTS
// ===================
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import {
  GET_TOP_USERS,
  FORM_SUBMIT,
  GET_USER,
  GET_USER_REPOS,
  SET_LOADING,
  CLEAR_USER_STATE
} from "../types";

// ==========================================

// CREATE GITHUB STATE WHICH IS THE MAIN FILE NAME
//    remember to pass in props
// ==========================================
const GithubState = props => {
  //INITIALIZE ALL GLOBAL STATE FOR GITHUB
  const initialState = {
    users: [],
    searchedUsers: [],
    searchedUser: [],
    repo: [],
    loading: false
  };

  //DESTRUCTURE STATE AND DISPATCHER FROM THE useReducer HOOK
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //TOP USERS
  const topUsers = () => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users?client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(res => dispatch({ type: GET_TOP_USERS, payload: res.data }));
  };

  // SEARCH USERS
  const formSubmit = async value => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}&?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: FORM_SUBMIT,
      payload: res.data.items
    });
  };

  // GET USER
  const getUser = username => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(res => dispatch({ type: GET_USER, payload: res.data }));
  };
  //Get Repos
  const getUserRepos = username => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(res => dispatch({ type: GET_USER_REPOS, payload: res.data }));
  };

  //Clear Users
  const clearUserState = () => {
    setLoading();

    dispatch({ type: CLEAR_USER_STATE });
  };

  // =================================
  //  SETTERS
  // =================================
  const setLoading = () => dispatch({ type: SET_LOADING });

  // RETURN THE PROVIDER WHICH WILL BE IMPORTED INTO APP.JS AS GITHUBSTATE
  //THE PROVIDER HAS TO WRAP AROUND THE ENTIRE APP
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        searchedUsers: state.searchedUsers,
        searchedUser: state.searchedUser,
        repo: state.repo,
        loading: state.loading,
        topUsers,
        formSubmit,
        getUser,
        getUserRepos,
        clearUserState
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
