import { invertValue, InvertValueT } from "./i18nUtils"
import { Direction } from "./types"
import { useEffect, useState } from "react"

const useInvertValue = <T extends InvertValueT>(
  /** Please pass in a memoized value. */
  value: T,
  /** inverts the provided values recursively when currentDirection != invertMode */
  invertMode: Direction = "rtl"
): T => {
  const [stateValue, setStateValue] = useState(
    invertValue(value, invertMode)
  )

  useEffect(() => {
    setStateValue(invertValue(value, invertMode))
  }, [value, invertMode])

  return stateValue
}

export default useInvertValue
