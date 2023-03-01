import './App.css'
import { useState } from 'react'
import  phrases  from "./assets/json/phrases.json";
import imgJson from "./assets/json/backImg.json"
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import laCosaSvg from './assets/svg/imagen4.svg'

function App() {
  const [phraseViwe, setphraseViwe] = useState(Math.floor(Math.random()*100));
  const [fondo, setFondo] = useState(Math.floor(Math.random()*4));
  // const [svgImgs, setsvgImgs] = useState(second);

  const changePhraseAndFondo = () => {
    const newPhrase = Math.round(Math.random()*100);
    setphraseViwe(newPhrase)

    const newFondo = Math.floor(Math.random()*4);
    setFondo(newFondo)

    // const
  }


  
  return (
    <div className="App" style={{ backgroundImage: `url(/src/assets/img/${imgJson[fondo].img})` }}>
      <img src={laCosaSvg} alt={`Planet ${fondo}`} className="planetSvg"/>
      <Card phrasesInfo={phrases[phraseViwe]}/>
      <Button changePhrase = {changePhraseAndFondo}/>
    </div>
  )
}

export default App
