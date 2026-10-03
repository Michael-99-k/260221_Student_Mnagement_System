import { useState, useEffect } from "react";

function useFetch(url, reloadKey = 0) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);
    setData(null);

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? "Resource not found (404)"
              : `Request failed with status ${response.status}`
          );
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Something went wrong while fetching data.");
        setData(null);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
    
  }, [url, reloadKey]);

  return { data, loading, error };
}

export default useFetch;