import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";

import Navbar from "../components/Navbar.tsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Navbar></Navbar>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1
          class={tw`text-center text-4xl font-extrabold mt-20`}
          data-t-key="homePage.title"
        >
          {}
        </h1>
      </div>
    </>
  );
}
