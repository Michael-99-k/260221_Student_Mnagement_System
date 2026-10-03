import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1 — Brand + tagline */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">
              BrightPath<span className="text-primary"> College</span>
            </h5>
            <p className="text-white-50 small mb-0">
              You need student records, we have them. You need to add a
              student, we make it simple — everything in one place.
            </p>
          </div>

          {/* Column 2 — Students */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="text-uppercase fw-bold mb-3">Students</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/students" className="text-white-50 text-decoration-none">
                  Browse Students
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/add-student" className="text-white-50 text-decoration-none">
                  Register a Student
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/students" className="text-white-50 text-decoration-none">
                  Student Profiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="text-uppercase fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  About the System
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  Technologies Used
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  Developer Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Linkages */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="text-uppercase fw-bold mb-3">Linkages</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  Contact Support
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="border-secondary mt-5 mb-3" />
        <p className="text-center text-white-50 small mb-0">
          © {new Date().getFullYear()} BrightPath College — Student Management
          System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;