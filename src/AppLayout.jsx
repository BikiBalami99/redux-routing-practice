import { Outlet, Link } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <nav>
        <h1>Redux practice</h1>
        <div>
          <Link to="posts">Posts</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default AppLayout;
