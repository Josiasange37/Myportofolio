import React, { createContext, useState, useContext } from 'react';

const BotContext = createContext();

export const BotProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState('hero');

    return (
        <BotContext.Provider value={{ currentSection, setCurrentSection }}>
            {children}
        </BotContext.Provider>
    );
};

export const useBot = () => {
    const context = useContext(BotContext);
    if (!context) {
        throw new Error('useBot must be used within a BotProvider');
    }
    return context;
};
