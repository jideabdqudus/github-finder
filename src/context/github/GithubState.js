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



  return <GithubReducer.Provider
    value={{
        users: state.user,
        user: state.user,
        repos: state.repos,
        loading: state.loading
    }}
  >
  {props.children}
  
  </GithubReducer.Provider>
};

export default GithubState
