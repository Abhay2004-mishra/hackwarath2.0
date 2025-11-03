import React from "react";
import TaskCard from "./TaskCard";

const tasks = [
  {
    title: "Conquer Mount Laundry",
    desc: "Do laundry",
    points: 50,
  },
  {
    title: "Hydration Hero Challenge",
    desc: "Drink 8 glasses of water",
    points: 30,
  },
  {
    title: "Slay the Email Dragon",
    desc: "Clear email inbox",
    points: 40,
  },
];

export default function Tasks() {
  return (
    <section className="tasks">
      <h2>Reimagined Tasks</h2>
      <p>See how we turn the mundane into the magical</p>

      <div className="task-list">
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </div>

      <button className="view-tasks">View All Tasks →</button>
    </section>
  );
}