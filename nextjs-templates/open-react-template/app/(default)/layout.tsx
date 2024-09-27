"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
  projects_modal,
}: {
  children: React.ReactNode;
  projects_modal: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <div className="grow">
        {/* TODO: fix overflow bug with page illustration */}
        {/* <PageIllustration /> */}

        {children}
      </div>

      {projects_modal}
      <div id="modal-root" />

      <Footer />
    </>
  );
}
