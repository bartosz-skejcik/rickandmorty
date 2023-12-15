import { Character } from "@/types/api-types";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    character: Character;
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

function CharacterCard({ character, rounded }: Props) {
    return (
        <Link
            href={`/characters/${character.id}`}
            className={classNames(
                `2xl:w-72 xl:w-56 2xl:h-72 xl:h-56 lg:w-52 lg:h-52 h-44 w-44 relative group overflow-hidden`,
                `rounded-${rounded ? rounded : "md"}`
            )}
        >
            <Image
                src={character.image}
                alt={character.name}
                height={400}
                width={400}
                objectFit="cover"
                objectPosition="center"
                className={classNames(
                    "opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 transform",
                    `rounded-${rounded ? rounded : "md"}`
                )}
            />
            <div
                className={classNames(
                    "absolute group-hover:bottom-0 m-2 -bottom-full left-0 right-0 bg-black backdrop-filter group-hover:backdrop-blur-sm transition-all duration-300 bg-opacity-40 text-white p-2",
                    `rounded-${rounded ? rounded : "md"}`
                )}
            >
                <h3 className="text-lg font-bold">{character.name}</h3>
                <p className="text-sm">
                    {character.species} - {character.status}{" "}
                    <span
                        className={classNames(
                            "inline-block w-2 h-2 rounded-full ml-1",
                            character.status === "Alive"
                                ? "bg-green-500"
                                : character.status === "Dead"
                                ? "bg-red-500"
                                : "bg-gray-500"
                        )}
                    ></span>
                </p>
            </div>
        </Link>
    );
}

export function CharacterCardSkeleton({
    rounded,
}: {
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}) {
    return (
        <div
            className={classNames(
                `2xl:w-72 xl:w-56 2xl:h-72 xl:h-56 lg:w-52 lg:h-52 h-44 w-44 relative group overflow-hidden`,
                `rounded-${rounded ? rounded : "md"}`
            )}
        >
            {/* <div className="animate-pulse bg-neutral-800 w-full h-full"></div> */}
            <Skeleton className="rounded-lg">
                <div className="2xl:w-72 xl:w-56 2xl:h-72 xl:h-56 lg:w-52 lg:h-52 h-44 w-44 rounded-lg bg-neutral-300"></div>
            </Skeleton>
            <div
                className={classNames(
                    "absolute group-hover:bottom-0 m-2 -bottom-full left-0 right-0 bg-black backdrop-filter group-hover:backdrop-blur-sm transition-all duration-300 bg-opacity-40 text-white p-2",
                    `rounded-${rounded ? rounded : "md"}`
                )}
            >
                <Skeleton
                    className={classNames(
                        "mb-2 w-1/2",
                        `rounded-${rounded ? rounded : "md"}`
                    )}
                >
                    <div
                        className={classNames(
                            "bg-neutral-700 w-full h-5",
                            `rounded-${rounded ? rounded : "md"}`
                        )}
                    ></div>
                </Skeleton>
                <Skeleton
                    className={classNames(
                        "w-1/4",
                        `rounded-${rounded ? rounded : "md"}`
                    )}
                >
                    <div
                        className={classNames(
                            "bg-neutral-700 w-full h-4",
                            `rounded-${rounded ? rounded : "md"}`
                        )}
                    ></div>
                </Skeleton>
            </div>
        </div>
    );
}

export default CharacterCard;
