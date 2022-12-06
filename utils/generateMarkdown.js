// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

  function markDcontent(data)  {
    return `# ${data.title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Description

${data.description}
  
## Installation

${data.installation}
  
## Usage

${data.usage}

![alt text](assets/images/screenshot.png)
    
## License

${data.license}
  
## Contributing

${data.contributing}
  
## Tests

${data.tests}
  
## Questions

If you have any questions, email me at ${data.email} or visit my [GitHub](https://github.com/${data.github}).
  
  `
  }

module.exports = markDcontent;