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

    let newFondo = Math.floor(Math.random()*4);
    while (newFondo === fondo) {
      newFondo = Math.floor(Math.random()*4)
    }
    setFondo(newFondo)
    
  }


  
  return (
    <div className="App" style={{backgroundImage: `url(${imgJson[fondo].img})`}}>
      <img src={laCosaSvg} alt={`Planet ${fondo}`} className="planetSvg"/>
      <h1>INFOGLAXY</h1>
      <Card phrasesInfo={phrases[phraseViwe]}/>
      <Button changePhrase = {changePhraseAndFondo}/>
    </div>
  )
}

export default App
