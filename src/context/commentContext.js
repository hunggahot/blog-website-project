import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/commentReducer";
import axios from "../api/axios";
import {
  GET_COMMENT_BY_POST_BEGIN,
  GET_COMMENT_BY_POST_SUCCESS,
  GET_COMMENT_BY_POST_ERROR,
} from "../utils/constants";
import { COMMENT_BY_POST_URL } from "../utils/constants";

const initialState = {
  commentByPostLoading: false,
  commentByPostError: false,
  commentByPost: [],
};

const CommentContext = createContext({});

export const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCommentsByPost = async (id) => {
    dispatch({ type: GET_COMMENT_BY_POST_BEGIN });

    try {
      const response = await axios.get(`${COMMENT_BY_POST_URL}/${id}`);
      dispatch({
        type: GET_COMMENT_BY_POST_SUCCESS,
        payload: response.data.comments,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_COMMENT_BY_POST_ERROR });
    }
  };

  return (
    <CommentContext.Provider
      value={{
        ...state,
        fetchCommentsByPost,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => {
  return useContext(CommentContext);
};
