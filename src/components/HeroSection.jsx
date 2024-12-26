import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative w-full  pb-4 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 items-center justify-evenly gap-8 md:gap-0">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-snug lg:leading-relaxed font-heading">
                            THE BACKPACKS<br />SPIRIT .
                        </h1>
                        <p className="md:text-lg max-w-xl">
                            The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more.
                        </p>
                        <div className="relative inline-block">
                            <button className="relative z-10 bg-button text-white font-inter px-6 py-4 flex items-center justify-between gap-10 transition-colors">
                                Shop now
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <div className="absolute top-3 left-3 w-full h-full bg-black -z-10"></div>
                        </div>
                    </div>

                    {/* Right Content*/}
                    <div className="w-full md:w-96 mx-auto relative">
                        <img
                            src="./assets/backpack.webp"
                            alt="Backpack"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;