import concertImage from "../assets/events/concert.jpg";
import hackathonImage from "../assets/events/hackathon.jpg";
import workshopImage from "../assets/events/workshop.jpg";

export const getEventImage = (event) => {
    if (event?.image && event.image.trim() !== "") {
        return event.image;
    }

    switch (event?.category?.toLowerCase()) {
        case "technical":
            return hackathonImage;

        case "cultural":
            return concertImage;

        case "workshop":
            return workshopImage;

        case "sports":
            return concertImage;

        case "academic":
            return workshopImage;

        case "leadership":
            return workshopImage;

        case "networking":
            return concertImage;

        default:
            return workshopImage;
    }
};