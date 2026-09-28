import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppView from './views/AppView.jsx'
import Collection from './views/Collection.jsx'
import AddCharacter from './views/AddCharacter.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppView />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/add-character" element={<AddCharacter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
