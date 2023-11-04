import React, { useState, useEffect } from "react";
import { ghIcon, emailIcon, linkedInIcon, moonIcon, sunIcon } from "../Icons";
import styles from "./navbar.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

type NavbarProps = {
  toggleLanguage: () => void;
  lang: string;
};

const Navbar: React.FC<NavbarProps> = ({ toggleLanguage, lang }) => {

  const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [darkTheme, setDarkTheme] = useLocalStorage({
    key: "darkMode",
    initialValue: userPrefersDarkMode || false,
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
    <nav className={styles.nav}>
      <div className={styles.icons}>
        {isCopied && (
          <div className={styles.confirmation}>
            {lang === "en"
              ? "E-mail copied to clipboard!"
              : "E-mail zkopírován do schránky!"}
          </div>
        )}
        <button
          className={styles.copyBtn}
          onClick={copyToClipBoard}
          aria-label={
            lang === "en"
              ? "copy email"
              : "zkopírovat email"
          }
        >
          {emailIcon}
        </button>

        <a
          href="https://github.com/Maacaa0"
          target="_blank"
          className={styles.icon}
          aria-label="github profile link"
        >
          {ghIcon}
        </a>
        <a
          href="https://www.linkedin.com/in/marcel-hess-35a081257/"
          target="_blank"
          className={styles.icon}
          aria-label="linkedin profile link"
        >
          {linkedInIcon}
        </a>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={toggleLanguage}
          className={styles.langBtn}
          aria-label={
            lang === "en"
              ? "toggle czech/english language"
              : "přepnout jazyk český/anglický"
          }
        >
          {lang === "en" ? "CZ" : "EN"}
        </button>
        <button
          onClick={toggleTheme}
          className={styles.themeBtn}
          aria-label={
            lang === "en"
              ? "toggle dark/light theme"
              : "přepnout tmavý/světlý režim"
          }
        >
          {darkTheme ? sunIcon : moonIcon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
