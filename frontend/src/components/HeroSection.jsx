import React, { useState } from "react";
import { Link } from "react-router-dom";

const ComponentName = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-x-hidden bg-gray-50">
            <header className="py-4 md:py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="shrink-0">
                            <Link to="/" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img
                                    className="w-auto h-8"
                                    src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                                    alt="logo"
                                />
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-900"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                {!expanded ? (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                            <Link to="" className="text-base font-medium text-gray-900 hover:text-opacity-50">Features</Link>
                            <Link to="" className="text-base font-medium text-gray-900 hover:text-opacity-50">Insights</Link>
                            <Link to="" className="text-base font-medium text-gray-900 hover:text-opacity-50">Categories</Link>
                            <Link to="" className="text-base font-medium text-gray-900 hover:text-opacity-50">About</Link>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                            <Link to="/login" className="text-base font-medium text-gray-900 hover:text-opacity-50">Login</Link>

                            <Link
                                to="/Signup"
                                className="px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
                            >
                                Get started Free
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {expanded && (
                        <nav className="lg:hidden">
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <Link to="" className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">Features</Link>
                                    <Link to="" className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">Pricing</Link>
                                    <Link to="" className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">Automation</Link>
                                    <Link to="" className="p-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50">Customer Login</Link>

                                    <Link
                                        to=""
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="pt-12 bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="px-6 text-lg text-gray-600">Where Ideas Meet Intelligence.</h1>

                        <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Turn your Raw data into profitable <br /> 
                            <span className="relative inline-flex">
                                <span className="bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30 absolute inset-0"></span>
                                <span className="relative"> Insights </span>
                            </span>
                        </p>

                        <div className="sm:flex sm:justify-center sm:space-x-5 mt-9 px-8 sm:px-0">
                            <Link
                                to=""
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor">
                                    <path
                                        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Explore Insights
                            </Link>

                            <Link
                                to=""
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 mt-4 sm:mt-0 text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl hover:bg-gray-900 hover:text-white"
                            >
                                
                                Start Reading →
                            </Link>
                        </div>

                        <p className="mt-8 text-base text-gray-500">60 Days free trial · No credit card required</p>
                    </div>
                </div>

                <div className="pb-12 bg-white">
                    <div className="relative">
                        <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                        <div className="relative mx-auto lg:max-w-6xl">
                            <img
                                className="transform scale-110"
                                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                                alt="illustration"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentName;
