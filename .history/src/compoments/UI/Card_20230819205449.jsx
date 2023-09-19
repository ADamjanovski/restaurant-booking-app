const Card = (props) => {
    return <div className="overflow-hidden flex flex-wrap text-center  justify-between bg-slate-300 rounded-md w-40 text-black">{props.children}</div>
};


export default Card;