import React from "react";
import "./Hero.css";


export default function Hero() {
  return (
    <section className="hero">
      <header className="navbar">
        <h1 className="logo">PlannerZen</h1>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Tasks</a>
          <a href="#">Task Library</a>
        </nav>
        <div className="buttons">
          <span className="streak">🔥 7 day streak</span>
          <button className="get-started">Get Started</button>
          <button className="btn"> Reward</button>
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Turn Boring Tasks Into <span>Epic</span> Wins
          </h1>
          <p>
            Transform your daily routines into magical experiences. Complete tasks,
            earn rewards, build streaks, and make the ordinary extraordinary.
          </p>
          <div className="hero-buttons">
            <button className="primary">Start Your Quest</button>
            <button className="secondary">▶ See How It Works</button>
          </div>
        </div>

        <img src="ab2.jpg"></img>
      </div>
    </section>
  );
}