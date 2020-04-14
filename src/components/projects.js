import React from "react"

import data from "../data/data.json"

export default () => {
 console.log("DATA:\n" + data)

 return (
    <div>
      <h1>Projects</h1>
      {data.projects.map(project => (
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}