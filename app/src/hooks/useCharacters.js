import { useEffect, useState } from 'react'
import { getCharacterCollection } from '../controllers/characterController.js'

function useCharacters() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    getCharacterCollection()
      .then((loadedCharacters) => {
        if (isMounted) {
          setCharacters(loadedCharacters)
          setIsLoading(false)
        }
      })
      .catch((loadError) => {
        if (isMounted) {
          setError(loadError.message)
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { characters, isLoading, error }
}

export default useCharacters
