import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../Types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //Search Functionality
 const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https:api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
        type:SEARCH_USERS,
        payload: res.data.items
    })
  };

  const setLoading=()=> dispatch({type: SET_LOADING})


  return <GithubReducer.Provider
    value={{
        users: state.user,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
    }}
  >
  {props.children}
  
  </GithubReducer.Provider>
};

export default GithubState
