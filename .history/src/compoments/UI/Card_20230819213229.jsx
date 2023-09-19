const Card = (props) => {
    return <div className="flex w-36 justify-between bg-slate-300 rounded-md overflow-hidden text-black">{props.children}</div>
};


export default Card;