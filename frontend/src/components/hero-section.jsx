import { useState } from "react";
import { Logo, LogoIcon, LogoStroke } from "./logo"
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const menuItems = [
    { name: "Features", href: "#" },
    { name: "Solution", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About", href: "#" },
];

export default function HeroSection() {
    const [menuState, setMenuState] = useState(false);

    return (
        <>
            <header>
                <nav
                    data-state={menuState ? "active" : "inactive"}
                    className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
                >
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                {/* Logo */}
                                <a href="/" aria-label="home" className="flex items-center space-x-2">
                                    <Logo />
                                </a>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState ? "Close Menu" : "Open Menu"}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                                >
                                    {!menuState ? (
                                        <Menu className="m-auto size-6 duration-200" />
                                    ) : (
                                        <X className="m-auto size-6 duration-200" />
                                    )}
                                </button>
                            </div>

                            {/* Menu Section */}
                            <div
                                className={`bg-background mb-6 ${menuState ? "flex" : "hidden"
                                    } w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none`}
                            >
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <a
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                >
                                                    <span>{item.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons */}
                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Button variant="outline" size="sm">
                                        Login
                                    </Button>

                                    <Button size="sm">
                                        SignUp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Hero Section */}
            <main>
                <section className="bg-muted/50 dark:bg-background overflow-hidden">
                    <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                                Turn Your Data Into Actionable Insights
                            </h1>

                            <p className="text-muted-foreground mx-auto my-8 max-w-2xl text-xl">
                                InsightHub helps you analyze, visualize, and understand complex data with powerful AI-powered tools.
                                Make smarter decisions, automate reports, and unlock meaningful insights effortlessly.
                            </p>

                            <Button size="lg">
                                <span className="btn-label">Get Started Now</span>
                            </Button>
                        </div>
                    </div>

                    <div className="mx-auto 2xl:max-w-7xl">
                        <div className="perspective-distant pl-8 lg:pl-44">
                            <div className="lg:h-176 rotate-x-20 mask-b-from-55% mask-b-to-100% mask-r-from-75% skew-x-12 pl-6 pt-6">
                                {/* Light image */}
                                <img
                                    className="rounded border shadow-xl dark:hidden"
                                    src="/card.png"
                                    alt="Tailark hero section"
                                    width={2880}
                                    height={2074}
                                />

                                {/* Dark mode image */}
                                <img
                                    className="rounded hidden border shadow-xl dark:block"
                                    src="/dark-card.webp"
                                    alt="Tailark hero section"
                                    width={2880}
                                    height={2074}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="dark:bg-background bg-muted/50 relative z-10 py-16">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">
                            Your favorite companies are our partners.
                        </h2>

                        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <img className="h-5 dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" />
                            <img className="h-4 dark:invert" src="https://html.tailus.io/blocks/customers/column.svg" />
                            <img className="h-4 dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" />
                            <img className="h-5 dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" />
                            <img className="h-4 dark:invert" src="https://html.tailus.io/blocks/customers/laravel.svg" />
                            <img className="h-7 dark:invert" src="https://html.tailus.io/blocks/customers/lilly.svg" />
                            <img className="h-5 dark:invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" />
                            <img className="h-6 dark:invert" src="https://html.tailus.io/blocks/customers/openai.svg" />
                            <img className="h-4 dark:invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" />
                            <img className="h-5 dark:invert" src="https://html.tailus.io/blocks/customers/vercel.svg" />
                            <img className="h-5 dark:invert" src="https://html.tailus.io/blocks/customers/zapier.svg" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
