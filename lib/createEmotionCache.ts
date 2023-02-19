import createCache from "@emotion/cache"
import { prefixer } from "stylis"
import stylisRTLPlugin from "stylis-plugin-rtl"
import { Direction } from "./types"

const isBrowser = typeof document !== "undefined"

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache(direction: Direction = "rtl") {
  let insertionPoint

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    ) as HTMLElement
    insertionPoint = emotionInsertionPoint ?? undefined
  }

  return createCache({
    key: direction === "rtl" ? "mui-style-rtl" : "mui-style-ltr",
    insertionPoint,
    stylisPlugins: direction === "rtl" ? [prefixer, stylisRTLPlugin] : []
  })
}
