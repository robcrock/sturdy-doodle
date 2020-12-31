import { useState } from "react"
// Import the data
import data from "./assets/utils"
// Import components
import Viz from "./components/Viz"
// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// Import the styles
import "./App.css"

function App() {
  // State
  const [dashboards, setDashboards] = useState(data())
  const [currentDashboard, setCurrentDashboard] = useState(dashboards[0])

  return (
    <div className="App">
      <Viz currentDashboard={currentDashboard} />
      <FontAwesomeIcon className="bars" icon={faBars} />
    </div>
  )
}

export default App
