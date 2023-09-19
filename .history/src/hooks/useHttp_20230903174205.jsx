const useHttp = (props) => {
  const request = fetch(props.url, {
    method: props.method,
    headers: props.headers !== null ? props.headers : "",
    body: props.body !== null ? props.body : "",
  });
};
