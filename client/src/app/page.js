"use client";

import { Header } from "@/components/Header";
import { Listing } from "@/components/Listing";
import Main from "@/components/Main";
import { store } from "@/redux/store";

import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <Main/>
      </div>
    </Provider>
  );
}
