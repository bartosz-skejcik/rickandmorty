import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types/api-types";
import {
    BookOpenIcon,
    PuzzlePieceIcon,
    SparklesIcon,
    StarIcon,
} from "@heroicons/react/24/outline";
import { Button, Link } from "@nextui-org/react";
import React from "react";

type Props = {
    characters: Character[];
};

const sections = [
    {
        title: "Character Highlights",
        icon: <StarIcon className="w-6 h-6 text-orange-400" />,
        text: "From the unpredictable genius of Rick Sanchez to the bewildered innocence of Morty Smith, each character adds a unique twist to the animated chaos.",
    },
    {
        title: "Backstories and Quirks",
        icon: <BookOpenIcon className="w-6 h-6 text-orange-400" />,
        text: "Uncover their quirks, backstories, and the peculiar roles they play in this interdimensional saga.",
    },
    {
        title: "Experience the Adventure",
        icon: <PuzzlePieceIcon className="w-6 h-6 text-orange-400" />,
        text: "Laugh, cringe, and question reality as you navigate the eccentric personalities that make Rick and Morty an unforgettable adventure.",
    },
    {
        title: "Multiverse of Characters",
        icon: <SparklesIcon className="w-6 h-6 text-orange-400" />,
        text: "Explore the multiverse of characters that make up the Rick and Morty universe.",
    },
];

function CharacterList({ characters }: Props) {
    return (
        <section
            id="characters"
            className="py-36 lg:px-32 px-12 flex xl:flex-row flex-col items-center justify-start gap-10"
        >
            <div className="flex flex-col xl:items-start items-center justify-start xl:w-1/2 w-full grow">
                <h6 className="text-sm font-bold text-orange-400 uppercase text-start w-full">
                    Characters
                </h6>
                <h1 className="text-4xl lg:text-5xl font-bold mt-2 text-start w-full">
                    Meet the characters
                </h1>
                <p className="text-lg mt-5 text-neutral-400 text-start w-full">
                    Dive into the multiverse of Rick and Morty and explore a
                    diverse cast of characters.
                </p>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-rows-4 grid-cols-1 mt-12 gap-4">
                    {sections.map((section) => (
                        <div
                            className="flex flex-col items-start justify-start gap-2"
                            key={section.title}
                        >
                            <h3 className="text-xl font-bold flex gap-2 items-center text-neutral-300">
                                {section.icon} {section.title}
                            </h3>
                            <p className="text-neutral-400">{section.text}</p>
                        </div>
                    ))}
                </div>
                <Button
                    as={Link}
                    href="/characters"
                    className="mt-12"
                    color="warning"
                    size="lg"
                    variant="ghost"
                >
                    Explore Characters
                </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 xl:w-1/2 w-full grow">
                {characters.map((character) => (
                    <CharacterCard
                        character={character}
                        key={character.id}
                        rounded="xl"
                    />
                ))}
            </div>
        </section>
    );
}

export default CharacterList;
