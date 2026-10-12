const STORAGE_KEY = 'dndbook.characters'
const CHARACTERS_API_URL = '/api/characters/'

function getLocallyAddedCharacters() {
  try {
    const storedCharacters = localStorage.getItem(STORAGE_KEY)
    return storedCharacters ? JSON.parse(storedCharacters) : []
  } catch {
    return []
  }
}

export async function getCharacters() {
  const response = await fetch(CHARACTERS_API_URL)
  if (!response.ok) {
    throw new Error(`Could not load characters (HTTP ${response.status}).`)
  }

  const payload = await response.json()
  const apiCharacters = Array.isArray(payload) ? payload : payload.value
  if (!Array.isArray(apiCharacters)) {
    throw new Error('The characters API returned an unexpected response.')
  }

  const characters = apiCharacters.map((character) => ({
    id: String(character.id),
    name: character.name,
    ancestry: character.race,
    characterClass: character.class,
    level: character.level,
    stats: {
      str: character.strength,
      dex: character.dexterity,
      con: character.constitution,
      int: character.intelligence,
      wis: character.wisdom,
      cha: character.charisma,
    },
    detail: character.background,
  }))

  return [...characters, ...getLocallyAddedCharacters()]
}

export function addCharacter(character) {
  const characters = [
    ...getLocallyAddedCharacters(),
    { ...character, id: crypto.randomUUID() },
  ]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters))
}