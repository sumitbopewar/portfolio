const background = [
    {
        eduCards: [
            {
                id: 0,
                title: "Master's Degree",
                degree: 'Master Of Art',
                detail: "Completed Master Degree from Gondwana University.",
                year: '2021-2023'
            },
            {
                id: 1,
                title: "Bachelor's Degree",
                degree: 'Bachelor Of Art',
                detail: "Completed Bachelor Degree from Gondwana University.",
                year: '2018-2021'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'ICEICO Technologies Pvt Ltd.',
                role: 'Frontend Developer',
                url: 'https://iceico.in/',
                desc: 'I began my career as a Trainee, where I spent the first six months honing my foundational skills in web development, focusing on React.js, JavaScript, and frontend technologies. After successfully completing the training period, I transitioned into a full-time React.js Developer role. I have total 3 years of experience and I have gained extensive hands-on experience in building dynamic, responsive web applications using React.js, managing state with Redux, optimizing performance, and integrating APIs. I have also contributed to large-scale projects, collaborated closely with cross-functional teams, and continuously improved user experiences through innovative solutions.',
                year: 'March/2021 - July/2024',
                location: 'Nagpur, INDIA'
            }
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}