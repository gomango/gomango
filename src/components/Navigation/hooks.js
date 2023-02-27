import { useState } from "react";

export const useComponentLogic = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const eventListener = window.addEventListener("scroll", changeColor);

  return { closeMenu, handleClick, click, color, eventListener };
};
