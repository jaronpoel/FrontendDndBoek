import { addCharacter, getCharacters } from '../models/characters.js'

const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha']

export async function getCharacterCollection() {
  return getCharacters()
}

export async function getCharacterById(id) {
  const characters = await getCharacters()
  return characters.find((character) => character.id === id) ?? null
}

export function createCharacter(formData) {
  const name = formData.get('name').trim()
  const ancestry = formData.get('ancestry').trim()
  const characterClass = formData.get('characterClass').trim()
  const level = Number(formData.get('level'))
  const stats = Object.fromEntries(
    abilities.map((ability) => [ability, Number(formData.get(ability))]),
  )

  if (!name || !ancestry || !characterClass) {
    return 'Fill in the name, ancestry, and class to continue.'
  }

  if (!Number.isInteger(level) || level < 1 || level > 20) {
    return 'Level must be a whole number from 1 to 20.'
  }

  if (Object.values(stats).some((score) => !Number.isInteger(score) || score < 1 || score > 30)) {
    return 'Each ability score must be a whole number from 1 to 30.'
  }

  addCharacter({
    name,
    ancestry,
    characterClass,
    level,
    stats,
    detail: formData.get('detail').trim() || 'No background added yet.',
  })

  return null
}

export function getAbilityModifier(score) {
  return Math.floor((Number(score) - 10) / 2)
}