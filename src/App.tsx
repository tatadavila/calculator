// @styles
import './App.css'

// @containers
import { Calculator } from './container'

// @provider
import CalculatorManagerProvider from './providers'

function App() {
    return (
        <div className="App">
            <CalculatorManagerProvider>
                <Calculator />
            </CalculatorManagerProvider>
        </div>
    )
}

export default App
