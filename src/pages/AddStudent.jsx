import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

const COURSES = [
  "Software Development",
  "Networking",
  "Data Analytics",
  "Cybersecurity",
  "Business IT",
];

function AddStudent() {
  const navigate = useNavigate();

  
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    course: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.age || Number(form.age) <= 0) return "Please enter a valid age.";
    if (!form.gender) return "Please select a gender.";
    if (!form.course) return "Please select a course.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          age: Number(form.age),
          gender: form.gender,
          course: form.course,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to save student (status ${response.status})`);
      }

      
      navigate("/students");
    } catch (err) {
      setError(err.message || "Something went wrong while saving the student.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <h1 className="h3 mb-3">Register a New Student</h1>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="card border-0 shadow-sm p-4"
            noValidate
          >
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Amina Hassan"
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. amina@brightpath.edu"
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  min="1"
                  placeholder="e.g. 19"
                  required
                />
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="course" className="form-label">
                  Course
                </label>
                <select
                  className="form-select"
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12">
                <label className="form-label d-block">Gender</label>
                {["Female", "Male", "Other"].map((g) => (
                  <div key={g} className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id={`gender${g}`}
                      value={g}
                      checked={form.gender === g}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`gender${g}`}
                    >
                      {g}
                    </label>
                  </div>
                ))}
              </div>

              <div className="col-12 d-flex flex-column flex-sm-row gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary px-4"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Saving...
                    </>
                  ) : (
                    "Save Student"
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={() =>
                    setForm({
                      name: "",
                      email: "",
                      age: "",
                      gender: "",
                      course: "",
                    })
                  }
                  disabled={submitting}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;