import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Hero({}: Props) {
    return (
        <header className="relative min-h-screen w-full flex xl:flex-row flex-col-reverse">
            <Image
                src="/background.png"
                alt="Hero"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="z-0 absolute inset-0"
            />
            <div className="bg-black bg-opacity-80 w-full gap-6 h-full absolute inset-0 flex-col z-10 flex items-center justify-center text-neutral-200">
                <div className="py-1 px-2 xl:block hidden text-orange-500 border-1 border-orange-500 font-medium rounded-full">
                    This website is for educational purposes only. All images
                    are from{" "}
                    <Link
                        href="https://rickandmortyapi.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-orange-100"
                    >
                        Rick and Morty API
                        <ArrowUpRightIcon className="inline-block w-4 h-4 ml-1" />
                    </Link>
                </div>
                <h1 className="text-5xl font-bold text-center max-w-3xl">
                    Dive into Chaos: Rick and Morty Universe
                </h1>
                <p className="text-xl text-center max-w-3xl">
                    Get ready for a rollercoaster ride through time, space, and
                    absurdity. Explore the twisted universe of Rick and Morty,
                    where every episode is a wild trip with unexpected twists
                    and turns.
                </p>
                <Button
                    as={Link}
                    href="#characters"
                    className="mt-5"
                    size="lg"
                    color="warning"
                    variant="solid"
                >
                    Enter the Portal
                </Button>
            </div>
            <div className="h-2/5 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0"></div>
        </header>
    );
}

export default Hero;
