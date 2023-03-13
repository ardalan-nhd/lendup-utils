type SetCookie = (
  key: string,
  value: string,
  days?: number | "session",
  path?: string
) => string

type GetCookie = (name: string, cookie: string | undefined) => string

export const setCookie: SetCookie = (key, value, days = 365, path = "/") => {
  let expires = ""
  if (days !== "session") {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  const cookie = key + "=" + (value || "") + expires + "; path=" + path
  document.cookie = cookie
  return cookie
}

export const getCookie: GetCookie = (name, cookie) => {
  if (!cookie) return ""
  const c = cookie
    .split(";")
    .find((pair) =>
      (pair.startsWith(" ") ? pair.slice(1) : pair).startsWith(name + "=")
    )
  return c?.slice(name.length + (c.startsWith(" ") ? 2 : 1)) ?? ""
}

export const eraseCookie = (name: string) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
