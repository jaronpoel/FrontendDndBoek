const STORAGE_KEY = 'dndbook.characters'

const defaultCharacters = [
  {
    id: 'mira-thorn',
    name: 'Mira Thorn',
    ancestry: 'Wood Elf',
    characterClass: 'Ranger',
    level: 4,
    stats: { str: 10, dex: 16, con: 13, int: 12, wis: 15, cha: 8 },
    detail: 'Verhaal van Matthijs',
  },
  {
    id: 'bram-stoneward',
    name: 'Bram Stoneward',
    ancestry: 'Mountain Dwarf',
    characterClass: 'Paladin',
    level: 3,
    stats: { str: 16, dex: 10, con: 14, int: 10, wis: 12, cha: 14 },
    detail: 'Verhaal van Bart',
  },
]

export function getCharacters() {
  try {
    const storedCharacters = localStorage.getItem(STORAGE_KEY)
    return storedCharacters ? JSON.parse(storedCharacters) : defaultCharacters
  } catch {
    return defaultCharacters
  }
}

export function addCharacter(character) {
  const characters = [...getCharacters(), { ...character, id: crypto.randomUUID() }]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters))
}