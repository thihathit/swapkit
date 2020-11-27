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
