import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";
import { hoverDecrement, hoverIncrement, hoverReset } from "./HoverSlice";
import { salaryDecrement, salaryIncrement, salaryReset } from "./SalarySlice";
import {
  jwelleryDecrement,
  jwelleryIncrement,
  jwelleryReset,
} from "./JwellerySlice";
import { bikeDecrement, bikeIncrement, bikereset } from "./BikeSlice";

function App() {
  const count = useSelector((store) => store.counter.count);
  const hoverCount = useSelector((store) => store.hoverCounter.hoverCount);
  const salaryCount = useSelector((store) => store.salaryCounter.salaryCount);
  const jwelleryCount = useSelector(
    (store) => store.jwelleryCounter.jwelleryCount
  );
  const bikeCount = useSelector((store) => store.bikeCounter.bikeCount);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <>
      {/* <h2>{count}</h2>
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
      </div> */}

      {/* <h2>SalaryCounterSlice : {salaryCount}</h2>
      <button
        onClick={() => {
          dispatch(salaryIncrement());
        }}
      >
        salaryIncrement
      </button>
      <button
        onClick={() => {
          dispatch(salaryDecrement());
        }}
      >
        salaryDecrement
      </button>
      <button
        onClick={() => {
          dispatch(salaryReset());
        }}
      >
        salaryReset
      </button> */}
      {/* <h2>jwelleryCounterSlice: {jwelleryCount}</h2>
      <button
        onMouseOver={() => {
          dispatch(jwelleryIncrement());
        }}
      >
        jwelleryIncrement
      </button>
      <button
        onMouseOver={() => {
          dispatch(jwelleryDecrement());
        }}
      >
        jwelleryDecrement
      </button>
      <button
        onMouseOver={() => {
          dispatch(jwelleryReset());
        }}
      >
        jwelleryReset
      </button> */}

      <h2>BikeCounterSlice : {bikeCount}</h2>

      <button
        onClick={() => {
          dispatch(bikeIncrement());
        }}
      >
        bikeIncrement
      </button>

      <button
        onClick={() => {
          dispatch(bikeDecrement());
        }}
      >
        bikeDecrement
      </button>

      <button
        onClick={() => {
          dispatch(bikereset());
        }}
      >
        bikereset
      </button>
    </>
  );
}

export default App;
