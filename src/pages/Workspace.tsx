import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "~/components/CustomLink";

export const WorkspacePage = () => (
    <Flex flexDir="column" justifyContent="center" alignItems="center" w="75%">
        <Heading as="h2" fontSize="1.5em" color="#34aeeb">
            Workspace Setup
        </Heading>
        <Text mt="0.5em" align="center">
            Hello, world! This is my workspace setup page.
        </Text>
        <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
            Main Desktop PC
        </Heading>
        <Link
            mb="0.5em"
            mt="0.5em"
            href="https://www.newegg.com/msi-geforce-gtx-1050-ti-gtx-1050-ti-gaming-x-4g/p/N82E16814137054"
        >
            <Image
                src="https://img.shields.io/badge/NVIDIA-GTX_1050_Ti-76B900?style=for-the-badge&logo=nvidia&logoColor=white"
                alt="MSI 1050 Ti Gaming X"
            />
        </Link>
        <Link
            mb="0.5em"
            href="https://www.amd.com/en/products/cpu/amd-ryzen-5-2600"
        >
            <Image
                src="https://img.shields.io/badge/AMD-RYZEN5_2600-ED1C24?style=for-the-badge&logo=amd&logoColor=white"
                alt="AMD Ryzen 5 2600"
            />
        </Link>
        <Link mb="0.5em" href="#">
            <Image
                src="https://img.shields.io/badge/ASUS-PRIME_X470_PRO-222222?style=for-the-badge&logo=asus&logoColor=white"
                alt="Asus Prime X470 Pro"
            />
        </Link>
        <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
            Old Macbook Pro
        </Heading>
        <Text mt="0.5em" align="center">
            I use this mac laptop for school projects in my living room or for
            small coding projects - as it tends to overheat a lot.
        </Text>
        <Link mb="0.5em" href="#">
            <Image
                src="https://img.shields.io/badge/Apple-MacBook_Pro_2011-999999?style=for-the-badge&logo=apple&logoColor=white"
                alt="Macbook Pro Early 2011"
            />
        </Link>
        <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
            Lenovo Y700
        </Heading>
        <Text mt="0.5em" align="center">
            This is my gaming laptop that has a NVIDIA GTX 960M graphics card in
            it and an Intel Core i7 CPU.
        </Text>
        <Link
            mb="0.5em"
            href="https://www.lenovo.com/us/en/laptops/ideapad/ideapad-y700-series/Ideapad-Y700-17/p/88IPY700622"
        >
            <Image
                src="https://img.shields.io/badge/LENOVO-Y700-ED1C24?style=for-the-badge&logo=lenovo&logoColor=white"
                alt="Lenovo Y700"
            />
        </Link>
        <Heading mt="1em" as="h2" fontSize="1.5em" color="#34aeeb">
            OS
        </Heading>
        <Text mt="0.5em" align="center">
            I am currently dual booting Windows 11 and Arch Linux (with the i3
            window manager) on my Main Desktop PC. My lenovo gaming laptop is
            running Windows 10, and my macbook is running MacOS Catalina and
            Manjaro KDE. I use the linux operating systems mainly for
            programming, and Microsoft Windows for Virtual Reality/Gaming.
        </Text>
    </Flex>
);
