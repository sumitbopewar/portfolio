const portfolio = [
    {
        id: 0,
        projectName: "Restin",
        url: "https://new.restin.in/",
        image: "projects/restin.png",
        projectDetail: "Designed and developed the frontend of the RestIn Mattress e-commerce website, an online platform for selling premium mattresses. The website offers a seamless shopping experience with a focus on user-friendly design, easy product navigation, and smooth checkout functionality, ensuring a satisfying online shopping journey for customers.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Redux"
            },
            {
                tech: "Web Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "VinzSeed",
        url: "#",
        image: "projects/vinzseed.png",
        projectDetail: "JMM Technologies is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Node JS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Responsive Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "UCN News",
        url: "https://ucnnews.live/",
        image: "projects/ucn.png",
        projectDetail: "Developed the responsive and interactive frontend user interface for the UCN News website, allowing users to easily navigate and consume news content across various categories like politics, sports, entertainment, and technology. Focused on delivering a seamless user experience with clean design and intuitive navigation.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Bootstrap 5"
            },
        ]
    },
    {
        id: 0,
        projectName: "Century Science Institute",
        url: "https://centuryscienceinstitute.in/",
        image: "projects/centuryscienceinstitute.png",
        projectDetail: "The Century Science Institute website is designed to provide users with easy access to scientific research, educational content, and information about the institute's programs and initiatives. The website offers an intuitive, user-friendly interface for exploring various scientific disciplines, upcoming events, and published research.",
        technologiesUsed: [
            {
                tech: "Javascript"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: "Animations"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Cognisoftllc",
        url: "https://cognisoftllc.vercel.app/",
        image: "projects/congisoftllc.png",
        projectDetail: "The Cognisoftllc website is designed to provide users with easy access to company web portal, educational content, and information about the Cognisoftllc's abput and initiatives. The website offers an intuitive, user-friendly interface for exploring.",
        technologiesUsed: [
            {
                tech: "Javascript"
            },
            {
                tech: "Tailwind CSS"
            },
            {
                tech: "Animations"
            },
            {
                tech: "React JS"
            },
        ]
    }
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
