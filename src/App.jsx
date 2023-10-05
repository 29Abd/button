import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { button1 } from './components/button'
import { useState } from 'react'

function App({ texto }) {
  const [estado, setEstado] = useState("Verdadero")
  return (
    <>
      <div>
        <h1>
          {estado}

        </h1>

        <button onClick={() => {
          if (estado == "Verdadero") {
            setEstado("Falso");
          } else {
            setEstado("Verdadero");
          }

        }}
        >
          Cambiar Estado
        </button>
        <button1 texto={"Puchame"}></button1>

      </div>
    </>
  );
}

export default App;
