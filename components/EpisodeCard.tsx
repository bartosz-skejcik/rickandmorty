import { Character, Episode } from "@/types/api-types";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Image from "next/image";

type Props = {
    episode: Episode;
};

async function getCharacter(url: string) {
    const res = await fetch(url);

    const data: Character = await res.json();
    return data;
}

async function EpisodeCard({ episode }: Props) {
    let charactersFull = await Promise.all(
        episode.characters.map((character, index) => {
            if (index < 5) {
                return getCharacter(character);
            } else {
                return null;
            }
        })
    );

    // remove the null values
    charactersFull = charactersFull.filter((character) => character !== null);

    // Replace the first 3 characters in the episode.characters array
    // @ts-ignore
    episode.characters.splice(0, 5, ...charactersFull);

    return (
        <div className="flex flex-col items-start justify-center bg-neutral-900 p-4 rounded-lg gap-4">
            <AvatarGroup isBordered>
                {episode.characters.map((character, index) => (
                    <Avatar
                        key={index}
                        // @ts-ignore
                        src={character.image ? character.image : character}
                    />
                ))}
            </AvatarGroup>
            <div className="flex flex-col items-start justify-start">
                <h4 className="text-lg font-bold">{episode.name}</h4>
                <p className="text-sm text-neutral-400">
                    {episode.episode} - {episode.air_date}
                </p>
            </div>
        </div>
    );
}

export default EpisodeCard;
