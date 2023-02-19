import { Direction } from "./types"
import i18n from "i18next"
import { clone } from "lodash"

type Locale = "en" | "fa" | (string & {})

type LocaleParam = Locale | undefined | (string & {})

type LocaledValue<T extends any> = {
  [key in Locale]: T
}

export type InvertValueT =
  | number
  | number[]
  | {
      [key: string]: InvertValueT
    }

export const getDirection = (locale?: LocaleParam): Direction => {
  return i18n?.dir(locale) || "rtl"
}

export const getLocaleTitle = (locale: LocaleParam) => {
  switch (locale) {
    case "en":
      return "English"
    case "fa":
      return "فارسی"
    default:
      return "فارسی"
  }
}

export const getValueByLocale = <T extends any>(value: LocaledValue<T> | undefined): T | null => {
  const locale = (i18n?.language || "fa") as Locale
  return value?.[locale] || null
}

export const invertValue = <T extends InvertValueT>(value: T, invertMode: Direction = "rtl"): T => {
  if (getDirection() === invertMode) return value
  if (typeof value === "number") {
    return -value as T
  } else if (Array.isArray(value)) {
    return value.map((v) => -v) as T
  } else {
    const newValue = clone(value)
    let key: keyof T
    for (key in value) {
      newValue[key] = invertValue(value[key] as T) as any
    }
    return newValue
  }
}
