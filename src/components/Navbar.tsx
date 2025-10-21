// src/components/Navbar.tsx
import React from "react";

export const Navbar = () => (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand"><img src="../" alt="" /><span class="text-bold">Seguros Azteca</span></a>
            <div className="d-flex">
                <a className="nav-link text-bold active" aria-current="page" href="#">Inicio</a>
                <a className="nav-link text-bold" href="#">Nuestros Seguros</a>
                <a className="nav-link text-bold" href="#">Centro de ayuda</a>
                <a className="nav-link text-bold" href="#">Pólizas</a>
            </div>
        </div>
    </nav>
);