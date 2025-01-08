import inquirer from "inquirer";
import fs from "fs";

const questions = [
  { type: 'input', name: 'title', message: 'What is your Project Title?' },
  { type: 'input', name: 'description', message: 'Project Description.' },
  { type: 'input', name: 'installation', message: 'Installation Instructions.' },
  { type: 'input', name: 'usage', message: 'Please provide usage information.' },
  { type: 'input', name: 'contribution', message: 'Please provide contribution guidelines.' },
  { type: 'input', name: 'test', message: 'Please provide test instructions.' },
  { type: 'input', name: 'license', message: 'Please provide license information.' },
  { type: 'input', name: 'github', message: 'Please provide your GitHub username.' },
  { type: 'input', name: 'email', message: 'Please provide your email address.' },
];

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

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md has been generated!');
});
