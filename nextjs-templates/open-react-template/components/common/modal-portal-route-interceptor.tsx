"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useHideScrollbar } from "./hooks/use-hide-scrollbar";

export function ModalPortalRouteInterceptor({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef(null);
  const [isOpened, setIsOpen] = useState(true);

  useEffect(() => {
    // @ts-ignore
    if (!dialogRef.current?.open) {
      // @ts-ignore
      dialogRef.current?.showModal();
      setIsOpen(true);
    }
  }, []);

  useHideScrollbar({ isOpen: isOpened });

  function onDismiss() {
    router.replace("/", { scroll: false });
    // @ts-ignore
    dialogRef.current?.close();

    setIsOpen(false);
  }

  if (!isOpened) return null;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <dialog
        ref={dialogRef}
        className="container h-[90vh] max-w-[1280px] bg-gray-900 text-gray-200 tracking-tight "
        onClose={onDismiss}
      >
        {children}
        <button onClick={onDismiss} className="absolute top-3 right-3 btn">
          X
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
