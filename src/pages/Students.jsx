import { useState } from "react";
import useFetch from "../hooks/useFetch";
import StudentCard from "../components/StudentCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import API_BASE_URL from "../config";

function Students() {
  
  const [reloadKey, setReloadKey] = useState(0);

  
  const url =
    reloadKey === 0
      ? `${API_BASE_URL}/students`
      : `${API_BASE_URL}/students?_=${reloadKey}`;

  const { data: students, loading, error } = useFetch(url);

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-4 gap-2">
        <h1 className="h3 mb-0">All Students</h1>
        <span className="badge bg-primary align-self-start align-self-sm-center">
          {students ? `${students.length} records` : "—"}
        </span>
      </div>

      {loading && <LoadingSpinner message="Fetching students..." />}

      {!loading && error && (
        <ErrorAlert
          message={error}
          onRetry={() => setReloadKey((k) => k + 1)}
        />
      )}

      {!loading && !error && students && students.length === 0 && (
        <div className="alert alert-info">No students found.</div>
      )}

      {!loading && !error && students && students.length > 0 && (
        <div className="row">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;