import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner";

const Main = lazy(() => import("./pages/main"));
const PropertySearchTool = lazy(() => import("./pages/task-2/PropertySearchTool"));
const Blog = lazy(() => import("./pages/task-1/Blog"));
const BlogSingle = lazy(() => import("./pages/task-1/BlogSingle"));
const AIChatBot = lazy(() => import("./pages/task-3/AIChatBOT"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/propertySearchTool" element={<PropertySearchTool />} />
          <Route path="/aiChat" element={<AIChatBot />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
