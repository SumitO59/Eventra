import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../src/models/User.js";
import Event from "../src/models/Event.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not defined");
    process.exit(1);
}

/*
|--------------------------------------------------------------------------
| Demo Organizers
|--------------------------------------------------------------------------
*/

const organizerData = [
    {
        name: "Aarav Sharma",
        email: "aarav@eventra.demo",
        password: "EventraDemo123",
        role: "admin",
    },
    {
        name: "Priya Mehta",
        email: "priya@eventra.demo",
        password: "EventraDemo123",
        role: "admin",
    },
    {
        name: "Rahul Kapoor",
        email: "rahul@eventra.demo",
        password: "EventraDemo123",
        role: "admin",
    },
    {
        name: "Ananya Verma",
        email: "ananya@eventra.demo",
        password: "EventraDemo123",
        role: "admin",
    },
    {
        name: "Kabir Singh",
        email: "kabir@eventra.demo",
        password: "EventraDemo123",
        role: "admin",
    },
    {
        name: "Ishita Gupta",
        email: "ishita@eventra.demo",
        password: "EventraDemo123",
        role: "admin",
    },
];

/*
|--------------------------------------------------------------------------
| Primary Students
|--------------------------------------------------------------------------
*/

const primaryStudentData = [
    ["Rohan Malhotra", "rohan@eventra.demo"],
    ["Sneha Sharma", "sneha@eventra.demo"],
    ["Aditya Raj", "aditya@eventra.demo"],
    ["Simran Kaur", "simran@eventra.demo"],
    ["Arjun Bhat", "arjun@eventra.demo"],
    ["Mehak Jain", "mehak@eventra.demo"],
    ["Karan Gupta", "karan@eventra.demo"],
    ["Tanya Kapoor", "tanya@eventra.demo"],
    ["Yash Verma", "yash@eventra.demo"],
    ["Nisha Singh", "nisha@eventra.demo"],
    ["Dev Sharma", "dev@eventra.demo"],
    ["Aditi Raina", "aditi@eventra.demo"],
    ["Manav Khanna", "manav@eventra.demo"],
    ["Riya Mehta", "riya@eventra.demo"],
    ["Harsh Vardhan", "harsh@eventra.demo"],
    ["Muskan Ali", "muskan@eventra.demo"],
    ["Ayush Kumar", "ayush@eventra.demo"],
    ["Sakshi Gupta", "sakshi@eventra.demo"],
    ["Vivek Anand", "vivek@eventra.demo"],
    ["Pooja Sharma", "pooja@eventra.demo"],
];

/*
|--------------------------------------------------------------------------
| Additional Student Names
|--------------------------------------------------------------------------
*/

const additionalStudentNames = [
    "Aman",
    "Varun",
    "Nakul",
    "Ishan",
    "Rishabh",
    "Dhruv",
    "Mohit",
    "Ankit",
    "Sahil",
    "Kunal",
    "Abhishek",
    "Akash",
    "Rajat",
    "Nitin",
    "Parth",
    "Shubham",
    "Vikas",
    "Tushar",
    "Gaurav",
    "Mukul",
    "Neeraj",
    "Pranav",
    "Siddharth",
    "Arnav",
    "Krish",
    "Aarohi",
    "Ira",
    "Kavya",
    "Navya",
    "Shreya",
    "Ishita",
    "Diya",
    "Anvi",
    "Myra",
    "Kiara",
    "Anushka",
    "Rhea",
    "Palak",
    "Nandini",
    "Khushi",
];

/*
|--------------------------------------------------------------------------
| Generate 250 Students
|--------------------------------------------------------------------------
*/

const studentData = [...primaryStudentData];

for (let i = studentData.length; i < 250; i++) {
    const name =
        `${additionalStudentNames[i % additionalStudentNames.length]} ` +
        `${Math.floor(i / additionalStudentNames.length) + 1}`;

    studentData.push([
        name,
        `student${i + 1}@eventra.demo`,
    ]);
}

const formattedStudentData = studentData.map(([name, email]) => ({
    name,
    email,
    password: "EventraDemo123",
    role: "user",
}));

/*
|--------------------------------------------------------------------------
| Event Images
|--------------------------------------------------------------------------
|
| These URLs are currently used for the demo.
| During Azure deployment, these can be migrated to Azure Blob Storage.
|
*/

const eventImages = {
    design:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",

    leadership:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",

    technical:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",

    ai:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",

    coding:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",

    cybersecurity:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",

    cloud:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

    cultural:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",

    dance:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80",

    photography:
        "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=80",

    sports:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",

    football:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",

    cricket:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",

    chess:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1200&q=80",

    academic:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",

    career:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",

    startup:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",

    networking:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",

    workshop:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
};

/*
|--------------------------------------------------------------------------
| Event Image Resolver
|--------------------------------------------------------------------------
*/

const getEventImage = (event) => {
    const title = event.title.toLowerCase();
    const category = event.category.toLowerCase();

    // AI / Machine Learning
    if (
        title.includes("ai") ||
        title.includes("machine learning")
    ) {
        return eventImages.ai;
    }

    // Cybersecurity
    if (
        title.includes("cybersecurity") ||
        title.includes("security")
    ) {
        return eventImages.cybersecurity;
    }

    // Cloud / Azure
    if (
        title.includes("cloud") ||
        title.includes("azure")
    ) {
        return eventImages.cloud;
    }

    // Programming / Development
    if (
        title.includes("full stack") ||
        title.includes("web development") ||
        title.includes("coding") ||
        title.includes("programming") ||
        title.includes("hackathon") ||
        title.includes("git") ||
        title.includes("open source")
    ) {
        return eventImages.coding;
    }

    // UI / UX / Design
    if (
        title.includes("ui/ux") ||
        title.includes("design")
    ) {
        return eventImages.design;
    }

    // Music / Concert
    if (
        title.includes("concert") ||
        title.includes("band")
    ) {
        return eventImages.cultural;
    }

    // Dance
    if (title.includes("dance")) {
        return eventImages.dance;
    }

    // Photography
    if (title.includes("photography")) {
        return eventImages.photography;
    }

    // Sports
    if (title.includes("football")) {
        return eventImages.football;
    }

    if (title.includes("cricket")) {
        return eventImages.cricket;
    }

    if (title.includes("chess")) {
        return eventImages.chess;
    }

    if (
        title.includes("badminton") ||
        title.includes("basketball") ||
        title.includes("table tennis") ||
        title.includes("athletics") ||
        title.includes("fitness") ||
        title.includes("volleyball")
    ) {
        return eventImages.sports;
    }

    // Career / Placement
    if (
        title.includes("career") ||
        title.includes("placement") ||
        title.includes("internship") ||
        title.includes("resume")
    ) {
        return eventImages.career;
    }

    // Startup / Entrepreneurship
    if (
        title.includes("startup") ||
        title.includes("entrepreneur") ||
        title.includes("pitch")
    ) {
        return eventImages.startup;
    }

    // Leadership
    if (
        title.includes("leadership") ||
        title.includes("club coordinator")
    ) {
        return eventImages.leadership;
    }

    // Networking
    if (
        title.includes("networking") ||
        title.includes("alumni")
    ) {
        return eventImages.networking;
    }

    // Cultural
    if (
        title.includes("cultural") ||
        title.includes("film") ||
        title.includes("art") ||
        title.includes("poetry") ||
        title.includes("open mic") ||
        title.includes("talent")
    ) {
        return eventImages.cultural;
    }

    // Category-level fallback
    switch (category) {
        case "technical":
            return eventImages.technical;

        case "cultural":
            return eventImages.cultural;

        case "sports":
            return eventImages.sports;

        case "academic":
            return eventImages.academic;

        case "career":
            return eventImages.career;

        case "startup":
            return eventImages.startup;

        case "leadership":
            return eventImages.leadership;

        case "networking":
            return eventImages.networking;

        case "workshop":
            return eventImages.workshop;

        default:
            return eventImages.academic;
    }
};

/*
|--------------------------------------------------------------------------
| Event Data
|--------------------------------------------------------------------------
*/

const eventData = [
    {
        title: "Eventra TechFest 2026",
        description:
            "A three-day technology festival featuring hackathons, coding challenges, technical talks, project showcases and developer networking.",
        category: "Technical",
        date: "2026-09-05",
        startTime: "09:00 AM",
        endTime: "06:00 PM",
        location: "Main Auditorium",
        price: "₹299",
        capacity: 250,
        featured: true,
    },
    {
        title: "AI & Machine Learning Workshop",
        description:
            "Hands-on workshop covering machine learning fundamentals, model development, evaluation and practical AI applications.",
        category: "Technical",
        date: "2026-08-22",
        startTime: "10:00 AM",
        endTime: "04:00 PM",
        location: "Computer Science Block",
        price: "Free",
        capacity: 100,
        featured: true,
    },
    {
        title: "Full Stack Development Bootcamp",
        description:
            "An intensive practical session covering modern frontend development, REST APIs, databases and deployment.",
        category: "Technical",
        date: "2026-09-12",
        startTime: "09:30 AM",
        endTime: "05:00 PM",
        location: "Innovation Lab",
        price: "₹199",
        capacity: 120,
        featured: true,
    },
    {
        title: "Cloud Computing with Azure",
        description:
            "Learn cloud fundamentals, Azure services, deployment strategies and best practices for production applications.",
        category: "Technical",
        date: "2026-08-29",
        startTime: "11:00 AM",
        endTime: "03:00 PM",
        location: "Seminar Hall A",
        price: "Free",
        capacity: 150,
        featured: true,
    },
    {
        title: "Cybersecurity Awareness Summit",
        description:
            "Explore modern cybersecurity threats, secure development practices, authentication, privacy and incident response.",
        category: "Technical",
        date: "2026-09-19",
        startTime: "10:00 AM",
        endTime: "04:30 PM",
        location: "Lecture Hall 2",
        price: "₹149",
        capacity: 180,
        featured: false,
    },
    {
        title: "Competitive Programming Challenge",
        description:
            "A timed programming contest focused on algorithms, data structures, problem solving and competitive coding.",
        category: "Technical",
        date: "2026-08-30",
        startTime: "02:00 PM",
        endTime: "05:00 PM",
        location: "Coding Arena",
        price: "Free",
        capacity: 200,
        featured: true,
    },
    {
        title: "Git & Open Source Workshop",
        description:
            "Learn Git workflows, GitHub collaboration, pull requests, issue tracking and how to contribute to open source.",
        category: "Technical",
        date: "2026-09-26",
        startTime: "10:00 AM",
        endTime: "02:00 PM",
        location: "Innovation Lab",
        price: "Free",
        capacity: 80,
        featured: false,
    },
    {
        title: "UI/UX Design Masterclass",
        description:
            "A practical design session covering user research, wireframes, design systems, accessibility and prototyping.",
        category: "Technical",
        date: "2026-10-03",
        startTime: "11:00 AM",
        endTime: "04:00 PM",
        location: "Design Studio",
        price: "₹249",
        capacity: 90,
        featured: false,
    },

    {
        title: "Cultural Night 2026",
        description:
            "An evening celebrating music, dance, theatre and creative performances from students across the campus.",
        category: "Cultural",
        date: "2026-09-25",
        startTime: "06:00 PM",
        endTime: "10:00 PM",
        location: "Open Air Theatre",
        price: "₹100",
        capacity: 500,
        featured: true,
    },
    {
        title: "Battle of Bands",
        description:
            "Student bands compete live on stage in a high-energy evening of rock, indie, acoustic and fusion performances.",
        category: "Cultural",
        date: "2026-09-18",
        startTime: "05:30 PM",
        endTime: "09:30 PM",
        location: "Central Lawn",
        price: "₹80",
        capacity: 300,
        featured: true,
    },
    {
        title: "Inter-College Dance Championship",
        description:
            "A competitive dance event bringing together teams for contemporary, hip-hop, classical and fusion performances.",
        category: "Cultural",
        date: "2026-10-10",
        startTime: "04:00 PM",
        endTime: "09:00 PM",
        location: "Main Auditorium",
        price: "₹120",
        capacity: 350,
        featured: false,
    },
    {
        title: "Campus Photography Walk",
        description:
            "A guided photography walk around campus focused on architecture, portraits, nature and creative storytelling.",
        category: "Cultural",
        date: "2026-08-23",
        startTime: "07:00 AM",
        endTime: "11:00 AM",
        location: "Main Gate",
        price: "Free",
        capacity: 30,
        featured: true,
    },
    {
        title: "Short Film Festival",
        description:
            "Screening and celebration of original short films created by student filmmakers and creative clubs.",
        category: "Cultural",
        date: "2026-10-17",
        startTime: "03:00 PM",
        endTime: "08:00 PM",
        location: "Mini Auditorium",
        price: "₹50",
        capacity: 180,
        featured: false,
    },
    {
        title: "Art & Illustration Exhibition",
        description:
            "An open exhibition featuring digital art, illustrations, paintings, sketches and student artwork.",
        category: "Cultural",
        date: "2026-09-09",
        startTime: "10:00 AM",
        endTime: "05:00 PM",
        location: "Student Activity Centre",
        price: "Free",
        capacity: 150,
        featured: false,
    },
    {
        title: "Poetry & Open Mic Evening",
        description:
            "An informal creative evening where students can perform poetry, storytelling, acoustic music and spoken word.",
        category: "Cultural",
        date: "2026-09-03",
        startTime: "05:00 PM",
        endTime: "08:00 PM",
        location: "Cafeteria Courtyard",
        price: "Free",
        capacity: 100,
        featured: false,
    },
    {
        title: "Freshers Talent Showcase",
        description:
            "A showcase where new students introduce their talents through music, dance, comedy and creative performances.",
        category: "Cultural",
        date: "2026-08-28",
        startTime: "06:00 PM",
        endTime: "09:00 PM",
        location: "Main Auditorium",
        price: "Free",
        capacity: 400,
        featured: true,
    },

    {
        title: "Inter-College Cricket Tournament",
        description:
            "A competitive cricket tournament featuring college teams competing across multiple matches.",
        category: "Sports",
        date: "2026-09-14",
        startTime: "08:00 AM",
        endTime: "05:00 PM",
        location: "University Cricket Ground",
        price: "₹100",
        capacity: 300,
        featured: true,
    },
    {
        title: "Campus Football Championship",
        description:
            "A knockout football championship featuring student teams competing for the annual campus trophy.",
        category: "Sports",
        date: "2026-09-20",
        startTime: "08:00 AM",
        endTime: "04:00 PM",
        location: "Football Ground",
        price: "Free",
        capacity: 250,
        featured: false,
    },
    {
        title: "Badminton Open",
        description:
            "Singles and doubles badminton tournament open to students across departments.",
        category: "Sports",
        date: "2026-08-31",
        startTime: "09:00 AM",
        endTime: "06:00 PM",
        location: "Indoor Sports Complex",
        price: "₹50",
        capacity: 80,
        featured: false,
    },
    {
        title: "Basketball 3x3 Tournament",
        description:
            "Fast-paced three-on-three basketball competition featuring student teams.",
        category: "Sports",
        date: "2026-09-27",
        startTime: "10:00 AM",
        endTime: "05:00 PM",
        location: "Basketball Court",
        price: "₹50",
        capacity: 100,
        featured: false,
    },
    {
        title: "Chess Championship",
        description:
            "An individual chess tournament for students of all skill levels with multiple competitive rounds.",
        category: "Sports",
        date: "2026-08-24",
        startTime: "10:00 AM",
        endTime: "04:00 PM",
        location: "Student Activity Centre",
        price: "Free",
        capacity: 64,
        featured: true,
    },
    {
        title: "Table Tennis League",
        description:
            "Campus table tennis league featuring singles and doubles matches.",
        category: "Sports",
        date: "2026-09-06",
        startTime: "09:00 AM",
        endTime: "04:00 PM",
        location: "Indoor Sports Complex",
        price: "₹40",
        capacity: 60,
        featured: false,
    },
    {
        title: "Athletics Meet",
        description:
            "Track and field competition featuring sprints, relay races, long jump and other athletic events.",
        category: "Sports",
        date: "2026-10-04",
        startTime: "07:00 AM",
        endTime: "03:00 PM",
        location: "University Stadium",
        price: "Free",
        capacity: 300,
        featured: false,
    },
    {
        title: "Campus Fitness Challenge",
        description:
            "A friendly fitness competition designed around strength, endurance, agility and teamwork.",
        category: "Sports",
        date: "2026-09-13",
        startTime: "07:00 AM",
        endTime: "11:00 AM",
        location: "University Stadium",
        price: "Free",
        capacity: 120,
        featured: false,
    },

    {
        title: "AI Research & Innovation Seminar",
        description:
            "Researchers and students discuss current developments in artificial intelligence, research methodology and innovation.",
        category: "Academic",
        date: "2026-09-02",
        startTime: "11:00 AM",
        endTime: "02:00 PM",
        location: "Seminar Hall A",
        price: "Free",
        capacity: 200,
        featured: true,
    },
    {
        title: "Career Opportunities in Software Engineering",
        description:
            "Industry professionals discuss software engineering careers, interview preparation, internships and industry expectations.",
        category: "Career",
        date: "2026-08-21",
        startTime: "02:00 PM",
        endTime: "05:00 PM",
        location: "Main Auditorium",
        price: "Free",
        capacity: 300,
        featured: true,
    },
    {
        title: "Research Paper Writing Workshop",
        description:
            "Learn how to structure, write and present technical research papers with practical examples and guidance.",
        category: "Academic",
        date: "2026-09-16",
        startTime: "10:00 AM",
        endTime: "01:00 PM",
        location: "Seminar Hall B",
        price: "Free",
        capacity: 100,
        featured: false,
    },
    {
        title: "Entrepreneurship & Startup Summit",
        description:
            "A startup-focused event featuring founders, student entrepreneurs, product discussions and networking.",
        category: "Startup",
        date: "2026-10-01",
        startTime: "10:00 AM",
        endTime: "05:00 PM",
        location: "Innovation Centre",
        price: "₹199",
        capacity: 250,
        featured: true,
    },
    {
        title: "Alumni Career Connect",
        description:
            "An interactive networking session connecting students with alumni working across technology, finance and consulting.",
        category: "Career",
        date: "2026-09-11",
        startTime: "03:00 PM",
        endTime: "07:00 PM",
        location: "Main Auditorium",
        price: "Free",
        capacity: 180,
        featured: true,
    },
    {
        title: "Technical Presentation Competition",
        description:
            "Students present technical topics to a panel of judges and compete for the best presentation award.",
        category: "Technical",
        date: "2026-09-23",
        startTime: "10:00 AM",
        endTime: "04:00 PM",
        location: "Lecture Hall 1",
        price: "Free",
        capacity: 120,
        featured: false,
    },
    {
        title: "Engineering Innovation Expo",
        description:
            "Students showcase engineering projects, prototypes and innovative solutions to real-world problems.",
        category: "Technical",
        date: "2026-10-08",
        startTime: "10:00 AM",
        endTime: "05:00 PM",
        location: "Innovation Centre",
        price: "Free",
        capacity: 350,
        featured: true,
    },
    {
        title: "Internship & Placement Preparation",
        description:
            "A practical preparation session covering resumes, aptitude tests, technical interviews and behavioral interviews.",
        category: "Career",
        date: "2026-08-26",
        startTime: "02:00 PM",
        endTime: "05:00 PM",
        location: "Seminar Hall A",
        price: "Free",
        capacity: 200,
        featured: false,
    },

    {
        title: "Student Leadership Summit",
        description:
            "A leadership-focused event covering teamwork, communication, decision making and managing student organizations.",
        category: "Leadership",
        date: "2026-09-07",
        startTime: "10:00 AM",
        endTime: "04:00 PM",
        location: "Conference Hall",
        price: "Free",
        capacity: 150,
        featured: false,
    },
    {
        title: "Club Coordinators Meet",
        description:
            "A coordination session for student clubs covering event planning, collaboration and campus activities.",
        category: "Leadership",
        date: "2026-08-27",
        startTime: "04:00 PM",
        endTime: "06:00 PM",
        location: "Student Activity Centre",
        price: "Free",
        capacity: 80,
        featured: false,
    },
    {
        title: "Student Networking Evening",
        description:
            "An informal networking event for students interested in technology, entrepreneurship, clubs and creative activities.",
        category: "Networking",
        date: "2026-09-04",
        startTime: "05:00 PM",
        endTime: "08:00 PM",
        location: "Central Lawn",
        price: "Free",
        capacity: 200,
        featured: false,
    },
    {
        title: "Alumni Networking Dinner",
        description:
            "A networking dinner bringing together students, alumni and faculty for professional conversations and connections.",
        category: "Networking",
        date: "2026-09-30",
        startTime: "07:00 PM",
        endTime: "10:00 PM",
        location: "University Guest House",
        price: "₹299",
        capacity: 120,
        featured: false,
    },

    {
        title: "Web Development Bootcamp",
        description:
            "A practical multi-session bootcamp covering HTML, CSS, JavaScript, React and modern web development workflows.",
        category: "Workshop",
        date: "2026-07-18",
        startTime: "09:00 AM",
        endTime: "05:00 PM",
        location: "Computer Science Block",
        price: "₹149",
        capacity: 100,
        featured: false,
        status: "Completed",
    },
    {
        title: "Photography Basics Workshop",
        description:
            "A beginner-friendly photography workshop covering composition, exposure, lighting and creative techniques.",
        category: "Workshop",
        date: "2026-07-25",
        startTime: "10:00 AM",
        endTime: "02:00 PM",
        location: "Media Lab",
        price: "Free",
        capacity: 60,
        featured: false,
        status: "Completed",
    },
    {
        title: "Resume Building Workshop",
        description:
            "A practical workshop helping students improve resumes, project descriptions and professional profiles.",
        category: "Workshop",
        date: "2026-08-08",
        startTime: "02:00 PM",
        endTime: "05:00 PM",
        location: "Seminar Hall B",
        price: "Free",
        capacity: 100,
        featured: false,
        status: "Completed",
    },
    {
        title: "Startup Pitch Practice",
        description:
            "Students practice presenting startup ideas and receive structured feedback from mentors.",
        category: "Workshop",
        date: "2026-08-15",
        startTime: "11:00 AM",
        endTime: "03:00 PM",
        location: "Innovation Centre",
        price: "Free",
        capacity: 70,
        featured: false,
        status: "Upcoming",
    },
];

/*
|--------------------------------------------------------------------------
| Cancelled Events
|--------------------------------------------------------------------------
*/

const cancelledEvents = [
    {
        title: "Drone Technology Demonstration",
        description:
            "A planned demonstration covering drone technology, applications and flight systems.",
        category: "Technical",
        date: "2026-09-10",
        startTime: "11:00 AM",
        endTime: "02:00 PM",
        location: "University Ground",
        price: "Free",
        capacity: 100,
        featured: false,
        status: "Cancelled",
    },
    {
        title: "Inter-College Volleyball Meet",
        description:
            "A planned volleyball tournament between participating college teams.",
        category: "Sports",
        date: "2026-09-15",
        startTime: "09:00 AM",
        endTime: "04:00 PM",
        location: "Volleyball Court",
        price: "Free",
        capacity: 120,
        featured: false,
        status: "Cancelled",
    },
];

/*
|--------------------------------------------------------------------------
| Seed Database
|--------------------------------------------------------------------------
*/

const seedDatabase = async () => {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(MONGODB_URI);

        console.log("✅ MongoDB connected");

        /*
        |--------------------------------------------------------------------------
        | Collect every demo email
        |--------------------------------------------------------------------------
        |
        | Important:
        | We delete existing demo users before inserting them again.
        | This makes `npm run seed` safely repeatable.
        |
        */

        const demoEmails = [
            ...organizerData.map((user) => user.email),
            ...formattedStudentData.map((user) => user.email),
        ];

        console.log("Removing previous Eventra demo data...");

        /*
        |--------------------------------------------------------------------------
        | Delete events belonging to demo organizers
        |--------------------------------------------------------------------------
        */

        const existingDemoOrganizerIds = await User.find({
            email: {
                $in: demoEmails,
            },
        }).distinct("_id");

        await Event.deleteMany({
            organizer: {
                $in: existingDemoOrganizerIds,
            },
        });

        /*
        |--------------------------------------------------------------------------
        | Delete demo users
        |--------------------------------------------------------------------------
        */

        await User.deleteMany({
            email: {
                $in: demoEmails,
            },
        });

        console.log("Creating demo users...");

        /*
        |--------------------------------------------------------------------------
        | Create Organizers
        |--------------------------------------------------------------------------
        */

        const organizers = await User.create(organizerData);

        /*
        |--------------------------------------------------------------------------
        | Create Students
        |--------------------------------------------------------------------------
        */

        const students = await User.create(formattedStudentData);

        console.log(`✅ Created ${organizers.length} organizers`);
        console.log(`✅ Created ${students.length} students`);

        /*
        |--------------------------------------------------------------------------
        | Create Events
        |--------------------------------------------------------------------------
        */

        const allEvents = [
            ...eventData,
            ...cancelledEvents,
        ];

        const eventsToCreate = allEvents.map((event, index) => {
            const organizer =
                organizers[index % organizers.length];

            /*
            |--------------------------------------------------------------------------
            | Registration Distribution
            |--------------------------------------------------------------------------
            |
            | Different events receive different registration levels
            | so the application looks realistic.
            |
            */

            let registrationRatio;

            if (event.status === "Cancelled") {
                registrationRatio = 0.05;
            } else if (event.status === "Completed") {
                registrationRatio = 0.72;
            } else if (index % 11 === 0) {
                registrationRatio = 1;
            } else if (index % 7 === 0) {
                registrationRatio = 0.88;
            } else if (index % 5 === 0) {
                registrationRatio = 0.62;
            } else if (index % 3 === 0) {
                registrationRatio = 0.38;
            } else {
                registrationRatio = 0.18;
            }

            let registrationCount = Math.floor(
                event.capacity * registrationRatio
            );

            /*
            |--------------------------------------------------------------------------
            | Never exceed the number of available students
            |--------------------------------------------------------------------------
            */

            registrationCount = Math.min(
                registrationCount,
                students.length
            );

            const registeredUsers = [];

            for (let i = 0; i < registrationCount; i++) {
                registeredUsers.push(
                    students[
                        (i + index * 3) % students.length
                    ]._id
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Remove duplicate student registrations
            |--------------------------------------------------------------------------
            */

            const uniqueRegisteredUsers = [
                ...new Map(
                    registeredUsers.map((id) => [
                        id.toString(),
                        id,
                    ])
                ).values(),
            ];

            return {
                ...event,

                image: getEventImage(event),

                organizer: organizer._id,

                registeredUsers: uniqueRegisteredUsers,
            };
        });

        const createdEvents =
            await Event.insertMany(eventsToCreate);

        console.log(
            `✅ Created ${createdEvents.length} events`
        );

        /*
        |--------------------------------------------------------------------------
        | Build Registration Relationships
        |--------------------------------------------------------------------------
        |
        | The Event model already stores registeredUsers, so the
        | application can query registrations directly.
        |
        | We still build this map here to validate that every
        | registered user belongs to the seeded student dataset.
        |
        */

        console.log(
            "Updating student registration relationships..."
        );

        const studentRegistrationMap = new Map();

        for (const student of students) {
            studentRegistrationMap.set(
                student._id.toString(),
                []
            );
        }

        for (const event of createdEvents) {
            for (const userId of event.registeredUsers) {
                const key = userId.toString();

                if (studentRegistrationMap.has(key)) {
                    studentRegistrationMap
                        .get(key)
                        .push(event._id);
                }
            }
        }

        /*
        |--------------------------------------------------------------------------
        | Seed Summary
        |--------------------------------------------------------------------------
        */

        console.log(
            "────────────────────────────────────"
        );

        console.log(
            "🎉 EVENTRA DEMO DATA SEEDED"
        );

        console.log(
            "────────────────────────────────────"
        );

        console.log(
            `👥 Organizers: ${organizers.length}`
        );

        console.log(
            `👨‍🎓 Students: ${students.length}`
        );

        console.log(
            `🎫 Events: ${createdEvents.length}`
        );

        console.log(
            "────────────────────────────────────"
        );

        console.log(
            "Demo login credentials:"
        );

        console.log(
            "Organizer: aarav@eventra.demo"
        );

        console.log(
            "Students:  rohan@eventra.demo"
        );

        console.log(
            "Password:  EventraDemo123"
        );

        console.log(
            "────────────────────────────────────"
        );

        await mongoose.connection.close();

        console.log(
            "MongoDB connection closed"
        );

        process.exit(0);
    } catch (error) {
        console.error("❌ Seed failed");
        console.error(error);

        if (mongoose.connection.readyState !== 0) {
            await mongoose.connection.close();
        }

        process.exit(1);
    }
};

seedDatabase();