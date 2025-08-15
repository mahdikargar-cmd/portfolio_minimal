"use client";
import {useState, useEffect, useRef} from "react";
import Home from "@/Components/Home";
import About from "@/Components/About";
import Exprience from "@/Components/Exprience";

export default function ClientLayout() {
    const [activeComponent, setActiveComponent] = useState("home");
    const [indicatorStyle, setIndicatorStyle] = useState({left: 0, width: 0});

    const homeBtnRef = useRef(null);
    const aboutBtnRef = useRef(null);
    const exprienceBtnRef = useRef(null);

    const updateIndicator = () => {
        let targetRef;
        if (activeComponent === "home") targetRef = homeBtnRef;
        else if (activeComponent === "about") targetRef = aboutBtnRef;
        else if (activeComponent === "exprience") targetRef = exprienceBtnRef;

        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            const parentRect = targetRef.current.parentNode.getBoundingClientRect();
            const left = rect.left - parentRect.left;
            const width = rect.width;
            setIndicatorStyle({left, width});
        }
    };

    useEffect(() => {
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeComponent]);

    const renderComponent = () => {
        switch (activeComponent) {
            case "home":
                return <Home/>;
            case "about":
                return <About/>;
            case "exprience":
                return <Exprience/>;
            default:
                return <Home/>;
        }
    };

    return (
        <>
            <div className="transition-opacity duration-500 ease-in-out min-h-screen">
                {renderComponent()}
            </div>

            <div className="max-xl:w-max fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full
           backdrop-blur-xl bg-mycolor/80 border border-white/20 shadow-xl
           px-1 py-3 sm:px-3 sm:py-2 md:px-4 md:py-2">
                <ul
                    className="grid grid-cols-3 gap-4 sm:gap-2 items-center relative px-2 sm:px-3 md:px-4">
                    {/* Indicator */}
                    <div
                        className="absolute top-0 h-full bg-white/30 backdrop-blur-md
               transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
               rounded-full"
                        style={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                            boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                    />

                    <li className="justify-self-center">
                        <button
                            ref={homeBtnRef}
                            onClick={() => {
                                setActiveComponent("home");
                                updateIndicator();
                            }}
                            className={` px-10 sm:px-6 md:px-8 py-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base 
                  text-black bg-amber-50/70 transition-all duration-300 ease-in-out 
                  backdrop-blur-lg relative z-10
                  ${
                                activeComponent === "home"
                                    ? "ring-2 ring-white/70 shadow-inner"
                                    : "hover:ring-1 hover:ring-white/30 hover:bg-amber-50/50"
                            }`}
                        >
                            خانه
                        </button>
                    </li>

                    <li className="justify-self-center">
                        <button
                            ref={aboutBtnRef}
                            onClick={() => {
                                setActiveComponent("about");
                                updateIndicator();
                            }}
                            className={`px-8 sm:px-6 md:px-8 py-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base 
                  text-black bg-amber-50/70 transition-all duration-300 ease-in-out 
                  backdrop-blur-lg relative z-10
                  ${
                                activeComponent === "about"
                                    ? "ring-2 ring-white/70 shadow-inner"
                                    : "hover:ring-1 hover:ring-white/30 hover:bg-amber-50/50"
                            }`}
                        >
                            درباره من
                        </button>
                    </li>

                    <li className="justify-self-center">
                        <button
                            ref={exprienceBtnRef}
                            onClick={() => {
                                setActiveComponent("exprience");
                                updateIndicator();
                            }}
                            className={`px-10 sm:px-6 md:px-8 py-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base 
                  text-black bg-amber-50/70 transition-all duration-300 ease-in-out 
                  backdrop-blur-lg relative z-10
                  ${
                                activeComponent === "exprience"
                                    ? "ring-2 ring-white/70 shadow-inner"
                                    : "hover:ring-1 hover:ring-white/30 hover:bg-amber-50/50"
                            }`}
                        >
                            مهارت‌ها
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}