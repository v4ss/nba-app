import type { AppProps } from "next/app";
import { UserContext, UserDispatchContext } from "@/context/userContext";
import { useEffect, useReducer, useState } from "react";
import userReducer from "@/reducer/userReducer";
import Router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [user, dispatch] = useReducer(userReducer, {
    isConnected: false,
    username: null,
    avatarUrl: null,
  });

  useEffect(() => {
    if(!user.isConnected) Router.push("/login");
  }, [user.isConnected]);

  return (
  <UserContext.Provider value={user}>
    <UserDispatchContext.Provider value={dispatch}>
      <Component {...pageProps} />
    </UserDispatchContext.Provider>
  </UserContext.Provider>
  );
}
