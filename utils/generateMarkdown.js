
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![License](https://img.shields.io/badge/license-${data.license})](https://shields.io)

  ## Description:
  ${data.description}

  ## Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Additional Information](#addition-info)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.collaborators}

  ## Tests:
  ${data.tests}

  ## Additional Information:
  -Github: [${data.github}](https://github.com/${data.github})
  -Email: ${data.email}



`;
}

module.exports = generateMarkdown;
