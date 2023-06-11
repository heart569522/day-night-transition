"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <IconButton onClick={toggleTheme} >
      {theme === "light" ?
        <DarkModeIcon fontSize="large" className="text-[#19376D]" />
        :
        <LightModeIcon fontSize="large" className="text-[#EACEB4]" />}
    </IconButton>
  );
};

export default ThemeSwitcher;
