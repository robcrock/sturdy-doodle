import React from "react"
// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export default function List({ listStatus, setListStatus }) {
  return (
    <div className={`list ${listStatus ? "active-list" : ""}`}>
      <div className="list-header">
        <h2>Dashboards</h2>
        <FontAwesomeIcon
          className="close"
          icon={faTimes}
          onClick={() => {
            setListStatus(!listStatus)
          }}
        />
      </div>
    </div>
  )
}
