import { InformationT } from '../types/information.type'

export interface UseCalculatorI {
    addInformation: (newInfo: InformationT) => void
    calculateLast: () => void
    calculateMedium: () => void
    calculateNew: () => void
    clearInformation: () => void
    handleClick: (e: any) => void
    information: InformationT
}
