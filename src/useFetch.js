import { useEffect, useState } from "react";
const useFetch = (url) => {
  // useStates
  const [data, setData] = useState(null);

  const [isPending, isIsPending] = useState(true);

  const [error, setError] = useState(null);

  //   useEffect
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from DATABASE");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          isIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            isIsPending(false);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
