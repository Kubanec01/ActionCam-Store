import { useEffect, useState } from "react";

export function useScrollStatus() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollStatus = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", scrollStatus);

    return () => {
      window.removeEventListener("scroll", scrollStatus);
    };
  });

  return isAtTop
}
