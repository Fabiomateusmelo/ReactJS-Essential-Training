import './App.css'
import { useState, useEffect, useReducer, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ]
}

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  )
}

export function App() {
  const [emotion, setEmotion] = useState('happy')
  const [secondary, setSecondary] = useState('tired')

  useEffect(() => {
    console.log(`Essa é a emoção ${emotion}`)
  }, [emotion])
  useEffect(() => {
    console.log(`Essa é a emoção ${secondary}`)
  }, [secondary])

  const [checked, setChecked] = useReducer(checked => !checked, false)

  const txtTitulo = useRef()
  const hexCor = useRef()

  const enviar = e => {
    e.preventDefault()
    const titulo = txtTitulo.current.value
    const cor = hexCor.current.value
    alert(`${titulo}, ${cor}`)
    txtTitulo.current.value = ''
    hexCor.current.value = ''
  }

  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('#000000')
  const submit = e => {
    e.preventDefault()
    alert(`${titleProps.value}, ${colorProps.value}`)
    resetTitle()
    resetColor()
  }

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/users/Fabiomateusmelo`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null

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
        <input ref={txtTitulo} type="text" placeholder="color title..." />
        <input ref={hexCor} type="color" />
        <button>ADD</button>
      </form>

      <br></br>

      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="color title..." />
        <input {...colorProps} type="color" />
        <button>ADD</button>
      </form>

      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />

      <Home />
    </div>
  )
}

export default App
