import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RenderParent from "../Components/RenderParent";
import RenderChild from "../Components/RenderChild";
import ClickCounter from "../Components/ClickCounter";
import HoverCounter from "../Components/HoverCounter";
import HandleCounter from "../Components/HandleCounter";
import ShowMessage from "../Components/ShowMessage";
import HandleCounterTwo from "../Components/HandleCounterTwo";
import HandleComponent from "../PracticeComponent/HandleComponent";
import ClickComponent from "../PracticeComponent/ClickComponent";
import HoverComponent from "../PracticeComponent/HoverComponent";
import HandleOne from "../PracticeComponent/HandleOne";
import ClickOne from "../PracticeComponent/ClickOne";
import HoverOne from "../PracticeComponent/HoverOne";
import HandleComp from "../Practice-1/HandleComp";
import ClickComp from "../Practice-1/ClickComp";
import HoverComp from "../Practice-1/HoverComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <RenderParent /> */}
      {/* <hr />
      <RenderChild /> */}
      {/* <ClickCounter />
      <hr />
      <HoverCounter /> */}
      {/* <HandleCounter
        message="Welcome"
        render={() => {
          // return msg={"Hello From Function"}
          return <ShowMessage msg={"Hello From Function"} />;
        }}
      /> */}

      {/* <HandleCounterTwo
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
      <hr />
      <HandleCounterTwo
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      /> */}

      {/* <HandleComponent
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickComponent
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
      <hr />
      <HandleComponent
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverComponent
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      /> */}

      {/* <HandleOne
        render={(count, increment, decrement, reset) => (
          <ClickOne
            count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
        )}
      />
      <hr />
      <HandleOne
        render={(count, increment, decrement, reset) => (
          <HoverOne
            count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
        )} 
      />*/}

      <HandleComp
        render={(count, increase, decrease, reset) => (
          <ClickComp
            count={count}
            increase={increase}
            decrease={decrease}
            reset={reset}
          />
        )}
      />
      <hr />
      <HandleComp
        render={(count, increase, decrease, reset) => (
          <HoverComp
            count={count}
            increase={increase}
            decrease={decrease}
            reset={reset}
          />
        )}
      />
    </div>
  );
}

export default App;
