"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { useEffect, useState } from "react";

export default function NavBar() {
    const navItems = [
        {
            name: "Characters",
            href: "/#characters",
        },
        {
            name: "Episodes",
            href: "/#episodes",
        },
    ];

    const [hash, setHash] = useState<string>();

    useEffect(() => {
        if (window) {
            setHash(window.location.hash);
        }
    }, []);

    return (
        <Navbar>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navItems.map((item) => (
                    <NavbarItem key={item.name} isActive={hash === item.href}>
                        <Link
                            onClick={() => setHash(item.href)}
                            href={item.href}
                            color={
                                hash === item.href ? "warning" : "foreground"
                            }
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        size="sm"
                        color="warning"
                        href="https://dev.paczesny.pl"
                        variant="flat"
                    >
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
