
export const fetchData = async (endpoint = "") => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return endpoint ? null : [];
  }
};

export const fetchBlogs = () => fetchData(); // Fetch all blogs
export const fetchBlogById = (id) => fetchData(id); // Fetch blog by ID
