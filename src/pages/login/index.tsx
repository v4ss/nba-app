import LoginForm from "@/components/login/LoginForm";
import { Container } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [isConnected, setIsConnected] = useState(false);
    function handleOnClick() {
      setIsConnected(!isConnected);
    }

  return (
    <>
      <Head>
        <title>My NBA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Container maxWidth="lg">
            <LoginForm />
          </Container>
      </main>
    </>
  );
}