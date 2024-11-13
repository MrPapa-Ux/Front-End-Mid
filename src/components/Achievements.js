// src/components/Achievements.js
import React from "react";

function Achievements() {
  const achievements = [
    { title: "Hackathon Winner", year: 2022 },
    { title: "Best Developer Award", year: 2021 },
    { title: "Open Source Contributor", year: 2023 },
  ];

  return (
    <section className="achievements">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.title}</strong> - {achievement.year}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
