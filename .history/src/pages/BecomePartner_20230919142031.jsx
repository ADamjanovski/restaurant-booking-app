import { useRef } from "react";
import { useHttp } from "../hooks/useHttp";
import Card from "../compoments/UI/Card";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
const BecomePartner = () => {
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
    if(!email.current.value.contains("@") || ~restaurantName.current.value.trim("").length>0){

    }

    const request = await useHttp({
      url: "http://localhost:3000/api/restaurants",
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
    <div className="lg:w-6/12 mx-auto ">
      <Card>
        <form onSubmit={formSubmitHandler} className=" m-5 flex flex-col ">
          <label className="m-2 ">Restaurant Name</label>
          <input
            type="text"
            placeholder="Restaurant Name"
            className=" p-2 rounded-lg"
          />
          <label className="m-2">Email</label>
          <input type="email" className="p-2 rounded-lg" placeholder="Email" />
          <label className="m-2">Description of your restaurant</label>
          <textarea placeholder="Description" className="p-2 rounded-lg mb-6" />
          <button className="p-2 rounded-lg bg-accent w-1/2 self-center">
            Submit Request
          </button>
        </form>
        {!isValid.valid && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {isValid.message}
          </Alert>
        )}
        {finishedRequest && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Your request has been sent!!! We will review it and get back to
                you via email.
              </Alert>
            </div>
          </Modal>
        )}
      </Card>{" "}
    </div>
  );
};

export default BecomePartner;
