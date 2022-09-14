// @vendors
import { useContext } from 'react'

// @context
import CalculatorContext from '~/context'

// @styles
import './styles.css'

export const Display: React.FC = () => {
    const { information } = useContext(CalculatorContext)

    return (
        <input
            defaultValue={0}
            min={0}
            type="text"
            value={information.value === '' ? 0 : information.value}
        />
    )
}
