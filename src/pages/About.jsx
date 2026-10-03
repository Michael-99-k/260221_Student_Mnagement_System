function About() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <h1 className="h3 mb-4">About This System</h1>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Purpose</h5>
              <p className="card-text text-muted mb-0">
                The BrightPath College Student Management System is a
                front-end single-page application that lets administration
                staff browse all enrolled students and view a full profile
                for any one of them. It replaces paper files and scattered
                spreadsheets with a fast, responsive web interface.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Technologies Used</h5>
              <ul className="mb-0 text-muted">
                <li><strong>React</strong> — functional components, JSX, hooks</li>
                <li><strong>React Router</strong> — multi-page navigation and dynamic routes</li>
                <li><strong>Bootstrap 5</strong> — responsive layout and components</li>
                <li><strong>JSON Server</strong> — mock REST API for student data</li>
                <li><strong>fetch()</strong> — native HTTP requests</li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Developer</h5>
              <p className="mb-1"><strong>Name:</strong> Michael W</p>
              <p className="mb-0"><strong>Student ID:</strong> 260221</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;