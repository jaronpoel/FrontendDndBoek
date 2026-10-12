import AppHeader from '../components/AppHeader.jsx'
import { Link } from 'react-router-dom'
import useCharacters from '../hooks/useCharacters.js'

function Collection() {
  const { characters, isLoading, error } = useCharacters()

  return (
    <div className="app-shell">
      <AppHeader />

      <main className="container workspace">
        <h1>Collection</h1>
        {isLoading && <p role="status">Loading characters...</p>}
        {error && <p role="alert">Unable to load characters: {error}</p>}
        {!isLoading && !error && characters.length === 0 && (
          <p>No characters are available yet.</p>
        )}
        {!isLoading && !error && characters.length > 0 && (
          <div className="row g-4 character-grid">
            {characters.map((character) => (
              <div className="col-12 col-md-6" key={character.id}>
                <Link className="character-card-link" to={`/character/${character.id}`}>
                  <article className="card character-card h-100">
                    <div className="card-body">
                      <p className="character-level">Level {character.level}</p>
                      <h2 className="character-name">{character.name}</h2>
                      <p className="character-type">
                        {character.ancestry} <span aria-hidden="true">/</span>{' '}
                        {character.characterClass}
                      </p>
                      {character.stats && (
                        <dl className="character-ability-scores">
                          {[
                            ['STR', character.stats.str],
                            ['DEX', character.stats.dex],
                            ['CON', character.stats.con],
                            ['INT', character.stats.int],
                            ['WIS', character.stats.wis],
                            ['CHA', character.stats.cha],
                          ].map(([ability, score]) => (
                            <div className="character-ability-score" key={ability}>
                              <dt>{ability}</dt>
                              <dd>{score}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <p className="character-detail">{character.detail}</p>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Collection