const Card = (props) => {
    return <div className="flex  text-center w-full  justify-between bg-slate-300 rounded-md  text-black">{props.children}</div>
};


export default Card;