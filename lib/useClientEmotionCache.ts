import { getDirection } from "./i18nUtils"
import { useEffect, useState } from "react"
import createEmotionCache from "./createEmotionCache"
import { i18n } from "next-i18next"

const useClientEmotionCache = () => {
  const locale = i18n?.language
  const [clientEmotionCache, setCache] = useState(
    createEmotionCache(getDirection())
  )
  useEffect(() => {
    setCache(createEmotionCache(getDirection()))
    document.querySelector("html")!.dir = getDirection()
  }, [locale])

  return clientEmotionCache
}

export default useClientEmotionCache
