import AppHeader from '../components/AppHeader.jsx'

const characters = [
  {
    name: 'Mira Thorn',
    ancestry: 'Wood Elf',
    characterClass: 'Ranger',
    level: 4,
    detail: 'A quiet pathfinder with an uncanny sense for old trails.',
  },
  {
    name: 'Bram Stoneward',
    ancestry: 'Mountain Dwarf',
    characterClass: 'Paladin',
    level: 3,
    detail: 'A steadfast guardian sworn to protect the overlooked.',
  },
]

function Collection() {
  return (
    <div className="app-shell">
      <AppHeader />

      <main className="container workspace">
        <h1>Collection</h1>
        <div className="row g-4 character-grid">
          {characters.map((character) => (
            <div className="col-12 col-md-6" key={character.name}>
              <article className="card character-card h-100">
                <div className="card-body">
                  <p className="character-level">Level {character.level}</p>
                  <h2 className="character-name">{character.name}</h2>
                  <p className="character-type">
                    {character.ancestry} <span aria-hidden="true">/</span>{' '}
                    {character.characterClass}
                  </p>
                  <p className="character-detail">{character.detail}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Collection