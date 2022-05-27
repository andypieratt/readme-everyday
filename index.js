//Variables for "Require"
const inquirer = require("inquirer");
const fs = require("fs");

//Command-Line Prompts for Users
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please write a brief description of your project!",
      name: "description",
    },
    {
      type: "input",
      message: "Please describe the installation process!",
      name: "installation",
    },
    {
      type: "input",
      message: "Please describe the usage of this application!",
      name: "usage",
    },
    {
      type: "list",
      message: "Please select a license from below:",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "Please list the contributors of this project!",
      name: "contributors",
    },
    {
      type: "input",
      message: "Please describe the tests you performed!",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your github link?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your preferred email for contact?",
      name: "email",
    },
  ])
  //Writing the User Responses to the README.md File
  .then((response) => {
    fs.writeFile(
      "./output/README.md",
      `# ${response.title}
![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(
        response.license
      )}-yellow)
## Description:

${response.description}

## Table of Contents:
1. [Installaion](#installation)
1. [Usage](#usage)
1. [License](#license)
1. [Tests](#tests)
1. [Contact/Questions](#contact/questions)

## Installation:

${response.installation}

## Usage:

${response.usage}

## License:

${response.license}

## Contributors:

${response.contributors}

## Tests:

${response.tests}

## Contact/Questions:

${response.github}
${response.email}`,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(
            "Your responses have been added to the README file in the 'OUTPUT' Folder"
          );
        }
      }
    );
  });
