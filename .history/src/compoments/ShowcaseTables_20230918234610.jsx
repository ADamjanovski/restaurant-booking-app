import { useParams } from "react-router-dom";
import AuthContext from "../context/auth-context";
import { useHttp } from "../hooks/useHttp";

const ShowcaseTables = ({ tables, hasError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reserved,setReserved]=useState(falsef)
  const reserveHandler = async () => {
    setIsLoading(true);
    const { restraurantId } = useParams();
    const authCtx = useContext(AuthContext);
    const data = await useHttp({
      url: "http://localhost:3000/api/restaurants/reservation",
      method: "POST",
      body: JSON.stringify({
        restaurantId: +restraurantId,
        tableId: +tables[0].id,
        id: +authCtx.user.id,
        datetime: new Date(dateRef.current.value),
      }),
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col ">
      {isLoading && <CircularProgress />}

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
  );
};

export default ShowcaseTables;
