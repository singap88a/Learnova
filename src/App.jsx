import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* NavBar */}
      <nav style={{
        backgroundColor: '#242424',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <h2 🚀 My React App style={{
          display : 'inline',
        }}> </h2>
        <div>

        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
        </div>
      </nav>

      <div style={{ padding: '2rem' }}>        
        <button onClick={() => setCount(count + 1)}>
          You clicked {count} times
        </button>
      </div>
    </>
  )
}

export default App
