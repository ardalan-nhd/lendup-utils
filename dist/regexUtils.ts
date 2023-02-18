type RegexConcatType = (...args: Array<RegExp | string>) => RegExp

export const getDigitRegex = (n: number): RegExp => {
  return new RegExp(`(${n}|[\\u06F${n}]|[\\u066${n}])`)
}

export const digitRegex = /([\u06F0-\u06F9]|[\u0660-\u0669]|\d)/

export const regexConcat: RegexConcatType = (...args) => {
  return new RegExp(
    args.map((arg) => (typeof arg === "string" ? arg : arg.source)).join("")
  )
}
