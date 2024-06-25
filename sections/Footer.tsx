import React from "react";

type Props = {};

function Footer({}: Props) {
    return (
        <footer className="w-full flex sm:flex-row flex-col justify-between items-center py-2 px-12 bg-black">
            <p className="text-lg font-medium text-white">
                Made by Jan Sosnowski
            </p>
            <p className="text-base font-medium text-neutral-700">
                jan13sosnowski@gmail.com
            </p>
        </footer>
    );
}

export default Footer;
