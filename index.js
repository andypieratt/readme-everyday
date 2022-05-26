// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];
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
      message: "Please list the table of contents!",
      name: "tableOfContents",
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
      type: "checkbox",
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
  .then((response) => {
    fs.writeFile(
      "./output/README.md",
      `# ${response.title}

## DESCRIPTION

${response.description}

## TABLE OF CONTENTS

${response.tableOfContents}

## INSTALLATION

${response.installation}

## USAGE

${response.usage}

## LICENSE

${response.license}

## CONTRIBUTORS

${response.contributors}

## TESTS

${response.tests}

## CONTACT/QUESTIONS

${response.github}
${response.email}`,
      (err) => {
        err
          ? console.log(err)
          : console.log(
              "Responses have been added to the README.md file in the OUTPUT Folder!"
            );
      }
    );
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
