

const ShowcaseTables=({})=>{
    return(
        <div className="flex flex-col ">
        {tables.length > 0 && (
          <p className="text-lg text-center">
            We have {tables.length} tables left.
          </p>
        )}
        {hasError && <p>Sorry, We have no tables left for that date!!</p>}
        {tables.length > 0 && (
          <button
            className="bg-accent p-2 rounded-lg border-neutral-500 border-solid border-2 "
            onClick={reserveHandler}
          >
            Reserve your Place
          </button>
            )}
            </div>
F
    )
}