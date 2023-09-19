const Card = (props) => {
    return <div className="flex bg-slate-700 rounded-md min-w-[50%] text-black">{props.children}</div>
};


export default Card;