import {useState, useEffect} from 'react'
import './App.css'
import {Cat} from "./models.ts";
import {addCat, getCats, getRandomNumber} from "./services.ts";
import bengal from './assets/bengal.jpeg'
import angora from './assets/angora.png'
import gouttiere from './assets/gouttiere.jpeg'
import maineCoon from './assets/maine-coon.jpeg'

function App() {
  const [number, setNumber] = useState(0);
  const [cats, setCats] = useState<Cat[]>([])

  useEffect(() => {
      getRandomNumber()
          .then(res => setNumber(res))
  }, [])

  return (
    <div className="h-full w-screen justify-between flex flex-col p-5">
        <div className="top mb-2 font-extrabold text-xl text-white">
            Your random number is : {number}
        </div>
        <div className="flex flex-col">
                <div className="flex gap-1 col-auto w-full justify-around text-[#D46F4D] font-extrabold">
                    <span> name </span>
                    <span> type</span>
                    <span> age </span>
                    <span> photo </span>
                </div>
            {cats.map(cat => (
                <div className="flex gap-1 col-auto w-full justify-around text-white" key={cat.id}>
                    <span>{cat.name}</span>
                    <span>{cat.type}</span>
                    <span>{cat.age}</span>
                    <img alt={'cat picture'} src={getCatImage(cat.type)}></img>
                </div>
            ))}
        </div>
        <div className="bottom-0 flex justify-around">
            <button className="bg-[#09C5D1] text-black font-bold py-2 px-2 rounded-xl" onClick={addCat}> click here to add a cat </button>
            <button className="bg-[#09C5D1] text-black font-bold py-2 px-2 rounded-xl" onClick={() => getCats().then(res => setCats(res))}> refresh cats </button>
        </div>

    </div>
  )
}

const getCatImage = (type: string) => {
    switch (type) {
        case 'Bengal':
            return bengal
        case 'Angora':
            return angora
        case 'Maine coon':
            return maineCoon
        case 'Gouttière':
        default:
            return gouttiere
    }
}

export default App
