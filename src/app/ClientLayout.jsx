"use client";
import { useState } from "react";
import Home from "@/Components/Home";
import About from "@/Components/About";
import Exprience from "@/Components/Exprience";

export default function ClientLayout() {
    const [activeComponent, setActiveComponent] = useState("home");

    const components = {
        home: <Home />,
        about: <About />,
        experience: <Exprience />,
    };

    const buttons = [
        { key: "home", label: "خانه" },
        { key: "about", label: "درباره من" },
        { key: "experience", label: "مهارت‌ها" },
    ];

    return (
        <>
            <div className="transition-opacity duration-500 ease-in-out min-h-screen">
                {components[activeComponent]}
            </div>

            <div className="max-xl:w-max fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full
           backdrop-blur-xl border border-white/20 shadow-xl
           px-1 py-3 sm:px-3 sm:py-2 md:px-4 md:py-2">
                <ul className="grid grid-cols-3 gap-4 sm:gap-2 items-center relative px-2 sm:px-3 md:px-4">
                    {buttons.map((btn) => (
                        <li key={btn.key} className="justify-self-center">
                            <button
                                onClick={() => setActiveComponent(btn.key)}
                                className={`px-8 sm:px-6 md:px-8 py-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base 
                  text-black bg-amber-50/70 transition-all duration-300 ease-in-out 
                  backdrop-blur-lg relative z-10
                  ${
                                    activeComponent === btn.key
                                        ? "ring-2 ring-white/70 shadow-inner"
                                        : "hover:ring-1 hover:ring-white/30 hover:bg-amber-50/50"
                                }`}
                            >
                                {btn.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
