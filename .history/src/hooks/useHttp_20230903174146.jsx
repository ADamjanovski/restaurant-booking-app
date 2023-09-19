

const useHttp = (props)=>{
  const request= fetch(props.url , {
    method : props.method,
    headers : props.headers,
    body : props.body ? props.body : ""
  })
}