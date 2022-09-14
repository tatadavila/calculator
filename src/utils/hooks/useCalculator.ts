// @vendors
import { useState } from 'react'

// interfaces
import { UseCalculatorI } from '../interfaces'

// @types
import { InformationT } from '../types'

export const useCalculator = (): UseCalculatorI => {
    const defaultInformationObject: InformationT = {
        lastValue: '',
        newValue: '',
        operator: '',
        total: '',
        value: '',
    }

    const [information, setInformation] = useState<InformationT>(
        defaultInformationObject,
    )

    const addInformation = (newInfo: InformationT) => {
        setInformation(newInfo)
    }

    const calculateLast = () => {
        switch (information.operator) {
            case '+':
                setInformation(prev => ({
                    ...prev,
                    total: information.total + information.lastValue,
                }))
                break
            case '-':
                setInformation(prev => ({
                    ...prev,
                    total: information.total - information.lastValue,
                }))
                break
            case '*':
                setInformation(prev => ({
                    ...prev,
                    total: information.total * information.lastValue,
                }))
                break
            case '/':
                setInformation(prev => ({
                    ...prev,
                    total: information.total / information.lastValue,
                }))
                break
        }
    }

    const calculateMedium = (): void => {
        switch (information.operator) {
            case '+':
                setInformation(prev => ({
                    ...prev,
                    total:
                        parseInt(information.newValue) +
                        parseInt(information.lastValue),
                }))
                break
            case '-':
                setInformation(prev => ({
                    ...prev,
                    total:
                        parseInt(information.newValue) -
                        parseInt(information.lastValue),
                }))
                break
            case 'x':
                setInformation(prev => ({
                    ...prev,
                    total:
                        parseInt(information.newValue) *
                        parseInt(information.lastValue),
                }))
                break
            case '/':
                setInformation(prev => ({
                    ...prev,
                    total:
                        parseInt(information.newValue) /
                        parseInt(information.lastValue),
                }))
                break
        }
        setInformation(prev => ({
            ...prev,
            newValue: '',
        }))
        return
    }

    const calculateNew = (): void => {
        switch (information.operator) {
            case '+':
                setInformation(prev => ({
                    ...prev,
                    total: information.total + parseInt(information.lastValue),
                }))
                break
            case '-':
                setInformation(prev => ({
                    ...prev,
                    total: information.total - parseInt(information.lastValue),
                }))
                break
            case 'x':
                setInformation(prev => ({
                    ...prev,
                    total: information.total * parseInt(information.lastValue),
                }))
                break
            case '/':
                setInformation(prev => ({
                    ...prev,
                    total: information.total / parseInt(information.lastValue),
                }))
                break
        }

        setInformation(prev => ({
            ...prev,
            lastValue: information.newValue,
            newValue: '',
        }))
        return
    }

    const clearInformation = () => {
        setInformation(defaultInformationObject)
    }

    const handleClick = (e: any) => {
        console.log('INSIDE HC', e.target.value)

        switch (e.target.value) {
            case '=':
                if (information.value != '')
                    setInformation(prev => ({
                        ...prev,
                        newValue: information.value,
                    }))
                if (information.newValue != '' && information.lastValue != '')
                    calculateMedium()
                if (information.newValue === '' && information.total != '')
                    calculateLast()
                break
            default:
                if (information.total == '' && information.operator === '') {
                    setInformation(prev => ({
                        ...prev,
                        lastValue: information.value,
                        operator: e.target.value,
                    }))
                    return
                }
                setInformation(prev => ({
                    ...prev,
                    newValue: information.value,
                }))
                calculateNew()
                break
        }
        setInformation(prev => ({
            ...prev,
            value: '',
        }))
    }

    return {
        addInformation,
        calculateLast,
        calculateMedium,
        calculateNew,
        clearInformation,
        handleClick,
        information,
    }
}
