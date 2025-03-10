import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../utils/api";
import { truncateText } from "../../utils/truncateText";
import Spinner from "../../components/spinner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BackButton from "../../components/backButton";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const views = useSelector((state) => state.blogs.views);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <div className="d-md-flex justify-content-between align-items-center mb-3">
        <BackButton />
        <p className="text-secondary text-center flex-grow-1 m-0">
          <i className="fa-solid fa-circle-exclamation me-2"></i>
          The API endpoint images are unavailable; a placeholder image is being
          used instead.
        </p>
      </div>

      <div className="row justify-content-center">
        {blogs.slice(0, 6).map((blog) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div
              className="card border-0 blog-card"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img src={process.env.REACT_APP_IMG1} alt={blog.Title} />
              <div className="card-body px-0">
                <div className="d-flex d-sm-block d-lg-flex text-secondary justify-content-between">
                  <p>Posted on October 6th 2021</p>
                  <p className="text-lg-end">
                    <i className="fa-solid fa-eye"></i> {views[blog.id] || 0}{" "}
                    {views[blog.id] > 1 ? "views" : "view"}
                  </p>
                </div>
                <h4 className="card-title pb-2">
                  {truncateText(blog.Title, 5)}
                </h4>
                <p className="card-text">{truncateText(blog.Subtitle, 15)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
