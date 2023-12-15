"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CharacterCardSkeleton } from "./CharacterCard";
import { useInView } from "react-intersection-observer";
import { Character } from "@/types/api-types";

type Props = {
    setCharacters: Dispatch<SetStateAction<Character[]>>;
    getCharacters: (page: number) => Promise<Character[]>;
};

function LoadMore({ setCharacters, getCharacters }: Props) {
    const { ref, inView } = useInView();
    const [page, setPage] = useState<number>(2);

    useEffect(() => {
        if (inView) {
            getCharacters(page).then((characters) =>
                setCharacters((prev) => [...prev, ...characters])
            );
            setPage((prev) => prev + 1);
        }
    }, [inView, getCharacters, setCharacters, page]);

    return (
        <div
            ref={ref}
            className="w-full h-full bg-black grow flex flex-wrap gap-6 px-20 items-center justify-center"
        >
            {[...Array(10)].map((_, i) => (
                <CharacterCardSkeleton key={i} rounded="2xl" />
            ))}
        </div>
    );
}

export default LoadMore;
