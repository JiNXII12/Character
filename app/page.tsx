import React from "react";
import Image from "next/image";
import CharacterAnime from "./character";

type Props = {};

export default async function Home({}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://rickandmortyapi.com/api/character/?name=rick&status=alive`;
  const data = await fetch(url);
  const res = await data.json();
  await delay(1000);

  return (
    <div>
      <h1 className="text-center title "> Character Anime</h1>
      <ul className="text-center">
  {res.results.map((character: any) => (
    <li key={character.name} className="mb-4">
      {character.name} {character.status} {character.gender}
      <div className="box1">
        <Image src={character.image} alt={character.name} width={250} height={330} />
      </div>
    </li>
  ))}
</ul>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}