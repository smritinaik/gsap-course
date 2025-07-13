const GsapScrollTrigger = () => {
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

            <div className="w-full h-[70vh] flex justify-center items-center flex-col">
                <p className="text-center text-gray-500">
                    Scroll down to see the animation
                </p>

                <svg
                    className="animate-bounce mt-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 19V5" />
                    <path d="M5 12l7 7 7-7" />
                </svg>
            </div>

            <div className="mt-20 w-full h-screen">
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