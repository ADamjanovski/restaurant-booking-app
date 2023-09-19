import { useContext } from "react";
import AuthContext from "../context/auth-context";

const ContactUs = () => {
  const ctx = useContext(AuthContext);
  const restaurantName = useRef();
  const email = useRef();
  const description = useRef();
  const [finishedRequest, setFinishedRequest] = useState(false);
  const [isValid, setIsValid] = useState({
    valid: true,
    message: "",
  });
  const handleClose = () => setFinishedRequest(false);
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (
      !restaurantName.current.value.trim("").length > 0 ||
      !description.current.value.trim("").length > 0
    ) {
      setIsValid({
        valid: false,
        message: "You need to fill out every input.",
      });
      setTimeout(() => {
        setIsValid({
          valid: true,
          message: "",
        });
      }, 2000);
      return;
    }

    const request = await useHttp({
      url: "http://localhost:3000/api/users/customerService",
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        name: restaurantName.current.value,
        description: description.current.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(request);
    if (request.message !== undefined) {
      setIsValid({
        valid: true,
        message: request.message,
      });
      alert(request.message);
      return;
    }
    setFinishedRequest(true);
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler} className=" m-5 flex flex-col ">
        <label className="m-2 ">Name</label>
        <input
          type="text"
          placeholder="Name"
          className=" p-2 rounded-lg"
          ref={name}
        />
        <label className="m-2">Email</label>
        <input
          type="email"
          className="p-2 rounded-lg"
          placeholder="Email"
          ref={email}
        />
        <label className="m-2">Description of your problem</label>
        <textarea
          placeholder="Description"
          className="p-2 rounded-lg mb-6"
          ref={description}
        />
        <button
          className="p-2 rounded-lg bg-accent w-1/2 self-center disabled:bg-neutral-500"
          disabled={!ctx.isLoggedIn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
