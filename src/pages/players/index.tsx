import Profile from "@/components/account/Profile";
import Layout from "@/components/layout/Layout";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Players({ players }) {
    

    return (
        <>
        <Head>
            <title>Mon compte</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <Box display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"}>
                <PlayersList players={players} />
            </Box>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://api.balldontlie.io/v1/players/7fb2208e-ec00-4166-a1d5-35fd70fef359" );
    const players = await res.json();

    return {
        props: {
            players,
        },
    };
}