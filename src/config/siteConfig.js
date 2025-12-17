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
