export const meyer = {
    encode: value => {
        return encodeURIComponent(value)
            .replace(/'/g, '%27')
            .replace(/"/g, '%22')
    },
    decode: value => {
        return decodeURIComponent(value.replace(/\+/g, ' '))
    },
}

export const pxToEm = ({ relation, px, em }) => {
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

export const fixHtml = string => {
    const node = document.createElement('DIV')

    node.innerHTML = string

    const result = node.innerHTML

    node.remove()

    return result
}

export const validHtml = string => {
    return string == fixHtml(string)
}
