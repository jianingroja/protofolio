import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2>
        <Link id="name" to="/">
          王佳宁 <span>Mica</span>
        </Link>
      </h2>
      <ul>
        <li>
          <Link to="/about">
            关于 <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/resume">
            简历 <span>Resume</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            项目 <span>Projects</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
