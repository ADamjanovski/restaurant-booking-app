const Card = (props) => {
    return <div className="flex flex-wrap text-center  justify-between bg-slate-300 rounded-md min-w-[60] text-black">{props.children}</div>
};


export default Card;