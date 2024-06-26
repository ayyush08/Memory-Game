import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { images } from './assets/images';
import { shuffle } from 'lodash';

function App() {
  const pics = [...images, ...images];
  const [flipped, setFlipped] = useState([]);
  const [shuffledPics, setShuffledPics] = useState([]);
  const [turn, setTurn] = useState({ firstTurn: null, secondTurn: null });
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setShuffledPics(shuffle(pics));
    setFlipped(new Array(pics.length).fill(false));
    setMatched(new Array(pics.length).fill(false));
  }, []);

  const handleClick = (index) => {
    if (flipped[index] || matched[index]) return;

    if (turn.firstTurn === null) {
      setTurn({ firstTurn: index, secondTurn: null });
    } else if (turn.secondTurn === null) {
      setTurn((prev) => ({ ...prev, secondTurn: index }));

      // Check for match
      if (shuffledPics[turn.firstTurn] === shuffledPics[index]) {
        setMatched((prev) => {
          const newMatched = [...prev];
          newMatched[turn.firstTurn] = true;
          newMatched[index] = true;
          return newMatched;
        });
      } else {
        // Reset flipped state after a delay if no match
        setTimeout(() => {
          setFlipped((prev) => {
            const newFlipped = [...prev];
            newFlipped[turn.firstTurn] = false;
            newFlipped[index] = false;
            return newFlipped;
          });
        }, 1000);
      }

      // Reset turn state
      setTurn({ firstTurn: null, secondTurn: null });
    }

    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = true;
      return newFlipped;
    });
  };

  return (
    <div className='bg-slate-200 h-screen'>
      <h1 className='text-center text-4xl font-bold font-sans mb-10'>Memory Game</h1>
      <div className="container flex justify-center items-center">
        <div className="grid grid-cols-4 gap-5">
          {shuffledPics.map((image, index) => (
            <div
              key={index}
              className='h-[10rem] w-[160px] cursor-pointer'
              onClick={() => handleClick(index)}
            >
              {flipped[index] || matched[index] ? (
                <img src={image} alt="gallery" className='h-[100%] w-[100%]' />
              ) : (
                <div className="bg-slate-400 h-[100%] w-[100%]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
