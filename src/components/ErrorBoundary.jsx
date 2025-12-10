import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen w-full bg-black text-red-500 font-mono p-8 overflow-auto z-50 relative">
                    <h1 className="text-4xl mb-4">SYSTEM MALFUNCTION</h1>
                    <p className="text-xl mb-4">{this.state.error?.toString()}</p>
                    <pre className="bg-zinc-900 p-4 rounded text-sm text-gray-400 whitespace-pre-wrap">
                        {this.state.errorInfo?.componentStack}
                    </pre>
                    <button
                        className="mt-8 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        onClick={() => window.location.reload()}
                    >
                        REBOOT SYSTEM
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
