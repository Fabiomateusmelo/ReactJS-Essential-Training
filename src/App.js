import './App.css'
import { useState, useEffect, useReducer, useRef } from 'react'

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

  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <div className="App">
      <h1>A emoção primária é {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>
      <h2>A emoção secundária é {secondary}.</h2>
      <button onClick={() => setSecondary('grateful')}>Grateful</button>

      <br></br>
      <br></br>

      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? 'Verificado' : ' Não verificado'}</label>

      <br></br>
      <br></br>

      <form onSubmit={submit}>
        <input ref={txtTitle} type="text" placeholder='color title...' />
        <input ref={hexColor} type="color" />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default App
