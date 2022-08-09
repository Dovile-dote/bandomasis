import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="nav">
        <NavLink
          to="/"
          className="nav-link"
          style={({ isActive }) =>
            isActive
              ? {
                  color: 'crimson'
                }
              : null
          }
        >
          <span className="nav-hover">List</span>
        </NavLink>
        <NavLink
          to="/create"
          className="nav-link"
          style={({ isActive }) =>
            isActive
              ? {
                  color: 'crimson'
                }
              : null
          }
        >
          <span className="nav-hover">Create</span>
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;