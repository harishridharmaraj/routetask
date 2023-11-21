import "./App.css";
import Career from "./components/career";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Fullstack from "./components/fullstack";
import DataSci from "./components/datasci";
import Cyber from "./components/cyber";
import Blog from "./components/blog";

function App() {
  return (
    <div className="App">
      <a href="/blog">Blog</a>
      <Routes>
        <Route path="/blog" element={<Header />}>
          <Route index element={<Blog />} />
          <Route path="category">
            <Route path="full-stack-development" element={<Fullstack />} />
            <Route path="data-science" element={<DataSci />} />
            <Route path="cyber-security" element={<Cyber />} />
            <Route path="career" element={<Career />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export function Header() {
  return (
    <div>
      <div className="container">
        <img
          src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png"
          alt="img"
        />
      </div>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/blog"> ALL</Link>
            </li>
            <li>
              <Link to="/blog/category/full-stack-development">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li>
              <Link to="/blog/category/data-science"> DATA SCIENCE</Link>
            </li>
            <li>
              <Link to="/blog/category/cyber-security"> CYBER SECURITY</Link>
            </li>
            <li>
              <Link to="/blog/category/career"> CAREER</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
