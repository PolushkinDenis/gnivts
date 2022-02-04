import React, { useState } from 'react'
import {endings} from '../data/endings'
import {exceptions} from '../data/exceptions'
 


export default function useInflect() {
    const [result, setResult] = useState('')
    const inflect = (noun, caseOfNoun) => {
        const nounInLowerCase = noun.toLowerCase() 
        let newNoun = ''
        exceptions.map((exception) => {
            if(exception === nounInLowerCase){
                newNoun += "Несклоняемое: " + exception
            }
        })
        if(newNoun === ''){
            for (let ending in endings) {
                if((nounInLowerCase.length === 3) && (ending === nounInLowerCase.slice(-3))){
                    newNoun += nounInLowerCase.slice(0, -3) + endings[ending][caseOfNoun]
                }
                if ((nounInLowerCase.length > 3) && (ending === nounInLowerCase.slice(-3))) {                       
                    newNoun += nounInLowerCase.slice(0, -3) + endings[ending][caseOfNoun]
                }              
            }
        }       
        if (newNoun === '') {
            for (let ending in endings) {
                if ((nounInLowerCase.length > 2) && (ending === nounInLowerCase.slice(-2))) {
                    newNoun += nounInLowerCase.slice(0, -2) + endings[ending][caseOfNoun]
                }
            }
            if (newNoun === '') {
                for (let ending in endings) {
                    if (ending === nounInLowerCase.slice(-1)) {
                        newNoun += nounInLowerCase.slice(0, -1) + endings[ending][caseOfNoun]
                    }
                }
            }
        }
        setResult(newNoun)
    }

    return{
        result,
        inflect 
    }
}