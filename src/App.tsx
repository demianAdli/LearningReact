import { useState } from "react";
import Button from "./components/Button/Button.tsx";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Ali" } });
  };
  return (
    <div>
      {game.player.name}
      <Button color="primary" onClick={handleClick}>
        My Button
      </Button>
    </div>
  );
}

export default App;

/* This file corresponds to the commit 4-10 */
