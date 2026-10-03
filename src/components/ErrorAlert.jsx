function ErrorAlert({ message, onRetry }) {
  return (
    <div className="alert alert-danger d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2" role="alert">
      <div>
        <strong>Oops!</strong> {message}
      </div>
      {onRetry && (
        <button className="btn btn-sm btn-outline-danger" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorAlert;