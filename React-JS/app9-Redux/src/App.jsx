import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";
import { hoverDecrement, hoverIncrement, hoverReset } from "./HoverSlice";

function App() {
  const count = useSelector((store) => store.counter.count);
  const hoverCount = useSelector((store) => store.hoverCounter.hoverCount);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <hr />
      <div>
        <h2>{hoverCount}</h2>
        <button
          onMouseOver={() => {
            console.log("onMouseOver Called !!!");
            dispatch(hoverIncrement());
          }}
        >
          Increment
        </button>
        <button
          onMouseOver={() => {
            dispatch(hoverDecrement());
          }}
        >
          Decrement
        </button>
        <button
          onMouseOver={() => {
            dispatch(hoverReset());
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
