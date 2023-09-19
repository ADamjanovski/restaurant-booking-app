export const useHttp = async (data) => {
  try {
    const request = await fetch(data.url, {
      method: data.method,
      headers: data.headers !== null ? data.headers : "",
      body: data.body !== null ? data.body : "",
    });
    const data = await request.json();
    return data;
  } catch (err) {
    throw err;
  }
};
