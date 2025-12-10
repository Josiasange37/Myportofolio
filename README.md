# 🎮 XyberClan Cyberpunk Portfolio

A self-updating portfolio built with React, Three.js, and GitHub API integration. Features immersive 3D animations, real-time GitHub stats, and a cyberpunk aesthetic.

## ✨ Features

- **7 Interactive 3D Sections**
  - Hero: DNA helix with floating particles
  - Skills: Rotating 3D cubes with hover effects
  - GitHub Stats: 3D bar charts and contribution graphs
  - Projects: 3D card carousel with parallax
  - Philosophy: Morphing blob with particle field
  - Hobbies: Orbital system with rotating objects
  - Contact: 3D buttons with particle effects

- **Live GitHub Integration**
  - Auto-fetch user stats, repos, and language breakdown
  - 5-minute cache to respect rate limits
  - Real-time language distribution visualization

- **Performance Optimized**
  - 60fps animations with React Three Fiber
  - Code splitting and lazy loading
  - Memoized components and callbacks
  - Efficient particle systems

- **Cyberpunk Aesthetic**
  - Neon glows and glassmorphism
  - Gradient text effects
  - Dark theme with cyan/purple/pink palette
  - Smooth scroll animations

- **Easter Eggs**
  - Konami code activation (↑ ↑ ↓ ↓ ← → ← → B A)
  - Hidden interactions and animations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd /home/josias/CascadeProjects/portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Production Build

```bash
npm run build
npm run preview
```

## 🎨 Customization

### Change GitHub Username
Edit `src/context/GitHubContext.jsx`:
```javascript
const fetchGitHubData = useCallback(async (username = 'your-username') => {
  // ...
}, [githubData, cacheTime])
```

### Modify Colors
Edit `tailwind.config.js` and `src/index.css`:
```javascript
colors: {
  cyan: '#06b6d4',
  purple: '#a855f7',
  pink: '#ec4899',
}
```

### Adjust Animation Speed
Each section component has `useFrame` hooks controlling animation speed. Modify the increment values:
```javascript
useFrame(({ clock }) => {
  groupRef.current.rotation.y += 0.01 // Increase for faster rotation
})
```

## 📊 GitHub API Rate Limiting

- Free tier: 60 requests/hour
- Authenticated: 5,000 requests/hour
- Cache duration: 5 minutes

To use authentication, add a token in `GitHubContext.jsx`:
```javascript
const headers = {
  'Authorization': `token YOUR_GITHUB_TOKEN`
}
```

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

- **react**: UI framework
- **three.js**: 3D graphics
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers
- **tailwindcss**: Styling
- **lucide-react**: Icons

## 🔧 Architecture

```
src/
├── App.jsx                 # Main component with scroll controls
├── main.jsx               # Entry point
├── index.css              # Global styles
├── context/
│   └── GitHubContext.jsx  # GitHub API integration
├── hooks/
│   └── useKonamiCode.js   # Easter egg hook
└── sections/
    ├── HeroSection.jsx
    ├── SkillsSection.jsx
    ├── GitHubStatsSection.jsx
    ├── ProjectsSection.jsx
    ├── PhilosophySection.jsx
    ├── HobbiesSection.jsx
    └── ContactSection.jsx
```

## 🎮 Keyboard Shortcuts

- **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A - Activates easter egg
- **Scroll**: Navigate through sections
- **Hover**: Interactive 3D elements respond to mouse

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Custom Server
```bash
npm run build
# Serve dist/ folder with your web server
```

## 📝 License

MIT - Feel free to use this portfolio as a template!

## 🤝 Contributing

Feel free to fork, modify, and improve!

---

**Built with ❤️ by XyberClan**
