const calculateStrength = require('./calculateStrength')
test('Pudding should have score 2 from lower & uppercase letters',()=>{
    let word = 'Pudding'
    expect(calculateStrength(word).score).toEqual(2)
    expect(calculateStrength(word).hasLowerCase).toEqual(true)
    expect(calculateStrength(word).hasUpperCase).toEqual(true)
    expect(calculateStrength(word).hasNumber).toEqual(false)
    expect(calculateStrength(word).hasNonAlphaNumeric).toEqual(false)
    expect(calculateStrength(word).isOver8char).toEqual(false)
    expect(calculateStrength(word).isOver12char).toEqual(false)
})

test('Az1-56789112---, score 6, all factors',()=>{
    let word = 'Az1-56789112---'
    expect(calculateStrength(word).score).toEqual(6)
    expect(calculateStrength(word).hasLowerCase).toEqual(true)
    expect(calculateStrength(word).hasUpperCase).toEqual(true)
    expect(calculateStrength(word).hasNumber).toEqual(true)
    expect(calculateStrength(word).hasNonAlphaNumeric).toEqual(true)
    expect(calculateStrength(word).isOver8char).toEqual(true)
    expect(calculateStrength(word).isOver12char).toEqual(true)
})