import { isBrowser } from "./isBrowser"

export const numberTransformer = (data: any) => {
  if (isBrowser() && data instanceof FormData) {
    const newData = new FormData()
    let prevKey
    for (const key of data.keys()) {
      if (prevKey !== key) {
        const gotAll = data.getAll(key)
        gotAll.forEach((gotOne) => {
          if (gotOne instanceof File) {
            newData.append(key, gotOne)
          } else {
            newData.append(
              key,
              gotOne
                .replace(/۹|٩/g, "9")
                .replace(/۸|٨/g, "8")
                .replace(/۷|٧/g, "7")
                .replace(/۶|٦/g, "6")
                .replace(/۵|٥/g, "5")
                .replace(/۴|٤/g, "4")
                .replace(/۳|٣/g, "3")
                .replace(/۲|٢/g, "2")
                .replace(/۱|١/g, "1")
                .replace(/۰|٠/g, "0")
            )
          }
        })
      }
      prevKey = key
    }
    data = newData
  }
  if (!data || typeof data === "number" || typeof data === "function")
    return data
  if (typeof data === "string") {
    data = data
      .replace(/۹|٩/g, "9")
      .replace(/۸|٨/g, "8")
      .replace(/۷|٧/g, "7")
      .replace(/۶|٦/g, "6")
      .replace(/۵|٥/g, "5")
      .replace(/۴|٤/g, "4")
      .replace(/۳|٣/g, "3")
      .replace(/۲|٢/g, "2")
      .replace(/۱|١/g, "1")
      .replace(/۰|٠/g, "0")
    return data
  }
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = numberTransformer(data[i])
    }
    return data
  }
  if (typeof data === "object") {
    for (let key in data) {
      data[key] = numberTransformer(data[key])
    }
    return data
  }
}
