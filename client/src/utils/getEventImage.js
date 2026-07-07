import concertImage from "../assets/events/concert.jpg";
import hackathonImage from "../assets/events/hackathon.jpg";
import workshopImage from "../assets/events/workshop.jpg";

export const getEventImage = (event) => {
    // Use uploaded image if available
    if (event.image && event.image.trim() !== "") {
        return event.image;
    }

    switch (event.category.toLowerCase()) {
        case "concert":
            return concertImage;

        case "hackathon":
            return hackathonImage;

        case "workshop":
            return workshopImage;

        default:
            return workshopImage;
    }
};