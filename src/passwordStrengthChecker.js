import React from 'react'
import './passwordStrengthChecker.scss'
const calculateStrength = require('./calculateStrength')

export default class PasswordStrengthChecker extends React.Component {
    state = {
        score: 0
    }
    
    updatePasswordState = (event) => {
        const {
            score,
            hasLowerCase,
            hasUpperCase,
            hasNumber,
            hasNonAlphaNumeric,
            isOver8char,
            isOver12char
        } = calculateStrength(event.target.value)
        this.setState({
            score,
            hasLowerCase,
            hasUpperCase,
            hasNumber,
            hasNonAlphaNumeric,
            isOver8char,
            isOver12char
        })
    }

    scoreRating = () => {
        switch (this.state.score) {
            case 3:
            case 4:
                return 'Normal'
            case 5:
            case 6:
                return 'Strong'
            case 0:
            case 1:
            case 2:
            default:
                return 'Weak'
        } 
    }

    render(){
        const {score} = this.state
        let diameter = `${score * 50/6 }vmin`
        let marginTopForBubble = `${(50 - (score * 50/6))/2}vmin`
        let marginTopForText = (score===0) ? '31.5vmin' : `${(50 - (score * 50/6))/2}vmin`
        let fontSize = `8vmin`

        return (
            <div className="passwordChecker">
                <input onChange={(event)=>this.updatePasswordState(event)} type="password"/>
                <div className="maxStrengthCircle">
                    <div style={{
                        fontSize,
                        margin: `0 auto`,
                        marginTop: `${marginTopForBubble}`,
                        width: diameter,
                        lineHeight: diameter,
                        height: diameter,
                        borderRadius: '50%',
                        backgroundColor: '#2559a2'
                         }}></div>
                </div>
                <div style={{
                    marginTop: `-${marginTopForText}`,
                    height: '0'
                }}>{this.scoreRating()}</div>
            </div>
        )
    }
}