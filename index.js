// Importing the inquirer package for CLI prompts
import inquirer from "inquirer";

// Importing the fs (file system) package for file operations
import fs from "fs";

// Array of questions to ask the user
const questions = [
  // Asking for the project title
  { type: 'input', name: 'title', message: 'What is your Project Title?' },

  // Asking for the project description
  { type: 'input', name: 'description', message: 'Project Description.' },

  // Asking for installation instructions
  { type: 'input', name: 'installation', message: 'Installation Instructions.' },

  // Asking for usage information
  { type: 'input', name: 'usage', message: 'Please provide usage information.' },

  // Asking for contribution guidelines
  { type: 'input', name: 'contribution', message: 'Please provide contribution guidelines.' },

  // Asking for test instructions
  { type: 'input', name: 'test', message: 'Please provide test instructions.' },

  // Asking for license information
  { type: 'input', name: 'license', message: 'Please provide license information.' },

  // Asking for GitHub username
  { type: 'input', name: 'github', message: 'Please provide your GitHub username.' },

  // Asking for email address
  { type: 'input', name: 'email', message: 'Please provide your email address.' },
];

// Function to generate the README content based on user input
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
For any questions, please contact me at ${answers.email}. You can also find more of my work at [GitHub](https://github.com/${answers.github}).
`;
}

// Prompting the user with the questions and handling the responses
inquirer.prompt(questions).then((answers) => {
  // Generating the README content from user input
  const readmeContent = generateReadme(answers);
  
  // Writing the README content to a file named README.md
  fs.writeFileSync('README.md', readmeContent);
  
  // Logging a success message to the console
  console.log('README.md has been generated!');
});
