import AppHeader from '../components/AppHeader.jsx'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createCharacter } from '../controllers/characterController.js'

function AddCharacter() {
  const navigate = useNavigate()
  const [formError, setFormError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const error = createCharacter(new FormData(event.currentTarget))
    if (error) {
      setFormError(error)
      return
    }

    navigate('/collection')
  }

  return (
    <div className="app-shell">
      <AppHeader />

      <main className="container workspace">
        <h1>Add Character</h1>

        <form className="character-form" onSubmit={handleSubmit}>
          <div className="character-form-heading">
            <div>
              <h2>Character details</h2>
              <p>Give your adventurer a name, lineage, and a place in the party.</p>
            </div>
            <span className="required-note">* Required</span>
          </div>

          <div className="character-form-grid">
            <div className="character-field character-field-wide">
              <label htmlFor="character-name">Character name <span>*</span></label>
              <input
                className="form-control"
                id="character-name"
                name="name"
                placeholder="e.g. Mira Thorn"
                autoComplete="off"
                required
              />
            </div>

            <div className="character-field">
              <label htmlFor="character-ancestry">Ancestry / race <span>*</span></label>
              <input
                className="form-control"
                id="character-ancestry"
                name="ancestry"
                placeholder="e.g. Wood Elf"
                required
              />
            </div>

            <div className="character-field">
              <label htmlFor="character-class">Class <span>*</span></label>
              <input
                className="form-control"
                id="character-class"
                name="characterClass"
                placeholder="e.g. Ranger"
                required
              />
            </div>

            <div className="character-field character-field-level">
              <label htmlFor="character-level">Level <span>*</span></label>
              <input
                className="form-control"
                id="character-level"
                name="level"
                type="number"
                min="1"
                max="20"
                defaultValue="1"
                required
              />
              <small>Choose a level from 1 to 20.</small>
            </div>

            <fieldset className="character-stats character-field-wide">
              <legend>Ability scores</legend>
              <div className="character-stats-grid">
                {[
                  ['str', 'STR'],
                  ['dex', 'DEX'],
                  ['con', 'CON'],
                  ['int', 'INT'],
                  ['wis', 'WIS'],
                  ['cha', 'CHA'],
                ].map(([ability, label]) => (
                  <div className="character-stat-field" key={ability}>
                    <label htmlFor={`character-${ability}`}>{label}</label>
                    <input
                      className="form-control"
                      id={`character-${ability}`}
                      name={ability}
                      type="number"
                      min="1"
                      max="30"
                      defaultValue="10"
                      required
                    />
                  </div>
                ))}
              </div>
            </fieldset>

            <div className="character-field character-field-wide">
              <label htmlFor="character-detail">Background or story</label>
              <textarea
                className="form-control"
                id="character-detail"
                name="detail"
                rows="4"
                placeholder="Where did they come from? What are they searching for?"
              />
            </div>
          </div>

          {formError && <p className="character-form-error" role="alert">{formError}</p>}

          <div className="character-form-actions">
            <Link className="character-cancel" to="/collection">Cancel</Link>
            <button className="btn btn-primary" type="submit">Add to collection</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default AddCharacter