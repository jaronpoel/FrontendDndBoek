import { Link } from 'react-router-dom'

function AppHeader() {
  return (
    <header className="app-header">
      <Link className="brand" to="/">
        DndBoek
      </Link>

      <Link className="brand" to="/collection">
        Collection
      </Link>

      <Link className="brand" to="/add-character">
        Add Character
      </Link>
      <span className="badge rounded-pill">Logout</span>
    </header>
  )
}

export default AppHeader