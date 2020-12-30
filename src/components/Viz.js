import { useState, useRef, useEffect } from "react"
const { tableau } = window

export default function Viz({ currentDashboard }) {
  const [viz, setViz] = useState(null)

  // Set up the arguments to pass into the Tableau Viz function
  const ref = useRef(null)
  const options = {
    hideTabs: true,
    hideToolbar: true,
    width: "900px",
    height: "540px",
  }

  // This function will be run on page load to initialize our viz.
  const initViz = () => {
    if (viz) {
      viz.dispose()
      setViz(null)
    }

    setViz(new tableau.Viz(ref.current, currentDashboard.url, options))
  }

  // Initialize viz when the page loads
  useEffect(initViz, [currentDashboard])

  return (
    <div className="viz-container">
      <h2>{currentDashboard.name}</h2>
      <h3>{currentDashboard.author}</h3>
      <div ref={ref}></div>
    </div>
  )
}
