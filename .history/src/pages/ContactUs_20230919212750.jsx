

const ContactUs = ()=>{

    return (
        <div>
        <form onSubmit={formSubmitHandler} className=" m-5 flex flex-col ">
          <label className="m-2 ">Name</label>
          <input
            type="text"
            placeholder="Name"
            className=" p-2 rounded-lg"
            ref={restaurantName}
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
          <button className="p-2 rounded-lg bg-accent w-1/2 self-center">
            Submit Request
          </button>
        </form>
        </div>
    )
}