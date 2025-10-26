import { useEffect, useState } from "react";

export function useNavFixedOnScroll() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isNavFixed };
}
