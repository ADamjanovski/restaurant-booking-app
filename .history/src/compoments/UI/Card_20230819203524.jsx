const Card = (props) => {
    return <div className="flex flex-wrap text-center text-ellipsis justify-between bg-slate-300 rounded-md min-w-[40%] text-black">{props.children}</div>
};


export default Card;