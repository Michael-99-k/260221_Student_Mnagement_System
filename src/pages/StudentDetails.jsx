import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import API_BASE_URL from "../config";

function StudentDetails() {
 
  const { id } = useParams();

  
  const { data: student, loading, error } = useFetch(
    `${API_BASE_URL}/students/${id}`
  );

  return (
    <div className="container py-4">
      <Link to="/students" className="btn btn-link px-0 mb-3">
        ← Back to Students
      </Link>

      {loading && <LoadingSpinner message="Loading student profile..." />}

      {!loading && error && (
        <div className="text-center py-5">
          <h2 className="h4 text-danger mb-3">Student Not Found</h2>
          <p className="text-muted">
            We couldn't find a student with ID <strong>{id}</strong>.
          </p>
          <Link to="/students" className="btn btn-primary mt-2">
            Return to Students List
          </Link>
        </div>
      )}

      {!loading && !error && student && (
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white">
            <h2 className="h4 mb-0">{student.name}</h2>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <p className="mb-1 text-muted small">Student ID</p>
                <p className="fw-semibold">{student.id}</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="mb-1 text-muted small">Full Name</p>
                <p className="fw-semibold">{student.name}</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="mb-1 text-muted small">Email</p>
                <p className="fw-semibold">{student.email}</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="mb-1 text-muted small">Age</p>
                <p className="fw-semibold">{student.age}</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="mb-1 text-muted small">Gender</p>
                <p className="fw-semibold">{student.gender}</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="mb-1 text-muted small">Course</p>
                <p className="fw-semibold">{student.course}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;