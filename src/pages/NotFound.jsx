import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="h4 mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <Link to="/" className="btn btn-primary px-4">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;