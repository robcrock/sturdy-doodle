import { useState } from "react"
// Import the data
import data from "./assets/utils"
// Import components
import Viz from "./components/Viz"
// Import the styles
import "./App.css"

function App() {
  // State
  const [dashboards, setDashboards] = useState(data())
  const [currentDashboard, setCurrentDashboard] = useState(dashboards[0])

  console.log(currentDashboard)

  return (
    <div className="App">
      <Viz currentDashboard={currentDashboard} />
    </div>
  )
}

export default App
