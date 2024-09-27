import { useEffect } from "react";

export const useHideScrollbar = ({ isOpen }: { isOpen: boolean }) => {
  useEffect(() => {
    const hideScrollBar = (): void => {
      document.body.style.overflow = "hidden";
    };

    const showScrollBar = (): void => {
      document.body.style.overflow = "auto";
    };

    if (isOpen) {
      hideScrollBar();
    } else {
      showScrollBar();
    }
  }, [isOpen]);
};
