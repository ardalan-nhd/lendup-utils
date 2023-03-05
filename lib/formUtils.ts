import { FormState } from "react-hook-form"

export const hasErrors = (errors: Object): boolean => {
  return Object.keys(errors).length > 0
}

export const allDirty = (dirtyFields: Object, fieldCount: number): boolean => {
  return Object.keys(dirtyFields).length === fieldCount
}

export const shouldDisable = (formState: FormState<any>, fieldCount: number) => {
  return hasErrors(formState.errors) || !allDirty(formState.dirtyFields, fieldCount)
}
