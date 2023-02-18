import { Direction } from "./types"
import { i18n } from "next-i18next"

type Locale = "en" | "fa" | (string & {})

type LocaleParam = Locale | undefined | (string & {})

type LocaledValue<T extends any> = {
  [key in Locale]: T
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
