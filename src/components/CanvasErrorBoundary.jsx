import React from 'react';

class CanvasErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.warn("Canvas failed to initialize (WebGL disabled or unsupported):", error);
        // Add class to body to enable 2D fallbacks in other components
        document.body.classList.add('no-webgl');
    }

    render() {
        if (this.state.hasError) {
            // Fallback: 2D Cyberpunk Background using CSS only
            return (
                <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-black overflow-hidden pointer-events-none">
                    {/* Gradient Glows */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.15),_transparent_70%)]" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl opacity-50" />

                    {/* Grid Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>
            );
        }

        return this.props.children;
    }
}

export default CanvasErrorBoundary;
