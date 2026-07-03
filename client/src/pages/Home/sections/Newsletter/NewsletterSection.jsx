import Container from "../../../../components/ui/Container";
import Section from "../../../../components/ui/Section";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";

function NewsletterSection() {
    return (
        <Section className="bg-violet-600">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Never Miss an Event
                    </h2>

                    <p className="mt-4 text-violet-100">
                        Subscribe to receive updates about hackathons, workshops,
                        cultural events and much more.
                    </p>

                    <form className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email Address
                        </label>

                        <Input
                            id="newsletter-email"
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white"
                        />

                        <Button
                            type="submit"
                            className="sm:px-8 bg-white text-violet-600 hover:bg-gray-100"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </Container>
        </Section>
    );
}

export default NewsletterSection;