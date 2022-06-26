/** ********************************************************************
 * non-Browser environment methods
 */
export type TypeMeyer = {
  encode: typeof encodeURIComponent
  decode: typeof decodeURIComponent
}
export const meyer: TypeMeyer = {
  encode: value =>
    encodeURIComponent(value).replace(/'/g, '%27').replace(/"/g, '%22'),
  decode: value => decodeURIComponent(value.replace(/\+/g, ' '))
}

export type TypePxToEm = {
  relation: number
  px?: number
  em?: number
}
export const pxToEm = ({ relation, px, em }: TypePxToEm) => {
  if (px !== undefined) {
    const value = px / relation

    if (isNaN(value)) return 0

    return value
  }

  if (em !== undefined) {
    const value = em * relation

    if (isNaN(value)) return 0

    return value
  }
}

/** ********************************************************************
 * Browser environment methods
 */
export const fixHtml = (value: string) => {
  const node = document.createElement('DIV')

  node.innerHTML = value

  const result = node.innerHTML

  node.remove()

  return result
}

export const validHtml = (value: string) => {
  return value === fixHtml(value)
}
