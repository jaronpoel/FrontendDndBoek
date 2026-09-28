import AppHeader from '../components/AppHeader.jsx'

function AppView() {
  return (
    <div className="app-shell">
      <AppHeader />

      <main className="container workspace">
        <h1>DNDBOOK</h1>
      </main>
    </div>
  )
}

export default AppView