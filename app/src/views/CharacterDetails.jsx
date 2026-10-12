import { Link, useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader.jsx'
import { getCharacters } from '../models/characters.js'

const abilities = [
  ['str', 'Strength'],
  ['dex', 'Dexterity'],
  ['con', 'Constitution'],
  ['int', 'Intelligence'],
  ['wis', 'Wisdom'],
  ['cha', 'Charisma'],
]

function formatModifier(score) {
  const modifier = Math.floor((Number(score) - 10) / 2)
  return `${modifier >= 0 ? '+' : ''}${modifier}`
}

function CharacterDetails() {
  const { id } = useParams()
  const character = getCharacters().find((entry) => entry.id === id)

  return (
    <div className="app-shell">
      <AppHeader />

      <main className="container workspace character-sheet">
        <Link className="character-back-link" to="/collection">Back to collection</Link>

        {character ? (
          <>
            <header className="character-sheet-header">
              <p className="workspace-eyebrow">Level {character.level} adventurer</p>
              <h1>{character.name}</h1>
              <p className="character-sheet-type">
                {character.ancestry} <span aria-hidden="true">/</span> {character.characterClass}
              </p>
            </header>

            <section className="character-sheet-section" aria-labelledby="ability-scores-title">
              <div className="character-sheet-section-heading">
                <p className="workspace-eyebrow">Character sheet</p>
                <h2 id="ability-scores-title">Ability scores</h2>
              </div>
              {character.stats ? (
                <dl className="character-sheet-stats">
                  {abilities.map(([key, label]) => {
                    const score = character.stats[key]
                    return (
                      <div className="character-sheet-stat" key={key}>
                        <dt>{label}</dt>
                        <dd>{score}</dd>
                        <span>Modifier {formatModifier(score)}</span>
                      </div>
                    )
                  })}
                </dl>
              ) : (
                <p className="character-sheet-empty">No ability scores have been added.</p>
              )}
            </section>

            <section className="character-sheet-section" aria-labelledby="background-title">
              <div className="character-sheet-section-heading">
                <p className="workspace-eyebrow">Story</p>
                <h2 id="background-title">Background</h2>
              </div>
              <p className="character-sheet-background">
                {character.detail || 'No background added yet.'}
              </p>
            </section>
          </>
        ) : (
          <section className="character-not-found">
            <p className="workspace-eyebrow">Character unavailable</p>
            <h1>Character not found</h1>
            <p>This character may have been removed from your collection.</p>
          </section>
        )}
      </main>
    </div>
  )
}

export default CharacterDetails