// @components
import { Display } from '~/components'

// @container
import { Keypad } from '../keypad'

// @styles
import "./styles.css"

export const Calculator = () => {
    return (
        <div className="calculator__container">
            <Display />
            <Keypad />
        </div>
    )
}
