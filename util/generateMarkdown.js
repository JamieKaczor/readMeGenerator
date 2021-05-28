// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ### Description
  ${data.describe}
  
  ### Installation
  ${data.install}
  
  ### Usage
  ${data.usage}
  
  ### Contributing
  ${data.contributors}
  
  ### Tests
  ${data.test}
  
  ### License
  ${data.license}
  
  ### Questions
  If you have any questions, please refer to my Github page, [${data.github}](https://github.com/${data.github}), or contact me through my email, ${data.email}
  
  ### Application in use
  `;
}

module.exports = generateMarkdown;
