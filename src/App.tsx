import { useState } from "react";
import Button from "./components/Button/Button.tsx";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      {cart.items[0].quantity}
      <br />
      <Button color="primary" onClick={handleClick}>
        My Button
      </Button>
    </div>
  );
}

export default App;

/* This file corresponds to the commit 4-10 */
