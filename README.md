# Playwright JS Testing for SauceDemo

This project contains automated end-to-end tests for the [SauceDemo](https://www.saucedemo.com/) web application using Playwright JS. SauceDemo is a sample e-commerce website designed for testing and demonstration purposes.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Running Tests](#running-tests)  
- [Test Structure](#test-structure)  
- [Configuration](#configuration)  
- [Reporting](#reporting)  
- [Contributing](#contributing)  
- [License](#license)  
- [Additional Resources](#additional-resources)  

---

## Project Overview

This project leverages Playwright JS to automate browser interactions and verify core functionalities of the SauceDemo application including:

- User login and authentication  
- Browsing and interacting with product listings  
- Adding items to the shopping cart  
- Completing the checkout process  

Tests are designed to run across multiple browsers supported by Playwright: Chromium, Firefox, and WebKit.

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) version 14 or higher installed  
- npm (comes with Node.js) or yarn package manager installed  

---

## Installation

1. Clone this repository:  
git clone <repository_url>
cd <repository_folder>



2. Install project dependencies:  
Using npm:  
npm install


Or using yarn:  
yarn install



3. Install Playwright browsers:  
npx playwright install



---

## Running Tests

- Run all tests on Chromium (default):  
npx playwright test



- Run tests on all browsers (Chromium, Firefox, WebKit):  
npx playwright test --project=chromium,firefox,webkit



- Run a specific test file:  
npx playwright test tests/example.spec.js



- To see tests running with a headed browser for debugging:  
npx playwright test --headed



---

## Test Structure

- All test files are located in the `tests/` directory.  
- Tests are written in JavaScript.  
- Tests use Playwright’s robust API to interact with UI elements on SauceDemo.  
- Page objects or locators can be implemented to improve maintainability.

---

## Configuration

- The `playwright.config.js` file contains project-wide Playwright test settings.  
- Browser selection, test retries, timeouts, and test reporters can be configured here.

---

## Reporting

- Test results are displayed in the console output.  
- For more advanced reports (HTML, JSON), configure reporters in `playwright.config.js`.  
- Example to generate an HTML report:  
npx playwright show-report



---

## Contributing

Contributions are welcome! Please follow these guidelines:

- Do not commit directly to the `master` or `main` branch. Use feature branches and pull requests.  
- Ensure code is linted and formatted consistently (e.g., using ESLint and Prettier).  
- Write clear, concise test descriptions and comments.  

---

## License

This project is licensed under the MIT License.

---

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)  
- [SauceDemo Website](https://www.saucedemo.com/)  
- [Node.js Download](https://nodejs.org/en/download/)  
