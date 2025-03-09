import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import PropertySearchTool from "./pages/task-2/PropertySearchTool";
import Blog from "./pages/task-1/Blog";
import BlogSingle from "./pages/task-1/BlogSingle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/propertySearchTool" element={<PropertySearchTool />} />
      </Routes>
    </Router>
  );
}
export default App;