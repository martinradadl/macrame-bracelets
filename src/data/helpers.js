
export const priceCalculator = (knot,pattern,isInStock,threadNum) => {
    const patternFound = knot.patterns.find(elem => {
        return elem.name === pattern
    })
    if(knot.name === "Combinado") return patternFound.price
    const discount = isInStock ? 0.8 : 1
    return `$${knot.price*patternFound.mult*(threadNum ? threadNum :1)*discount}`
}