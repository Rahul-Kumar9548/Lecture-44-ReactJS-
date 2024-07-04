// import React from "react";

import React from 'react'

const tasks = [
       'cricket', 'volley ball', 'football', 'basketball', 'hockey'
]

const TaskList = () => {
  return (
    <div>
        <h2>Task List</h2>
        {tasks.map((t)=>{
            return <div>{t}</div>
        })}
    </div>
  )
}

export default TaskList