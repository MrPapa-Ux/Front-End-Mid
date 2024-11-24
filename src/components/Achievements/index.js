// src/components/Achievements.js
import React from "react";

function Achievements() {
  const achievements = [
    { title: "The best Joker" },
    { title: "The best doing nothing" },
    { title: "The best at looking someone" },
    { title: "The best of the worst" },
  ];

  return (
    <section className="achievements">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.title}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
