const add = (num1,num2) => {
    if(!num1) return console.warn("No num1 EXAMPLE console.log(add(1,2)) OUTPUT: 3")
    if(!num2) return console.warn("No num1 EXAMPLE console.log(add(1,2)) OUTPUT: 3")
    return +num1 + +num2
}
module.exports.add
const subtract = (num3,num4) => {
    if(!num3) return console.warn("No num1 for subtract! EXAMPLE: console.log(subtract(4,3)) OUTPUT: 1")
    if(!num4) return console.warn("No num2 for subtract! EXAMPLE: console.log(subtract(4,3)) OUTPUT: 1")
return -num3 + -num4
}
module.exports.subtract

const multiple = (num5,num6) => {
    if(!num5) return console.warn("No num1 for multiple! EXAMPLE: console.log(multiple(1,2)) OUTPUT: 2")
    if(!num6) return console.warn("No num2 for multiple! EXAMPLE: console.log(multiple(2,1)) OUTPUT: 2")
    return num5 * num6;
}
module.exports.multiple
const divide = (num7,num8) => {
    if(!num7) return console.warn("No num1 for divide! EXAMPLE: console.log(multiple(10,2)) OUTPUT: 5")
    if(!num8) return console.warn("No num2 for divide! EXAMPLE: console.log(multiple(10,2)) OUTPUT: 5")
    return num7 / num8
}
module.exports.divide
console.log(divide(10,2))