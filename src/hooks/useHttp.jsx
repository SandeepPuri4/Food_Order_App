import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, confiq) {
  const response = await fetch(url, confiq);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "something went wrong");
  }
  return resData;
}

export default function useHttp(url, confiq, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...confiq, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "something went wrong!");
      }
      setIsLoading(false);
    },
    [url, confiq]
  );

  useEffect(() => {
    if ((confiq && (confiq.method === "GET" || !confiq.method)) || !confiq) {
      sendRequest();
    }
  }, [sendRequest, confiq]);
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  };
}
