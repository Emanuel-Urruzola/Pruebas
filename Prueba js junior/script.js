const numbers = [3,4,5,6,7,8,5,444,1]
const numbers2 = []

// Version 1: Sumar el menor y el mayor de un array de números
const maxMin = (numbers) => {
    if (numbers.length === 0) return 0
    const min = numbers.reduce((acc, number) => number < acc ? number : acc)
    const max = numbers.reduce((acc, number) => number > acc ? number : acc)
    return min+max
}

// Version 2: Hacer la función mas eficiente
const maxMinEfficient = (numbers) => {
    if (numbers.length === 0) return 0
    const minimum = (number) => {
        if(number.length===1) return number[0]
        if(number.length===2) return Math.min(number[0], number[1])

        const halfValue = Math.floor(number.length / 2)
        const leftHalf = number.slice(0,halfValue)
        const rightHalf = number.slice(halfValue)

        return Math.min( minimum(leftHalf), minimum(rightHalf) )
    }

    const maximum = (number) => {
        if(number.length===1) return number[0]
        if(number.length===2) return Math.max(number[0], number[1])

        const halfValue = Math.floor(number.length / 2)
        const leftHalf = number.slice(0,halfValue)
        const rightHalf = number.slice(halfValue)

        return Math.max( maximum(leftHalf), maximum(rightHalf) )
    }

    return minimum(numbers) + maximum(numbers)
}

// Version 2.1: Decidí hacerlo con funciones auxiliares para que sea mas legible
const isEmpty = (number) => number.length === 0
const hasOnlyOneElement = (number) => number.length === 1
const hasOnlyTwoElement = (number) => number.length === 2
const firstElement = (number) => number[0]
const secondElement = (number) => number[1]
const getHalfValue = (number) => Math.floor(number.length / 2)
const getLeftHalf = (number,halfValue) => number.slice(0,halfValue)
const getRightHalf = (number,halfValue) => number.slice(halfValue)

const maxMinEfficient2 = (numbers) => {
    if (isEmpty(numbers)) return 0

    const minimum = (number) => {
        if(hasOnlyOneElement(number)) return firstElement(number)
        if(hasOnlyTwoElement(number)) return Math.min(firstElement(number), secondElement(number))

        const halfValue = getHalfValue(number)
        const leftHalf = getLeftHalf(number, halfValue)
        const rightHalf = getRightHalf(number, halfValue)

        return Math.min( minimum(leftHalf), minimum(rightHalf) )
    }

    const maximum = (number) => {
        if(hasOnlyOneElement(number)) return firstElement(number)
        if(hasOnlyTwoElement(number)) return Math.max(firstElement(number), secondElement(number))

        const halfValue = getHalfValue(number)
        const leftHalf = getLeftHalf(number, halfValue)
        const rightHalf = getRightHalf(number, halfValue)

        return Math.max( maximum(leftHalf), maximum(rightHalf) )
    }

    return minimum(numbers) + maximum(numbers)
}

// Version 2.2: minimum y maximum usan la misma lógica, se puede hacer una sola función pasando como parámetro la función Math.min o Math.max
const maxMinOnly1EfficientFunction = (numbers) => {
    if (isEmpty(numbers)) return 0;

    const findExtremum = (number, extremumToFind) => {
        if (hasOnlyOneElement(number)) return firstElement(number);
        if (hasOnlyTwoElement(number)) return extremumToFind(firstElement(number), secondElement(number));

        const halfValue = getHalfValue(number)
        const leftHalf = getLeftHalf(number, halfValue)
        const rightHalf = getRightHalf(number, halfValue)

        return extremumToFind(findExtremum(leftHalf, extremumToFind) , findExtremum(rightHalf, extremumToFind));
    }

    const minimum = findExtremum(numbers, Math.min);
    const maximum = findExtremum(numbers, Math.max);

    return minimum + maximum;
}

console.log(maxMin(numbers))
console.log(maxMin(numbers2))
console.log(maxMinEfficient(numbers))
console.log(maxMinEfficient(numbers2))
console.log(maxMinEfficient2(numbers))
console.log(maxMinEfficient2(numbers2))
console.log(maxMinOnly1EfficientFunction(numbers))
console.log(maxMinOnly1EfficientFunction(numbers2))



