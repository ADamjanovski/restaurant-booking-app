const Card = (props) => {
    return <div className="flex w-28 justify-between bg-slate-300 rounded-md  text-black">{props.children}</div>
};


export default Card;