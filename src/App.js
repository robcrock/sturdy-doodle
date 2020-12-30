import { useState } from "react"
// Import the data
import data from "./assets/utils"
// Import the styles
import "./App.css"

function App() {
  // State
  const [dashboards, setDashboards] = useState(data())
  const [currentDashboard, setCurrentDashboard] = useState(dashboards[0])

  console.log(currentDashboard)

  return <div className="App"></div>
}

export default App
