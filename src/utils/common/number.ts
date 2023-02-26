export const toCurrency = (number: number, digit: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: digit,
        minimumFractionDigits: digit,
    }).format(number)
}

export const toNumber = (number: number, digit: number) => {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: digit,
        minimumFractionDigits: digit,
    }).format(number)
}