"use client";

import NavBar from "@/components/Navbar";
import { Character } from "@/types/api-types";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
    Link,
    Image as NextUiImage,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Button,
} from "@nextui-org/react";

type Props = {};

async function getCharacter(id: string) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    const data: Character = await res.json();
    return data;
}

function CharacterPage({}: Props) {
    const pathname = usePathname();
    const id = pathname.split("/")[2];

    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        if (id) {
            getCharacter(id).then((data) => setCharacter(data));
        }
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <section className="flex flex-col items-center justify-center">
            <NavBar />
            <header className="relative min-h-screen -mt-16 w-full flex xl:flex-row flex-col-reverse">
                <Image
                    src="/background.png"
                    alt="Hero"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="z-0 absolute inset-0"
                />
                <div className="bg-black bg-opacity-80 w-full gap-6 h-full absolute inset-0 flex-col z-10 flex items-center justify-center text-neutral-200">
                    <Card className="w-5/6 xl:w-1/3 backdrop-blur backdrop-filter bg-neutral-950 bg-opacity-70">
                        <CardHeader className="flex gap-3">
                            <NextUiImage
                                alt="nextui logo"
                                height={100}
                                width={100}
                                radius="sm"
                                src={character.image}
                            />
                            <div className="flex flex-col justify-start h-full">
                                <p className="text-2xl font-medium">
                                    {character.name}
                                </p>
                                <p className="text-default-500">
                                    {character.species} - {character.gender}
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="text-default-500">
                                <span className="text-neutral-50">Origin:</span>{" "}
                                {character.origin.name}
                            </p>
                            <p className="text-default-500 flex items-center gap-1">
                                <span className="text-neutral-50">Status:</span>{" "}
                                {character.status}{" "}
                                {character.status === "Alive" ? (
                                    <span className="text-green-500">●</span>
                                ) : character.status === "Dead" ? (
                                    <span className="text-red-500">●</span>
                                ) : (
                                    <span className="text-yellow-500">●</span>
                                )}
                            </p>
                            <p className="text-default-500">
                                <span className="text-neutral-50">
                                    Location:
                                </span>{" "}
                                {character.location.name}
                            </p>
                        </CardBody>
                        <Divider />
                        <CardBody>
                            <div className="w-full flex flex-col items-start justify-center gap-3">
                                <p>Episodes:</p>
                                <div className="w-full flex flex-wrap items-center justify-start gap-3">
                                    {character.episode.map((episode, index) => (
                                        <Button
                                            as={Link}
                                            href={`/episode?id=${
                                                episode.split("/")[5]
                                            }`}
                                            key={index}
                                            color="warning"
                                            className="w-full sm:w-auto"
                                            size="sm"
                                            variant="bordered"
                                        >
                                            {episode.split("/")[5]}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                href="/"
                                color="warning"
                                className="w-full"
                                size="sm"
                            >
                                Go Back
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="h-2/5 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0"></div>
            </header>
        </section>
    );
}
export default CharacterPage;
