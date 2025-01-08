// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
    //Return the license link based on the input 
    return`https://opensource.org/licenses/${license}`;
  

}

//usage


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //check if a lisense is provided
  if (!license) {
    return ''; // if no liscense return an empty string
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

  ## discription
${data.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
- [License](#license)


## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
${data.github}
${data.email}

## Lisense
${renderLicenseLink(data.license)}

`;
}

export default generateMarkdown;
