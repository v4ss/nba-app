import type { AppProps } from "next/app";
import { UserContext, UserDispatchContext } from "@/context/userContext";
import { useReducer, useState } from "react";
import userReducer from "@/reducer/userReducer";

export default function App({ Component, pageProps }: AppProps) {
  const [user, dispatch] = useReducer(userReducer, {
    isConnected: false,
    username: null,
    avatarUrl: null,
  });


  return (
  <UserContext.Provider value={user}>
    <UserDispatchContext.Provider value={dispatch}>
      <Component {...pageProps} />
    </UserDispatchContext.Provider>
  </UserContext.Provider>
  );
}
