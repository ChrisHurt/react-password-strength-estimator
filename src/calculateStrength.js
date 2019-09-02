var calculateStrength = (word) => {
    let score = 0
    let hasLowerCase = !!(word.search(/([a-z])/) !== -1)
    let hasUpperCase = !!(word.search(/([A-Z])/) !== -1)
    let hasNumber = !!(word.search(/(\d)/) !== -1)
    let hasNonAlphaNumeric = !!(word.search(/([\W])/) !== -1)
    let isOver8char = !!(word.length > 8)
    let isOver12char = !!(word.length > 12)
    if(hasLowerCase){
        score++
    }
    if(hasUpperCase){
        score++
    }
    if(hasNumber){
        score++
    }
    if(hasNonAlphaNumeric){
        score++
    }
    if(isOver8char){
        score++
    }
    if(isOver12char){
        score++
    }

    return {
        score,
        hasLowerCase,
        hasUpperCase,
        hasNumber,
        hasNonAlphaNumeric,
        isOver8char,
        isOver12char
    }
}

module.exports = calculateStrength