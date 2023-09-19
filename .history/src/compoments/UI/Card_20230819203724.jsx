const Card = (props) => {
    return <div className="flex flex-wrap text-center  justify-between bg-slate-300 rounded-md w-56 text-black">{props.children}</div>
};


export default Card;