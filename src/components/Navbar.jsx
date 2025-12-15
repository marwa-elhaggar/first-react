import { Link ,NavLink} from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="container-fluid d-flex justify-content-around  px-2 py-4 position-fixed mt-0 w-100 top-0 shadow-sm align-items-center z-2">
          <h1 className=""><Link to="/">start frame work </Link></h1>
          <ul className="d-flex list-unstyled gap-5 mb-0 align-items-center ">
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
