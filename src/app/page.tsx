"use client";

import { useCallback, useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import SelectedWork from "@/components/SelectedWork";
import EngineeringLab from "@/components/EngineeringLab";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import { featuredProject, selectedProjects, labProjects } from "@/data/projects";

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <NavBar onOpenPalette={openPalette} />
      <CommandPalette open={paletteOpen} onClose={closePalette} />

      <main>
        <Hero />
        <FeaturedProject project={featuredProject} />
        <SelectedWork projects={selectedProjects} />
        <EngineeringLab projects={labProjects} />
        <Stack />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
