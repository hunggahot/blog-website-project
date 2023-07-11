import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/blogsReducer";
import {
  GET_BLOG_BEGIN,
  GET_BLOG_SUCCESS,
  GET_BLOG_ERROR,
  GET_SINGLE_BLOG_BEGIN,
  GET_SINGLE_BLOG_SUCCESS,
  GET_SINGLE_BLOG_ERROR,
  GET_BLOG_BY_SEARCHTERM_BEGIN,
  GET_BLOG_BY_SEARCHTERM_ERROR,
  GET_BLOG_BY_SEARCHTERM_SUCCESS,
  SET_SEARCH_TERM,
} from "../utils/constants";

import axios from "../api/axios";
import { BLOG_URL } from "../utils/constants";
import { SEARCH_URL } from "../utils/constants";

const initialState = {
  blogsLoading: false,
  blogsError: false,
  blogs: [],
  tempBlogs: [],
  singleBlogLoading: false,
  singleBlogError: false,
  singleBlog: [],
  searchTerm: "",
  searchBlogsError: false,
  searchBlogsLoading: false,
};

const BlogsContext = createContext({});
export const BlogsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBlogs = async () => {
    dispatch({ type: GET_BLOG_BEGIN });
    try {
      const response = await axios.get(BLOG_URL);
      dispatch({ type: GET_BLOG_SUCCESS, payload: response.data.posts });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_BLOG_ERROR });
    }
  };

  const fetchSingleBlog = async (id) => {
    dispatch({ type: GET_SINGLE_BLOG_BEGIN });
    try {
      const response = await axios.get(`${BLOG_URL}/${id}`);
      dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: response.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_SINGLE_BLOG_ERROR });
    }
  };

  const fetchBlogsFromSearch = async (searchTerm) => {
    dispatch({ type: GET_BLOG_BY_SEARCHTERM_BEGIN });
    try {
      const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
      dispatch({
        type: GET_BLOG_BY_SEARCHTERM_SUCCESS,
        payload: response.data.posts,
      });
    } catch (err) {
      dispatch({ type: GET_BLOG_BY_SEARCHTERM_ERROR });
    }
  };

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: SET_SEARCH_TERM, payload: searchTerm });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider
      value={{
        ...state,
        fetchSingleBlog,
        fetchBlogsFromSearch,
        setSearchTerm,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  return useContext(BlogsContext);
};
