import { useState } from "react";
import Button from "./components/Button/Button.tsx";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };
  return (
    <div>
      {pizza.toppings}
      <br />
      <Button color="primary" onClick={handleClick}>
        My Button
      </Button>
    </div>
  );
}

export default App;

/* This file corresponds to the commit 4-10 */
