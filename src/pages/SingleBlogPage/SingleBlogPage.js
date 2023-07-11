import React, { useEffect } from "react";
import "./SingleBlogPage.scss";
import Title from "../../components/Title/Title";
import SingleBlog from "../../components/SingleBlog/SingleBlog";
import { useBlogsContext } from "../../context/blogsContext";
import { useParams } from "react-router-dom";
import { banner_image } from "../../utils/images";

const SingleBlogPage = () => {
  const { fetchSingleBlog, singleBlog } = useBlogsContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleBlog(id);
  }, [singleBlog.id, id]);

  console.log(singleBlog);

  return (
    <div className="main-holder bg-light-blue">
      <header
        className="header"
        style={{
          background: `linear-gradiem(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${banner_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <div className="header-content text-center flex align-center justify-center flex-column text-white">
            <Title title="Blog Details" color={`#fff`} />
          </div>
        </div>
      </header>

      <section className="section py-7">
        <div className="container">
          <div className="section-content bg-white">
            <SingleBlog blog={singleBlog} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
