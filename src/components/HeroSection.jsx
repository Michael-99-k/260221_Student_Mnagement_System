import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-md-6">
          <h1 className="display-4 fw-light mb-3">
            Welcome to <br />
            BrightPath College <br />
            Student Management
          </h1>

          <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
            Your one-stop place to browse every enrolled student and open a full
            profile in a click. <br />
            Tuko <span className="text-primary fw-bold">Rada</span> Yako.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-2 mb-4">
            <Link
              to="/students"
              className="btn btn-primary px-4 py-2"
              style={{ borderRadius: "6px" }}
            >
              View Students
            </Link>
            <Link
              to="/add-student"
              className="btn btn-outline-primary px-4 py-2"
              style={{ borderRadius: "6px" }}
            >
              Register a Student
            </Link>
          </div>

          <div className="d-flex flex-wrap gap-4">
            <h6 className="mb-0 d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              All Students in One Place
            </h6>
            <h6 className="mb-0 d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              Fast &amp; Easy Registration
            </h6>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <img
            src="HeroSection.webp"
            alt="BrightPath College students"
            style={{ width: "100%", height: "420px", objectFit: "cover" }}
            className="rounded-4 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
