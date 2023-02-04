import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { tw } from "twind";
import Navbar from "../../components/Navbar.tsx";
import { locale_kit } from "localekit";

export const handler: Handlers = {
  async GET(req, ctx) {
    locale_kit.fallback_language = ctx.params.lang ? ctx.params.lang : "en";
    const resp = await ctx.render();
    return resp;
  },
};
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
