import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";

export default function Header() {
  const menus = [
    { name: "common.languages.en", href: "/" },
    { name: "common.languages.es", href: "/es" },
    { name: "common.languages.ar", href: "/ar" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <LemonIcon />
        <div class="text-2xl  ml-1 font-bold">
          Fresh
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500"}
              data-t-key={menu.name}
            >
              {}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
