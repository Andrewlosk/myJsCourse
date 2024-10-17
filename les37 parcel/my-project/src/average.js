export const average = (numbers) => {
    const total = numbers.reduce((acc, num) => acc + num, 0)

    return total / numbers.length
}