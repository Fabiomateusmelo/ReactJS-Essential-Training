import './App.css'
import { useState, useEffect, useReducer } from 'react'

function App() {
  const [emotion, setEmotion] = useState('happy')
  const [secondary, setSecondary] = useState('tired')

  useEffect(() => {
    console.log(`Essa é a emoção ${emotion}`)
  }, [emotion])
  useEffect(() => {
    console.log(`Essa é a emoção ${secondary}`)
  }, [secondary])

  const [checked, setChecked] = useReducer(checked => !checked, false)

  return (
    <div className="App">
      <h1>A emoção primária é {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>
      <h2>A emoção secundária é {secondary}.</h2>
      <button onClick={() => setSecondary('grateful')}>Grateful</button>
      <br></br>
      <br></br>
      <br></br>
      
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? 'checked' : ' not checked'}</label>
    </div>
  )
}

export default App
