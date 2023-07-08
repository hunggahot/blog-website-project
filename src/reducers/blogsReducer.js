import { FaLeaf } from "react-icons/fa";
import {
  GET_BLOG_BEGIN,
  GET_BLOG_ERROR,
  GET_BLOG_ERROR,
  GET_SINGLE_BLOG_BEGIN,
  GET_SINGLE_BLOG_ERROR,
  GET_SINGLE_BLOG_ERROR,
  GET_BLOG_BY_SEARCHTERM_BEGIN,
  GET_BLOG_BY_SEARCHTERM_SUCCESS,
  GET_BLOG_BY_SEARCHTERM_ERROR,
  GET_BLOG_BY_SEARCHTERM_BEGIN,
  GET_BLOG_BY_SEARCHTERM_ERROR,
  GET_BLOG_BY_SEARCHTERM_SUCCESS,
  SET_SEARCH_TERM,
  GET_BLOG_SUCCESS,
  GET_SINGLE_BLOG_SUCCESS,
} from "../utils/constants";

const blogsReducer = (state, action) => {
  switch (action.type) {
    case GET_BLOG_BEGIN:
      return {
        ...state,
        blogsLoading: true,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        blogsLoading: false,
        blogs: action.payload,
        tempsBlogs: action.payload,
      };
    case GET_BLOG_ERROR:
      return {
        ...state,
        blogsLoading: false,
        blogsError: true,
      };
    case GET_SINGLE_BLOG_BEGIN:
      return {
        ...state,
        singleBlogLoading: true,
      };
    case GET_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        singleBlogLoading: false,
        singleBlog: action.payload,
      };
    case GET_SINGLE_BLOG_ERROR:
      return {
        ...state,
        singleBlogLoading: false,
        singleBlogError: true,
      };
    case GET_BLOG_BY_SEARCHTERM_BEGIN:
      return {
        ...state,
        searchBlogsLoading: true,
      };
    case GET_BLOG_BY_SEARCHTERM_SUCCESS:
      return {
        ...state,
        searchBlogsLoading: false,
        blogs: action.payload,
      };
    case GET_BLOG_BY_SEARCHTERM_ERROR:
      return {
        ...state,
        searchBlogsLoading: false,
        searchBlogsError: true,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default blogsReducer;
