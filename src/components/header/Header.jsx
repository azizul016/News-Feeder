import DateTime from "./Date&Time";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <DateTime />
        <HeaderLogo />
        <HeaderSearch />
      </div>
      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          <HeaderMenu />
        </ul>
      </div>
    </nav>
  );
}
