const expertise = [
    {
        id: 0,
        title: 'Frontend Development',
        desc: 'Proficient in building interactive and responsive user interfaces using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. Experience with modern frontend tools like Vite, React Router, and Bootstrap for creating scalable web applications.',
    },
    {
        id: 1,
        title: 'Backend Development',
        desc: 'Basic knowledge of server-side development using Node.js and Express.js for building robust APIs and handling business logic. Experience with building RESTful APIs, managing server-side routing, and handling HTTP requests efficiently..',
    },
    {
        id: 2,
        title: 'Database Management',
        desc: "Skilled in working with MongoDB for managing NoSQL databases, including designing schemas, performing CRUD operations, and ensuring efficient data storage. Familiar with Mongoose ORM for object data modeling in MongoDB.",
    }
    ,
    {
        id: 3,
        title: 'Full-Stack Development',
        desc: "Expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack for full-stack application development, including integrating frontend and backend components.",
    }
    ,
    {
        id: 4,
        title: 'Version Control',
        desc: "Proficient in using Git and GitHub for source code management, collaboration, and version control across multiple projects."
    },
    {
        id: 5,
        title: 'Authentication & Security',
        desc: "Experience in implementing user authentication and authorization using JWT (JSON Web Tokens) and Passport.js for securing applications."
    },
    {
        id: 6,
        title: 'Additional Tools & Technologies',
        desc: "Experienced with Multer for handling file uploads, EJS for server-side templating, and Axios for handling API requests."
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
