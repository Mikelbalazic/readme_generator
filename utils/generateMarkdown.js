// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licence) {
  if(licence === 'Eclipse'){
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (licence === 'GNU'){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (licence === 'Apache'){
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (licence === 'MIT'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else(licence === 'None')
    return '';
}

// function renderLicenseBadge(licence) {
//   if(licence !== 'None'){
//     return `![Github License ](https://img.shields.io/badge/License-${license}yellow.svg)`;
//   }
//   return '';
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licence) {
  if(licence === 'Eclipse'){
    return `https://opensource.org/licenses/EPL-1.0`;
  } else if (licence === 'GNU'){
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (licence === 'Apache'){
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (licence === 'MIT'){
    return `https://opensource.org/licenses/MIT`;
  } else (licence === 'None')
    return '';
}

// return `\n * [License](#License)\n`

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licence) {
  if(licence === ''){
    return 'This project is not licensed';
  }
  return `The project is licensed under the ${licence} licence.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Licence:

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)


  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Usage: 
  ${data.usage}
  ## Licence: 
  ${renderLicenseBadge(data.licence)}
  ${renderLicenseLink(data.licence)}
  ${renderLicenseSection(data.licence)}
  ## Contributors: 
  ${data.contribution}
  ## Test: 
  ${data.test}
  ## Contact Information: 
  Github: [${data.github}](https://github.com/${data.github})
  Email: [${data.email}](mail to: ${data.email})`;
}

module.exports = generateMarkdown;