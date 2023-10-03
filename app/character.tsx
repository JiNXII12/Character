import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  key: string;
  name: string;
  status: string;
  gender: string;
  crad: string;
  release_date: string;
  
};

export default function character({ name, status, gender, crad,release_date}: Props) {
  const imagePath = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

  return (
    <div>
      <b className="https://rickandmortyapi.com/api/location/1">{name}</b>
      <h2>{release_date}</h2>
      <Link href={`/api/${id}`}>
        <Image
          src={imagePath + crad}
          width={800}
          height={800}
          alt={status}
        />
      </Link>
    </div>
  );
}