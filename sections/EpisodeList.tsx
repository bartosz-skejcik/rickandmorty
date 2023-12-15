import EpisodeCard from "@/components/EpisodeCard";
import { Episode } from "@/types/api-types";

type Props = {};

async function getEpisodes() {
    const res = await fetch(
        "https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8"
    );

    const data: Episode[] = await res.json();
    return data;
}

async function EpisodeList({}: Props) {
    const episodes = await getEpisodes();

    return (
        <section
            id="episodes"
            className="py-36 lg:px-32 px-12 flex flex-col items-start justify-start gap-10 w-full"
        >
            <div className="flex flex-col items-start justify-start">
                <h6 className="text-sm font-bold text-orange-400 uppercase text-start w-full">
                    Episodes
                </h6>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-2">
                    Multiverse Madness: Episodes
                </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-12">
                {episodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                ))}
            </div>
        </section>
    );
}

export default EpisodeList;
