import React, { useState, useEffect } from "react";
import { ghIcon, emailIcon, linkedInIcon, moonIcon, sunIcon } from "./Icons";
import useLocalStorage from "../hooks/useLocalStorage";

type NavbarProps = {
  toggleLanguage: () => void,
  lang: string
}

const Navbar: React.FC<NavbarProps> = ({toggleLanguage, lang}) => {
  const [darkTheme, setDarkTheme] = useLocalStorage({
    key: "darkMode",
    initialValue: false,
  });

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    darkTheme
      ? document.documentElement.style.setProperty("--bg-primary", "#25272b")
      : document.documentElement.style.setProperty("--bg-primary", "#f7faff");

    darkTheme
      ? document.documentElement.style.setProperty("--text-clr", "#f7faff")
      : document.documentElement.style.setProperty("--text-clr", "#25272b");

    darkTheme
      ? document.documentElement.style.setProperty(
          "--bg-image",
          "url('/images/dark.svg')"
        )
      : document.documentElement.style.setProperty(
          "--bg-image",
          "url('/images/light.svg')"
        );
  }, [darkTheme]);

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipBoard = () => {
    const textToCopy = "hesss.marcel@gmail.com";

    navigator.clipboard.writeText(textToCopy);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500); // Display the confirmation for 2 seconds
  };

  return (
    <nav>
      <div className="socials">
        {isCopied && (
          <div className="confirmation_box">E-mail copied to Clipboard!</div>
        )}
        <a className="socials_icon email_icon" onClick={copyToClipBoard}>
          {emailIcon}
        </a>

        <a
          href="https://github.com/Maacaa0"
          target="_blank"
          className="socials_icon"
        >
          {ghIcon}
        </a>
        <a
          href="https://www.linkedin.com/in/marcel-hess-35a081257/"
          target="_blank"
          className="socials_icon"
        >
          {linkedInIcon}
        </a>
      </div>
      <div className="nav_btns">
        <button onClick={toggleLanguage} className="lang_btn">{lang === "en" ? "EN" : "CZ"}</button>
        <button onClick={toggleTheme} className="nav_btn">
          {darkTheme ? sunIcon : moonIcon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
