import React, { useState } from "react";
import "./BlogList.scss";
import { MdAddReaction } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { useBlogsContext } from "../../context/blogsContext";
import Loader from "../Loader/Loader";

const BlogList = ({ blogs }) => {
  const { blogsLoading, searchBlogsLoading } = useBlogsContext();
  const blogLimit = 6;
  const [paginate, setPaginate] = useState(1 * blogLimit);
  const paginateHanler = (value) => setPaginate(value * blogLimit);

  if (blogsLoading || searchBlogsLoading) {
    return <Loader />;
  }

  return <></>;
};

export default BlogList;
