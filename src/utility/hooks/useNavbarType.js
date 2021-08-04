//** React Imports
import { useState } from 'react'


export const useNavbarType = () => {
  // ** State
  const [navbarType, setNavbarType] = useState(() => {
    try {
      return 'light'
    } catch (error) {
      // ** If error return initialValue
      console.log(error)
      return 'light'
    }
  })

  // ** Return a wrapped version of useState's setter function
  const setValue = value => {
    try {
      // ** Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(navbarType) : value

      // ** Set state
      setNavbarType(valueToStore)
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [navbarType, setValue]
}
