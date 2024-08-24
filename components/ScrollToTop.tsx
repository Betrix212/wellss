import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface ScrollToTopProps {}

export const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [pathname]);

  return null;
};

export default ScrollToTop;
