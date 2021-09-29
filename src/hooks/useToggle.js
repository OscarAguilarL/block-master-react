import { useCallback, useState } from 'react'

export const useToggle = (initialValue = false) => {
  const [toggleValue, setToggleValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setToggleValue((value) => !value)
  }, [])

  const handleNavLinkClick = () =>
    toggleValue && setToggleValue((value) => !value)

  return {
    toggleValue,
    toggle,
    handleNavLinkClick,
  }
}
