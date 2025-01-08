// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === 'None') {
	  return '';
	}
	return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
	if (license === 'None') {
	  return '';
	}
	return `[License](#license)`;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
	if (license === 'None') {
	  return '';
	}
	return `## License
  
  This project is licensed under the ${license} license.`;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
	return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution_guidelines}
  
  ## Tests
  ${data.test_instructions}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
  ${renderLicenseBadge(data.license)}
  `;
  }
  
  export default generateMarkdown;
  