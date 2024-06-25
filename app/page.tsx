import NavBar from "@/components/Navbar";
import CharacterList from "@/sections/CharacterList";
import EpisodeList from "@/sections/EpisodeList";
import Hero from "@/sections/Hero";
import { Character } from "@/types/api-types";
import Footer from "@/components/Footer";

async function getCharacters() {
    const res = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4"
    );

    const data: Character[] = await res.json();
    return data;
}

export default async function Home() {
    const characters = await getCharacters();
    return (
        <main className="flex w-scrern min-h-screen items-center justify-center flex-col">
            <NavBar />
            <Hero />
            <CharacterList characters={characters} />
            <EpisodeList />
            <Footer />
        </main>
    );
}
