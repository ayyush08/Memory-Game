import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { images } from './assets/images'
import {shuffle} from 'lodash'
function App() {
  const pics = [...images,...images]
  const [flipped, setFlipped] = useState([])
  let shuffledPics = shuffle(pics)
  return <div className='bg-slate-200 h-screen'>
    <h1 className='text-center text-4xl font-bold font-sans mb-10'>Memory Game</h1>
  <div className="container flex justify-center items-center">
    <div className="grid grid-cols-4 gap-5">
    </div>
  </div>
  </div>
}

export default App
