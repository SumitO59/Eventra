import Container from "../ui/Container";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="border-t bg-white">
            <Container>
                <div className="py-14 grid gap-10 md:grid-cols-4">

                    <div>
                        <h2 className="text-2xl font-bold text-violet-600">
                            Eventra
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Discover, organize and participate in amazing campus events.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Platform</h3>

                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">Organizers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">Company</h3>

                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">Follow Us</h3>

                        <div className="mt-4 flex gap-4">
                            <FaGithub className="cursor-pointer hover:text-violet-600" />
                            <FaLinkedin className="cursor-pointer hover:text-violet-600" />
                            <FaXTwitter className="cursor-pointer hover:text-violet-600" />
                        </div>
                    </div>

                </div>

                <div className="border-t py-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Eventra. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;