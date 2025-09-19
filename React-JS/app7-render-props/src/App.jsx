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

      <HandleCounterTwo
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
      />
    </div>
  );
}

export default App;
