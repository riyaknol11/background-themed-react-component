# Introduction to React's useState Hook 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the following commands for the project setup

1. #### `Install Node.js and npm:`
If you haven't already installed Node.js and npm, you can download and install them from the official [Node.js website](https://nodejs.org/en)

2. #### `Create a new React application:`
Open your terminal or command prompt, and run the following command to create a new React application named "app-name":
                       **npx create-react-app app-name** 

3. #### `Navigate to the project directory:`
Once the creation process is complete, navigate into the newly created "app-name" directory using the following command:
                       **cd app-name**  

4. ####  `Start the development server:`
After navigating into the project directory, you can start the development server by running:
                        **npm start**

    This command will start the development server and open your default web browser to display the React application. Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


#


# Understanding of the use-case
### `Topic: Creating a simple dark mode/light mode switch for the entire page using useState hook of ReactJS.`

* We define a functional component ToggleButton which manages the isDarkMode state variable using the useState hook.
* A button is rendered on the UI that represents the current mode ("Switch to Dark Mode" or "Switch to Light Mode") based on the value of isDarkMode.
* When the user clicks the button, the toggleDarkMode function is called, which toggles the value of isDarkMode.
* Inside this function, we toggle the state of isDarkMode using setIsDarkMode(!isDarkMode).
* We toggle the value of isDarkMode to switch between dark mode and light mode.
* We directly manipulate the styles of the document.body element using JavaScript. Depending on the current state of isDarkMode, we set the backgroundColor to either dark (#333) or light (#fff), and the color (text color) to the opposite for better contrast and readability.
* setIsDarkMode(!isDarkMode): This function of JS toggles the state of isDarkMode using the setIsDarkMode(setState) function provided by the useState hook. When this line is executed, isDarkMode switches between true and false. If it was true, it becomes false, and vice versa.

