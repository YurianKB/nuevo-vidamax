// src/routes/AppRoutes.tsx
import React, { useState } from "react";
import { Banner} from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { SubNavbar } from "../components/SubNavbar";
import { Descripcion } from "../views/Descripcion";
import { Planes } from "../views/Planes";
import { Siniestro } from "../views/Siniestro";
import { Condiciones } from "../views/Condiciones";

export const AppRoutes = () => {
  const [view, setView] = useState("descripcion");

  const renderView = () => {
    switch (view) {
      case "descripcion":
        return <Descripcion />;
      case "planes":
        return <Planes />;
      case "siniestro":
        return <Siniestro />;
      case "condiciones":
        return <Condiciones />;
      default:
        return <Descripcion />;
    }
  };

  return (
    <div>
      <Banner />
      <Navbar />
      <SubNavbar setView={setView} />
      <div className="container mt-4">{renderView()}</div>
    </div>
  );
};