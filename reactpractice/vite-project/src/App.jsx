import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 1. Pagination Component (Receives Props)
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          style={{ margin: "5px" }}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

// 2. Home Component with State & Pagination Logic
const Home = () => {
  const [items] = useState([...Array(20).keys()].map((i) => `Item ${i + 1}`)); // 20 items
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
      <br />
      <Link to="/about">Go to About Page (Routing)</Link>
    </div>
  );
};

// 3. About Component
const About = () => (
  <div>
    <h2>About Page</h2>
    <Link to="/">Back Home</Link>
  </div>
);

// 4. Main App with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
