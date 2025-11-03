import React from "react";

export default function TaskCard({ title, desc, points }) {
  return (
    <div className="task-card">
      <div className="icon">✨</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="task-footer">
        <span>{points} points</span>
        <button className="add-task">+ Add Task</button>
      </div>
    </div>
  );
}