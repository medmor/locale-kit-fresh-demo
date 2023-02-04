import { Handlers } from "$fresh/server.ts";
import { locale_kit } from "localekit";

export const handler: Handlers = {
  async GET(req, _ctx) {
    const url = req.headers.get("x-forwarded-host") //check codesapace forwarding
      ? `https://${req.headers.get("x-forwarded-host")}/`
      : req.url;
    return await Response.redirect(url + locale_kit.fallback_language, 307);
  },
};

export default function Home() {
  return (
    <>
    </>
  );
}
