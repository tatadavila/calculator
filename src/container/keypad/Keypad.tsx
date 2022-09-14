// @components
import { Button } from '~/components'

// @styles
import './styles.css'

// @contants
import { buttons } from '~/utils/constants'

export const Keypad: React.FC = () => {
    return (
        <div className="keypad__container">
            {buttons?.map((button, index) => {
                return (
                    <Button
                        color={button.color}
                        style={`item${index + 1}`}
                        key={index}
                        value={button.value}
                    />
                )
            })}
        </div>
    )
}
