import Button from "../../../../components/ui/Button";
import Container from "../../../../components/ui/Container";
import SearchBar from "../SearchBar/SearchBar";
import HeroIllustration from "./HeroIllustrations";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white min-h-[calc(100vh-80px)]">

            {/* Background Blur Effects */}
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"></div>
            <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl"></div>

            <Container>
                <div className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-16 py-16 lg:flex-row lg:justify-between lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full max-w-2xl space-y-8">

                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
                            ✨ Trusted by 10,000+ Event Lovers
                        </span>

                        <div className="space-y-6">

                            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                                Discover Amazing
                                <span className="block text-indigo-600">
                                    Events Near You
                                </span>
                            </h1>

                            <p className="max-w-xl text-lg leading-8 text-slate-600">
                                Discover concerts, hackathons, workshops,
                                festivals, networking events, and unforgettable
                                experiences happening around you. Reserve your
                                seat in just a few clicks.
                            </p>

                        </div>

                        <SearchBar />

                        <div className="flex flex-col gap-4 pt-4 sm:flex-row">

                            <Button className="w-full sm:w-auto">
                                Explore Events
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                Create Event
                            </Button>

                        </div>

                        {/* Stats */}

                       <div className="flex flex-wrap justify-center gap-8 pt-8 text-center lg:justify-start lg:text-left">

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    500+
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Events Hosted
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    10K+
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Happy Attendees
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    50+
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Cities Covered
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Illustration */}

                    <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                        <HeroIllustration />
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;