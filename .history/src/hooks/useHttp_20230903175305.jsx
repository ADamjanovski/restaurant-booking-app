export const useHttp =async (props) => {
  try {
    const request = fetch(props.url, {
      method: props.method,
      headers: props.headers !== null ? props.headers : "",
      body: props.body !== null ? props.body : "",
    });
    const data = request.json();
    return data;
  } catch (err) {
    throw err;
  }
};
