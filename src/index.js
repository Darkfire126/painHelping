const add = (num1, num2) => {
    if(!num1) return TypeError("Please use 1,2 <Example> format")
    if(!num2) return TypeError("Please use 1,2 <Example> format")
    return +num1 + +num2
}

module.exports.add = add
console.log(add(1,2))