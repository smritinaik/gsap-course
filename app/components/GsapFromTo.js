"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
    useGSAP(() => {
        gsap.fromTo("#red-box",
            { //from
                x:0,
                rotation: 0,
                borderRadius: "0%"
            },
            { //to
                x:250,
                rotation:360,
                borderRadius:"100%",
                ease: "bounce.out",
                repeat: -1,
                duration: 2,
                yoyo : true,

            });
    });

    return (
        <main>
            <h1>GsapFromTo</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.fromTo()</code> method is used to animate elements from a
                new state to a new state.
            </p>

            <p className="mt-5 text-gray-500">
                The <code>gsap.fromTo()</code> method is similar to the{" "}
                <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
                difference is that the <code>gsap.fromTo()</code> method animates
                elements from a new state to a new state, while the{" "}
                <code>gsap.from()</code> method animates elements from a new state to
                their current state, and the <code>gsap.to()</code> method animates
                elements from their current state to a new state.
            </p>

            <div className="mt-20">
                <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
            </div>
        </main>
    );
};

export default GsapFromTo;