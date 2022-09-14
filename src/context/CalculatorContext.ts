// @vendors
import React, { createContext } from 'react'

// @interfaces
import { InformationT, UseCalculatorI } from '~/utils/interfaces'

const DEFAULT_CALCULATOR_MANAGER_CONTEXT: UseCalculatorI = {
    addInformation: (newInfo: InformationT) => {},
    calculateLast: () => {},
    calculateMedium: () => {},
    calculateNew: () => {},
    clearInformation: () => {},
    handleClick: (e: any) => {},
    information: {} as InformationT,
}

const CalculatorContext: React.Context<UseCalculatorI> = createContext(
    DEFAULT_CALCULATOR_MANAGER_CONTEXT,
)

export default CalculatorContext
