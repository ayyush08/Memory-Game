import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { images } from './assets/images'
import {shuffle} from 'lodash'
function App() {
  const pics = [...images,...images]
  const [flipped, setFlipped] = useState([])
  const [shuffledPics,setShuffledPics] = useState([])
  const [turn,setTurn] = useState(true);

  
  useEffect(() => {
    setShuffledPics(shuffle(pics))
  }, [])
  

  const handleClick = (index) => {
    // setTurn(!turn)
    setFlipped((prev)=>{
      const newFlip = [...prev];
      newFlip[index] = !newFlip[index];
      return newFlip
    })
    // setFlipped([...flipped],[shuffledPics[index]])
  }
  
  return <div className='bg-slate-200 h-screen'>
    <h1 className='text-center text-4xl font-bold font-sans mb-10'>Memory Game</h1>
  <div className="container flex justify-center items-center">
    <div className="grid grid-cols-4 gap-5">
    {shuffledPics.map((image, index) => (
            <div
              key={index}
              className='h-[10rem] w-[160px] cursor-pointer'
              onClick={() => handleClick(index)}
            >
              {flipped[index] ? (
                <img src={image} alt="gallery" className='h-[100%] w-[100%]' />
              ) : (
                <div className="bg-slate-400 h-[100%] w-[100%]" />
              )}
              </div>
          ))}
    </div>
  </div>
  </div>
}

export default App
