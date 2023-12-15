"use client";

import CharacterCard, {
    CharacterCardSkeleton,
} from "@/components/CharacterCard";
import LoadMore from "@/components/LoadMore";
import NavBar from "@/components/Navbar";
import { Character, CharactersApiResponse } from "@/types/api-types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Image as NextUiImage,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

async function getCharacters(page: number = 1) {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data: CharactersApiResponse = await res.json();
    return data.results as Character[];
}

function CharacterPage({}: Props) {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        getCharacters().then((characters) => setCharacters(characters));
    }, []);

    useEffect(() => {
        if (search === "") {
            getCharacters().then((characters) => setCharacters(characters));
        }
    }, [search]);

    async function submitForm() {
        if (!search) return;

        const res = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${search}`
        );

        const data: CharactersApiResponse = await res.json();

        if (data.error) {
            setCharacters([]);
        } else {
            setCharacters(data.results);
        }
    }

    return (
        <section className="flex flex-col items-center justify-center">
            <NavBar />
            <header className="relative min-h-[70vh] -mt-16 w-full flex xl:flex-row flex-col-reverse">
                <Image
                    src="/background.png"
                    alt="Hero"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="z-0 absolute inset-0"
                />
                <div className="bg-black bg-opacity-80 w-full gap-6 h-full absolute inset-0 flex-col z-10 flex items-center justify-center text-neutral-200">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submitForm();
                        }}
                        className="w-2/3 flex items-center bg-neutral-900 bg-opacity-70 backdrop-blur backdrop-filter p-3 gap-2 rounded-lg"
                    >
                        <MagnifyingGlassIcon className="w-7 h-7 text-neutral-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            name="search"
                            type="text"
                            placeholder="Type to search..."
                            className="w-2/3 bg-transparent ring-0 outline-none text-lg"
                        />
                    </form>
                </div>
                <div className="h-2/5 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0"></div>
            </header>
            <main className="w-full h-full bg-black grow flex flex-wrap gap-6 p-20 items-center justify-center">
                {characters && characters.length > 0
                    ? characters.map((character) => (
                          <CharacterCard
                              key={character.id}
                              character={character}
                              rounded="2xl"
                          />
                      ))
                    : [...Array(10)].map((_, i) => (
                          <CharacterCardSkeleton key={i} rounded="2xl" />
                      ))}
                <LoadMore
                    getCharacters={getCharacters}
                    setCharacters={setCharacters}
                />
            </main>
        </section>
    );
}
export default CharacterPage;
