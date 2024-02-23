import headerLogo from "./../../assets/logo.png";

export default function HeaderLogo() {
  return (
    <a href="/">
      <img
        className="max-w-[100px] md:max-w-[165px]"
        src={headerLogo}
        alt="Lws"
      />
    </a>
  );
}
