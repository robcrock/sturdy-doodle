export default function ListItem({
  dashboard,
  dashboards,
  setDashboards,
  setCurrentDashboard,
  id,
}) {
  const dashboardSelectHandler = () => {
    setCurrentDashboard(dashboard)
    // Add active state
    const newDashboards = dashboards.map((dashboard) => {
      if (dashboard.id === id) {
        return {
          ...dashboard,
          active: true,
        }
      } else {
        return {
          ...dashboard,
          active: false,
        }
      }
    })

    setDashboards(newDashboards)
  }

  return (
    <div
      className={`list-item ${dashboard.active ? "selected" : ""}`}
      onClick={dashboardSelectHandler}
    >
      <img src={dashboard.image} alt={dashboard.name}></img>
      <div className="dashboard-description">
        <h3>{dashboard.name}</h3>
        <h4>{dashboard.author}</h4>
      </div>
    </div>
  )
}
