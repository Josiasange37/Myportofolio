import React, { useState, useEffect, useRef } from 'react';


const AVATAR_STATES = {
    NEUTRAL: '/avatar/neutral.png',
    HAPPY: '/avatar/happy.png',
    THINKING: '/avatar/thinking.png',
    SERIOUS: '/avatar/serious.png'
};

const AMBIENT_MESSAGES = [
    "Checking security protocols...",
    "Did you see the Red Team section?",
    "I can help you build this.",
    "System nominal.",
    "Scanning for vulnerabilities...",
    "Hello traveler!",
    "Need a CTO?",
    "Check out the GitHub stats!"
];

import { useBot } from '../context/BotContext';

const SECTION_MESSAGES = {
    'hero': "Welcome to the core. Connection established.",
    'about': "The man behind the keyboard. Josias is built different.",
    'xyberclan': "XyberClan... his masterpiece. Leading offensive security operations.",
    'education': "Knowledge is power. Formal training downloads complete.",
    'certifications': "Certified to break things. And fix them.",
    'programming': "Building secure infrastructure from the ground up.",
    'red-team': "The fun part. Breaking into systems (ethically, of course).",
    'projects': "Proof of concept. All code is active.",
    'philosophy': "The mindset required to survive in cyberspace.",
    'hobbies': "Even hackers need downtime.",
    'contact': "Ready to collaborate? Send a signal.",
    'resume': "Official credentials. Verified and secure.",
    'progression': "The timeline of evolution. From Hello World to CTO.",
    'cv': "Legacy format. Still valid."
};

const AlmightBot = () => {
    const { currentSection } = useBot();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Greetings! I am Mini-Almight. I know Josias better than he knows himself. Ask me anything about his Red Team escapades or code architecture!", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [currentState, setCurrentState] = useState('NEUTRAL');
    const [isTyping, setIsTyping] = useState(false);
    const [speechBubble, setSpeechBubble] = useState(null);
    const [showBubble, setShowBubble] = useState(false);

    // Welcome Sequence State
    const [isWelcomeSequence, setIsWelcomeSequence] = useState(() => {
        // Only show welcome if not seen in this session
        return !sessionStorage.getItem('intro_seen');
    });

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Welcome Sequence Effect
    useEffect(() => {
        if (!isWelcomeSequence) return; // Skip if already seen

        // Prevent scroll interpretation during welcome
        const steps = [
            { msg: "Initializing connection...", delay: 2000, state: 'SERIOUS' },
            { msg: "System Online.", delay: 4000, state: 'NEUTRAL' },
            { msg: "Welcome to the Neural Interface.", delay: 6000, state: 'HAPPY' },
            { msg: "I am Mini-Almight. I will be your guide.", delay: 9000, state: 'NEUTRAL' }
        ];

        let currentStep = 0;
        let timeout;

        const runSequence = () => {
            if (currentStep >= steps.length) {
                setIsWelcomeSequence(false);
                setShowBubble(false);
                sessionStorage.setItem('intro_seen', 'true');
                return;
            }

            const step = steps[currentStep];
            setCurrentState(step.state);
            setSpeechBubble(step.msg);
            setShowBubble(true);

            timeout = setTimeout(() => {
                currentStep++;
                runSequence();
            }, 3000); // Display time for each message
        };

        // Start sequence
        runSequence();

        return () => clearTimeout(timeout);
    }, [isWelcomeSequence]);

    // Section Commentary Effect (Only runs after welcome sequence is done)
    useEffect(() => {
        if (isWelcomeSequence || !currentSection) return;

        const msg = SECTION_MESSAGES[currentSection];
        if (msg) {
            setSpeechBubble(msg);
            setShowBubble(true);
            setCurrentState('THINKING'); // Look like he's analyzing the section

            // Hide after 5 seconds
            const timer = setTimeout(() => {
                setShowBubble(false);
                setCurrentState('NEUTRAL');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [currentSection, isWelcomeSequence]);

    // Ambient chatter effect (Only runs if NO section commentary is active/welcome is done)
    useEffect(() => {
        if (isWelcomeSequence) return;

        const interval = setInterval(() => {
            if (Math.random() > 0.7 && !showBubble) {
                const randomMsg = AMBIENT_MESSAGES[Math.floor(Math.random() * AMBIENT_MESSAGES.length)];
                setSpeechBubble(randomMsg);
                setShowBubble(true);
                setTimeout(() => setShowBubble(false), 4000);
            }
        }, 12000);

        return () => clearInterval(interval);
    }, [isOpen, isWelcomeSequence, showBubble]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);
        setCurrentState('THINKING');

        // Simulate processing / Gemini API Call
        setTimeout(() => {
            // Simple keyword matching for demo logic
            let botResponse = "I'm analyzing that query...";
            let nextState = 'NEUTRAL';

            const lowerInput = userMsg.text.toLowerCase();

            if (lowerInput.includes('hack') || lowerInput.includes('security') || lowerInput.includes('red team')) {
                botResponse = "Ah, security operations. Josias specializes in offensive security. He's OSCP certified and leads Red Team engagements at XyberClan. Serious stuff.";
                nextState = 'SERIOUS';
            } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                botResponse = "Hello there! Ready to explore the cyberpunk realm?";
                nextState = 'HAPPY';
            } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
                botResponse = "You can reach the main unit telepathically... or just email josiasange37@gmail.com.";
                nextState = 'HAPPY';
            } else {
                botResponse = "Intriguing question. Use the Gemini API integration to unlock my full knowledge base about Josias!";
                nextState = 'NEUTRAL';
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
            setCurrentState(nextState);

            // Revert to neutral after a few seconds
            setTimeout(() => setCurrentState('NEUTRAL'), 5000);

        }, 1500);
    };

    // Calculate position classes
    const containerClasses = isWelcomeSequence
        ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] flex flex-col items-center scale-150 transition-all duration-1000 ease-in-out"
        : "fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none transition-all duration-1000 ease-in-out";

    return (
        <div className={containerClasses}>

            {/* Ambient/Section Speech Bubble */}
            {showBubble && (
                <div className={`absolute ${isWelcomeSequence ? '-top-24 w-64' : (isOpen ? 'bottom-[28rem] right-8 w-48' : 'bottom-32 right-8 w-48')} bg-black/90 border border-cyan-500/50 rounded-xl p-3 shadow-[0_0_20px_rgba(6,182,212,0.2)] animate-pulse ${isWelcomeSequence ? '' : 'pointer-events-none'} z-50 transition-all duration-500`}>
                    <div className="relative text-center">
                        <p className="text-cyan-300 text-xs font-mono">
                            {speechBubble}
                        </p>
                        {/* Triangular Tip - adjusted for welcome vs corner */}
                        {!isWelcomeSequence && (
                            <>
                                <div className="absolute -bottom-5 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-cyan-500/50 border-r-[10px] border-r-transparent"></div>
                                <div className="absolute -bottom-4 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-black border-r-[10px] border-r-transparent"></div>
                            </>
                        )}
                        {isWelcomeSequence && (
                            <>
                                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-cyan-500/50 border-r-[10px] border-r-transparent"></div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-black border-r-[10px] border-r-transparent"></div>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Chat Interface (Hidden during welcome) */}
            {!isWelcomeSequence && isOpen && (
                <div className="pointer-events-auto bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-2xl p-4 w-80 h-96 mb-4 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-10">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">MINI-ALMIGHT v1.0</span>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">&times;</button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto space-y-3 mb-2 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-2 rounded-lg text-sm ${msg.sender === 'user'
                                    ? 'bg-cyan-900/50 text-white border border-cyan-500/30'
                                    : 'bg-gray-800/80 text-gray-200 border border-white/10'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && <div className="text-cyan-400 text-xs animate-pulse">Processing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="flex gap-2 pt-2 border-t border-white/10">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask about ALMIGHT..."
                            className="bg-black/50 border border-white/10 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-cyan-500 flex-1 font-mono"
                        />
                        <button
                            onClick={handleSend}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Custom Styles for Float Animation */}
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .floating-avatar {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

            {/* Overlay background during welcome to dim site */}
            {isWelcomeSequence && (
                <div className="fixed inset-0 bg-black/80 z-[-1] backdrop-blur-sm transition-opacity duration-1000"></div>
            )}

            {/* Avatar Button */}
            <div className={`pointer-events-auto relative group cursor-pointer w-32 h-32 flex items-center justify-center ${isWelcomeSequence ? 'pointer-events-none' : ''}`} onClick={() => !isWelcomeSequence && setIsOpen(!isOpen)}>
                {/* Glow Effect - Subtler behind the character */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full scale-0 group-hover:scale-75 transition-transform duration-500"></div>

                {/* Avatar Image - Frameless & Floating */}
                <div className="floating-avatar relative w-full h-full transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <img
                        src={AVATAR_STATES[currentState]}
                        alt="Mini Almight"
                        className="w-full h-full object-contain filter brightness-110 contrast-110"
                    />
                </div>

                {/* Status Dot - Floating nearby */}
                <div className={`absolute bottom-4 right-8 w-3 h-3 rounded-full border border-black ${currentState === 'SERIOUS' ? 'bg-red-500 shadow-[0_0_8px_red]' : 'bg-green-500 shadow-[0_0_8px_green]'} transition-colors duration-300`}></div>
            </div>

        </div>
    );
};

export default AlmightBot;
