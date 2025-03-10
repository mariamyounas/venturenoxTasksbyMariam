import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { incrementView } from "../../redux/blogSlice";
import Spinner from "../../components/spinner";
import BackButton from "../../components/backButton";

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const views = useSelector((state) => state.blogs.views[id] || 0);

  useEffect(() => {
    dispatch(incrementView(id));
  }, [dispatch, id]);

  useEffect(() => {
    const getBlogbyId = async (id) => {
      try {
        const data = await fetchBlogById(id);
        setBlog(data);
      } catch (err) {
        setError("Failed to fetch blog. Please try again later.");
      }
    };
    getBlogbyId(id);
  }, [id]);

  if (!blog) {
    return <Spinner />;
  }
  if (error) return <p className="text-center text-danger">{error}</p>;
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-2">
          <BackButton page="/blog" />
        </div>
        <div className="col-md-8">
          <div className="d-block d-sm-flex text-secondary">
            <p>Posted on October 6th 2021</p>
            <p className="ps-sm-3 ps-0">
              <i className="fa-solid fa-eye"></i> {views}{" "}
              {views > 1 ? "views" : "view"}
            </p>
          </div>
          <h1 className="card-title mb-3">{blog.Title}</h1>
          <p className="card-text text-secondary">{blog.Subtitle}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 my-5">
          <img
            src={process.env.REACT_APP_IMG2}
            className="w-100 single-blog-image"
            alt={blog.Title}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="offset-md-2 col-md-8">
          <h1 className="card-title mb-4">{blog.Title}</h1>
          <p className="card-text text-secondary">{blog.Article}</p>
          <p className="card-text text-secondary">{blog.Article}</p>
          <img
            src={process.env.REACT_APP_IMG1}
            className="my-5 w-100 object-cover"
            alt={blog.Title}
          />
          <h2 className="card-title mb-4">{blog.Title}</h2>
          <p className="card-text text-secondary">{blog.Article}</p>
          <div className="text-secondary border-start border-dark border-3 my-4 ps-4">
            {blog.Subtitle}
          </div>
          <p className="card-text text-secondary">{blog.Article}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
