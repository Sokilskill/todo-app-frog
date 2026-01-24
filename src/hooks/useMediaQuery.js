import { useState, useEffect } from "react";

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) setMediaQuery("lg");
      else if (innerWidth >= 576) setMediaQuery("md");
      else setMediaQuery("sm");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return mediaQuery;
};
