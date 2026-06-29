import hackathon from "../../../assets/events/hackathon.jpg";
import concert from "../../../assets/events/concert.jpg";
import workshop from "../../../assets/events/workshop.jpg";

export const events = [
    {
        id: 1,
        title: "National Hackathon 2026",
        image: hackathon,
        category: "Technology",
        date: "12 July",
        time: "9:00 AM",
        location: "NIT Srinagar",
        organizer: "CodeClub",
        attendees: 320,
        price: "₹499",
        featured: true,
    },

    {
        id: 2,
        title: "Summer Music Festival",
        image: concert,
        category: "Music",
        date: "18 July",
        time: "7:00 PM",
        location: "Delhi",
        organizer: "Live Nation",
        attendees: 1800,
        price: "₹999",
        featured: true,
    },

    {
        id: 3,
        title: "UI/UX Masterclass",
        image: workshop,
        category: "Workshop",
        date: "22 July",
        time: "10:00 AM",
        location: "Bengaluru",
        organizer: "DesignHub",
        attendees: 120,
        price: "Free",
        featured: true,
    },
];