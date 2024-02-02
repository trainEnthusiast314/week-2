import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/form"> form </Link>

      <Link to="/display"> display </Link>

      <Link to="/hello"> Hello </Link>
    </nav>
  );
}
export default Nav;
