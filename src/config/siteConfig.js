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
        date: 'September 2023',
        verifyUrl: 'https://coursera.org/verify/WWYVHCNOZRUL'
    },
    {
        name: 'Google Cloud Computing Foundations',
        issuer: 'Google Cloud',
        date: 'November 2023',
        verifyUrl: 'https://coursera.org/verify/MHBHPANNZU6V'
    },
    {
        name: 'Cybersecurity Fundamentals',
        issuer: 'Cybrary',
        date: 'May 2023'
    },
    {
        name: 'NASA Space Apps - Galactic Problem Solver',
        issuer: 'NASA',
        date: 'October 2023'
    }
]

// Progression Timeline Data
export const progression = [
    // 2015-2019: Foundations
    { id: 1, year: '2015', title: 'Hello World', description: 'Wrote first Python script. Ignited a passion for automation and logic.', category: 'programming', type: 'milestone' },
    { id: 2, year: '2017', title: 'Formal CS Education', description: 'Enrolled in Computer Science curriculum, mastering algorithms and data structures.', category: 'education', type: 'milestone' },
    { id: 3, year: '2019', title: 'University Entry', description: 'Admitted to Univ. of Yaoundé I. Major: Computer Science & Cybersecurity.', category: 'education', type: 'milestone' },

    // 2020-2022: Skill Acquisition
    { id: 6, year: '2020', title: 'Ethical Hacking Immersion', description: 'Deep dive into penetration testing, network analysis, and vulnerability assessment.', category: 'redteam', type: 'milestone' },
    { id: 7, year: '2021', title: 'Junior Full Stack Dev', description: 'First commercial role. Built scalable REST APIs and React frontends.', category: 'programming', type: 'work' },
    { id: 8, year: '2022', title: 'OSCP Preparation', description: 'Intensive lab work (HackTheBox, TryHackMe) focusing on offensive security methodologies.', category: 'redteam', type: 'milestone' },

    // 2023-Present: Professional Mastery
    { id: 10, year: '2023', title: 'Senior Developer Promotion', description: 'Architected complex cloud-native applications and led a small dev team.', category: 'programming', type: 'work' },
    { id: 16, year: '2023', title: 'IoT & Cloud Certification', description: 'Certified by Yonsei University in IoT protocols and Cloud architecture.', category: 'both', type: 'cert' },
    { id: 11, year: '2024', title: 'CTO & Red Team Lead', description: 'Driving technical strategy at XyberClan. Overseeing security operations and product development.', category: 'both', type: 'work', current: true },

    // Future Goals
    { id: 12, year: '2025', title: 'Advanced 3D Engineering', description: 'Mastering R3F/Three.js for immersive web experiences.', category: 'programming', type: 'goal' },
    { id: 13, year: '2025', title: 'OSEP Certification', description: 'Targeting Offensive Security Experienced Penetration Tester certification.', category: 'redteam', type: 'goal' },
]

