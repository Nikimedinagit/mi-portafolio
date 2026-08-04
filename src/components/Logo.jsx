const Logo = ({ className = "h-9 w-auto" }) => {
  return (
    <>
      <img
        src="/logo-ignadev.png"
        alt="IgnaDev"
        className={`${className} block object-contain dark:hidden`}
        width="982"
        height="185"
        decoding="async"
      />
      <img
        src="/logo-ignadev-oscuro.png"
        alt="IgnaDev"
        className={`${className} hidden object-contain dark:block`}
        width="420"
        height="81"
        decoding="async"
      />
    </>
  );
};

export default Logo;
