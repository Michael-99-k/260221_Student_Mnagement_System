import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-1">{student.name}</h5>
          <p className="text-muted small mb-2">{student.email}</p>

          <ul className="list-unstyled small mb-3">
            <li>
              <strong>Course:</strong> {student.course}
            </li>
            <li>
              <strong>Age:</strong> {student.age}
            </li>
            <li>
              <strong>Gender:</strong> {student.gender}
            </li>
          </ul>

          <Link
            to={`/students/${student.id}`}
            className="btn btn-outline-primary mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;