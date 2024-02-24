import Image from "next/image";

export default function Home() {
  let films = [
    { photo: "troy.jpeg", title: "Troy" },
    {
      photo: "unceupponatimeinhollywood.jpeg",
      title: "Once Uppon A Time In Hollywood",
    },
    { photo: "oppenheimer.jpeg", title: "Oppenheimer" },
    { photo: "napoleon.jpeg", title: "Napoleon" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="max-w-6xl w-full items-center justify-between lg:flex gap-3 flex-wrap">
        {films.map((film, index) => {
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
