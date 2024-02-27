"use client";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const films = [
  { photo: "troy.jpeg", title: "Troy" },
  {
    photo: "unceupponatimeinhollywood.jpeg",
    title: "Once Uppon A Time In Hollywood",
  },
  { photo: "oppenheimer.jpeg", title: "Oppenheimer" },
  { photo: "napoleon.jpeg", title: "Napoleon" },
];

export default function Home() {
  let [filmFiltered, setFilmFiltered] = useState(films);

  function handleClick(value) {
    const newArray = JSON.parse(
      JSON.stringify(films.filter((o) => o.title.includes(value)))
    );
    setFilmFiltered(newArray);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <TextField
        label="Search"
        variant="outlined"
        className="m-0"
        onChange={(e) => {
          handleClick(e.target.value);
        }}
      />
      <div className="max-w-6xl w-full items-center justify-between lg:flex gap-3 pt-0 flex-wrap">
        {filmFiltered.map((film, index) => {
          return (
            <div className="max-w-1xl max-h-96" key={index}>
              <Image
                src={"/" + film.photo}
                alt={film.title}
                width={250}
                height={200}
                priority
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
