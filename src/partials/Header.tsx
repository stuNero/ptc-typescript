import { NavLink, Link } from "react-router-dom";
import routes from "../routes.tsx";


export default function Header() {
  return <header>
    <Link to="/">
      <h1>My Pokemon Store</h1>
    </Link>
    <nav>
      {routes.filter(x => x.menuLabel).map(({ menuLabel, path }, i) =>
        <NavLink key={i} to={path}>{menuLabel}</NavLink>)}
    </nav>
  </header>;
}