import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initialValue)
  ];
}

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

  const txtTitulo = useRef();
  const hexCor = useRef();

  const enviar = (e) => {
  e.preventDefault();
  const titulo = txtTitulo.current.value;
  const cor = hexCor.current.value
  alert(`${titulo}, ${cor}`);
  txtTitulo.current.value = "";
  hexCor.current.value = "";
  };

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
  e.preventDefault();
  alert(`${titleProps.value}, ${colorProps.value}`);
  resetTitle();
  resetColor();
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

      <form onSubmit={enviar}>
        <input ref={txtTitulo} type="text" placeholder='color title...' />
        <input ref={hexCor} type="color" />
        <button>ADD</button>
      </form>

      <br></br>

      <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input
        {...colorProps}
        type="color"
      />
      <button>ADD</button>
    </form>
    </div>
  );
}

export default App
