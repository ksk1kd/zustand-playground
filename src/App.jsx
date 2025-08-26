import { Game } from './components/Game'
import { Person } from './components/Person'

function App() {
  return (
    <>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gap: '80px',
          }}
        >
          <div>
            <Game />
          </div>
          <div>
            <Person />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
