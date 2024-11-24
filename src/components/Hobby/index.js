import React from "react";

function Hobby() {
  const hobbies = [
    {
      name: "Playing Games",
      description: "Enjoying various types of games for fun and challenge.",
    },
    {
      name: "Exercising",
      description:
        "Keeping the body healthy with enjoyable physical activities.",
    },
    {
      name: "Watching Anime",
      description:
        "Following exciting stories and stunning visuals from favorite anime.",
    },
    {
      name: "Socializing",
      description:
        "Spending time with friends to build and strengthen relationships.",
    },
  ];

  return (
    <section className="hobby">
      {" "}
      {/* Menambahkan class "hobby" untuk konsistensi styling */}
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            <strong>{hobby.name}</strong> - {hobby.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hobby;
