// @context
import CalculatorContext from '../context'

// @hooks
import { useCalculator } from '~/utils/hooks'

const CalculatorManagerProvider = ({ children }: any) => {
    const {
        addInformation,
        calculateLast,
        calculateMedium,
        calculateNew,
        clearInformation,
        handleClick,
        information,
    } = useCalculator()

    return (
        <CalculatorContext.Provider
            value={{
                addInformation,
                calculateLast,
                calculateMedium,
                calculateNew,
                clearInformation,
                handleClick,
                information,
            }}
        >
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorManagerProvider
