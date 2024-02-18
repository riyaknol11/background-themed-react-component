import React, { useState } from 'react';

const ToggleButton = () => {
    // Initializing state for dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // Changing state using setState function
        document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333';
        document.body.style.color = isDarkMode ? '#333' : '#fff';
    };

    return (
        <div>
            <h1>Toggle Button State Example</h1>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <p>When the user clicks the toggle button, the toggleDarkMode function is invoked, which toggles the state of isDarkMode variable.</p>
        </div>
    );
};

export default ToggleButton;
