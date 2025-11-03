import React from "react";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>Three simple steps to transform your daily routine</p>

      <div className="steps">
        <div className="step">
          <h3>Reimagine</h3>
          <p>Transform boring chores into epic quests with creative names and magical themes.</p>
        </div>
        <div className="step">
          <h3>Complete</h3>
          <p>Check off your reimagined tasks and watch the celebration animations.</p>
        </div>
        <div className="step">
          <h3>Earn Rewards</h3>
          <p>Collect points, build streaks, and unlock achievements as you progress.</p>
        </div>
      </div>
    </section>
  );
}