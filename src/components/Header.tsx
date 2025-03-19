// import { NavLink } from "react-router-dom";
// import routes from "../routes";

export function Header() {
  return (
    <header>
      <h1>Leland Clemmons</h1>
      <h2>NYC Front End Software Engineer</h2>
      {/* <nav>
        {routes.map(({ name, path }) => {
          return (
            <NavLink key={name} to={path}>
              {name}
            </NavLink>
          );
        })}
      </nav> */}
    </header>
  );
}
