import { useState, useEffect } from 'react';

const width = 8;
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];

function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];

    for (let i = 0; i < width * width; i++) {
      /* get randomColor in 2 steps
      const randomNumberFrom0To5 = Math.floor(
        Math.random() * candyColors.length
      );
      const randomColor = candyColors[randomNumberFrom0To5];
      */

      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  console.log(currentColorArrangement);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            style={{ backgroundColor: candyColor }}
            alt="candy"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
