"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {
    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.to(box , {
                x:150 ,
                rotation: 360,
                borderRadius:'100%',
                scale:1.5,
                scrollTrigger:{
                    trigger: box,
                    start : 'bottom bottom',
                    end : 'top 2%',
                    scrub: true,
                },
                ease: 'power1.inOut',
            }) 
        })
    } , [])


    return (
        <main>
            <h1 className="mt-11">GsapScrollTrigger</h1>

            <p className="mt-5 text-gray-500">
                Gsap Scroll Trigger is a plugin that allows you to create animations
                that are triggered by the scroll position of the page.
            </p>

            <p className="mt-5 text-gray-500">
                With ScrollTrigger, you can define various actions to be triggered at
                specific scroll points, such as starting or ending an animation,
                scrubbing through animations as the user scrolls, pinning elements to
                the screen, and more.{" "}
            </p>

            <div className="w-full h-[50vh] flex justify-center items-center flex-col">
                <p className="text-center text-gray-500">
                    Scroll down to see the animation
                </p>
            </div>

            <div className="mt-20 w-full h-screen" ref={scrollRef}>
                <div
                    id="scroll-pink"
                    className="scroll-box w-25 h-25 rounded-lg bg-orange-400"
                />
                <div
                    id="scroll-orange"
                    className="scroll-box w-25 h-25 rounded-lg bg-orange-600"
                />
            </div>
        </main>
    );
};

export default GsapScrollTrigger;