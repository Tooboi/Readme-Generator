// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let badge = '';
// function renderLicenseBadge(data) {
//   const type = data.license[0];
//   console.log(type);
//   if (type === 'MIT') {
//     badge = '![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)'
//   };
//   if (type === 'Apache') {
//     badge = '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache-blue?style=flat-square)'
//   };
//   if (type === 'GPL') {
//     badge = '![License: General Public License 2.0](https://img.shields.io/badge/License-GPL-blue?style=flat-square)'
//   };
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README 
// If there is no license, return an empty string
function renderLicenseSection(license) {}


  function markDcontent(data)  {
    return `# ${data.title}

![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue?style=flat-square)

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

Protected under the ${data.license} license.
  
## Contributing

${data.contributing}
  
## Tests

${data.tests}
  
## Questions

If you have any questions, email me at ${data.email} or visit my [GitHub](https://github.com/${data.github})
  
`
  }

module.exports = markDcontent;