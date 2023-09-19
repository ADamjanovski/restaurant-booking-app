const Card = (props) => {
    return <div className="overflow-auto flex  text-center w-40 justify-between bg-slate-300 rounded-md  text-black">{props.children}</div>
};


export default Card;