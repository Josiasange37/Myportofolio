// Central configuration file for the portfolio
// Edit this file to update content without modifying components

export const personalInfo = {
    name: "AKANA SIGNING JOSIAS AARON",
    pseudo: "ALMIGHT",
    email: "josiasange37@gmail.com",
    title: "Red Teamer & Full Stack Developer",
    philosophy: "A king never waves, a king never bends, a king never gives up.",
    quote: "I constantly evolve and adapt — that is my philosophy. That is why I am ALMIGHT."
}

export const socialLinks = {
    github: "https://github.com/Josiasange37",
    linkedin: "https://www.linkedin.com/in/thealmight/",
    twitter: "https://x.com/AlmightJosias",
    telegram: "https://t.me/+657375975",
    discord: "almight_237",
    email: "josiasange37@gmail.com"
}

export const xyberclan = {
    role: "CTO",
    company: "XyberClan",
    website: "https://xyberclan-saas-website.vercel.app/",
    logo: "/xyberclan-logo.png",
    description: "Professional digital solutions for ambitious businesses. Web development, mobile apps, graphic design, cybersecurity, and tech education in Cameroon."
}

// Education configuration with auto-progression
export const education = {
    institution: "University of Yaoundé I",
    field: "Computer Science / Cybersecurity",

    // Current status (will be auto-updated based on milestones)
    get currentStatus() {
        const now = new Date()
        for (let i = this.milestones.length - 1; i >= 0; i--) {
            const milestone = this.milestones[i]
            if (now >= new Date(milestone.date)) {
                return milestone
            }
        }
        return this.milestones[0]
    },

    // Define your education milestones
    // Status will automatically update when date is reached
    milestones: [
        {
            date: "2023-09-01",
            level: "Year 1",
            status: "Completed",
            description: "Foundation year - Programming fundamentals"
        },
        {
            date: "2024-09-01",
            level: "Year 2",
            status: "In Progress",
            description: "Core curriculum - Advanced programming & security basics"
        },
        {
            date: "2026-09-01",
            level: "Year 3",
            status: "In Progress",
            description: "Specialization - Red teaming & advanced development"
        },
        {
            date: "2027-06-01",
            level: "Graduate",
            status: "Completed",
            description: "Bachelor's Degree (Licence) in Computer Science"
        }
    ],

    expectedGraduation: "2027"
}

// Skills configuration for dynamic updates
export const skills = {
    programming: [
        { name: 'C', level: 'Intermediate', color: '#A8B9CC' },
        { name: 'C#', level: 'Intermediate', color: '#239120' },
        { name: 'Python', level: 'Advanced', color: '#3776AB' },
        { name: 'Java', level: 'Intermediate', color: '#007396' },
        { name: 'Bash', level: 'Advanced', color: '#4EAA25' },
        { name: 'Assembly', level: 'Intermediate', color: '#FF6600' },
        { name: 'HTML/CSS/JS', level: 'Advanced', color: '#E34F26' },
        { name: 'TypeScript', level: 'Advanced', color: '#3178C6' },
        { name: 'React/Next.js', level: 'Expert', color: '#61DAFB' },
        { name: 'Prompt Engineering', level: 'Expert', color: '#FF6B9D' }
    ],

    redTeaming: [
        { name: 'Reconnaissance', level: 'Expert' },
        { name: 'Scanning & Enumeration', level: 'Expert' },
        { name: 'Exploitation', level: 'Advanced' },
        { name: 'Post-Exploitation', level: 'Advanced' },
        { name: 'Web App Security', level: 'Expert' },
        { name: 'Network Penetration', level: 'Advanced' },
        { name: 'Wireless Security', level: 'Intermediate' },
        { name: 'Social Engineering', level: 'Advanced' },
        { name: 'Malware Analysis', level: 'Intermediate' },
        { name: 'Blue Team Defense', level: 'Advanced' }
    ]
}

// Certifications (for easy additions)
export const certifications = [
    {
        name: 'IoT Wireless & Cloud Computing',
        issuer: 'Yonsei University',
        date: 'September 2025',
        verifyUrl: 'https://coursera.org/verify/WWYVHCNOZRUL'
    },
    {
        name: 'NASA Space Apps - Galactic Problem Solver',
        issuer: 'NASA',
        date: 'October 2025'
    },
    {
        name: 'Google Cloud Training',
        issuer: 'Google Cloud',
        date: 'September 2025',
        verifyUrl: 'https://coursera.org/verify/MHBHPANNZU6V'
    },
    {
        name: 'Cybrary Orientation',
        issuer: 'Cybrary',
        date: 'May 2025'
    }
]

// Progression Timeline Data
export const progression = [
    // Early Days
    { id: 1, year: '2015', title: 'Started Learning', description: 'First introduction to computers and programming', category: 'education', type: 'milestone' },
    { id: 2, year: '2017', title: 'High School CS', description: 'Formal computer science education begins', category: 'education', type: 'milestone' },
    { id: 3, year: '2019', title: 'University Entry', description: 'Computer Science / Cybersecurity program', category: 'education', type: 'milestone' },

    // Career & Experience
    { id: 5, year: '2018', title: 'First CTF', description: 'Participated in Capture The Flag competition', category: 'redteam', type: 'event' },
    { id: 6, year: '2020', title: 'CEH Certified', description: 'Certified Ethical Hacker certification', category: 'redteam', type: 'cert', image: '/certs/ceh.jpg' },
    { id: 7, year: '2021', title: 'First Dev Job', description: 'Junior Full Stack Developer position', category: 'programming', type: 'work' },
    { id: 8, year: '2022', title: 'OSCP Certified', description: 'Offensive Security Certified Professional', category: 'redteam', type: 'cert', image: '/certs/oscp.jpg' },
    { id: 9, year: '2022', title: 'Security Conference', description: 'Spoke at cybersecurity conference', category: 'redteam', type: 'event' },
    { id: 10, year: '2023', title: 'Senior Developer', description: 'Promoted to Senior Full Stack Developer', category: 'programming', type: 'work' },
    { id: 4, year: '2023', title: 'Graduation', description: 'Completed degree with honors', category: 'education', type: 'milestone' },
    { id: 11, year: '2024', title: 'Red Team Lead', description: 'Leading red team operations', category: 'redteam', type: 'work' },

    // Future Goals
    { id: 12, year: '2025', title: 'Master 3D Development', description: 'Become expert in Three.js and game development', category: 'programming', type: 'goal' },
    { id: 13, year: '2025', title: 'OSEP Certification', description: 'Offensive Security Experienced Penetration Tester', category: 'redteam', type: 'goal' },
    { id: 14, year: '2026', title: 'Open Source Contribution', description: 'Launch major security framework', category: 'both', type: 'goal' },
    { id: 15, year: '2027', title: 'Tech Leadership', description: 'CTO or Security Director role', category: 'both', type: 'goal' },
]
