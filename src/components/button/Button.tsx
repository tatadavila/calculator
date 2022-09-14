// @vendors
import { useContext } from 'react'

// @context
import CalculatorContext from '~/context'

// @interfaces
import { ButtonI } from '~/utils/interfaces'

// @styles
import './styles.css'

export const Button: React.FC<ButtonI> = ({ color, style, value }) => {
    const { handleClick } = useContext(CalculatorContext)
    return (
        <button className={`${style} ${color}`} onClick={handleClick}>
            {value}
        </button>
    )
}
