const Card = (props) => {
    return <div className="flex flex-wrap text-center p-3 justify-between bg-slate-300 rounded-md min-w-[40%] text-black">{props.children}</div>
};


export default Card;