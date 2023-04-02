This repository contains automated tests for the website https://adrian-bogdan.com/ using Cypress.io.

## Requirements
“*”Node.js
“*”Cypress.io

## Installation
Clone the repository and install the required packages:
``` npm install ```

## Running the tests
To run the tests, open Cypress using the following command:
```npm run cy:open```
Once Cypress is open, click on the test file adrian_bogdan.spec.js to run the tests.

## Description of tests
The **adrian_bogdan.spec.js** file contains tests for the following:

Testing if copyright exists
Testing if the webpage name exists
Testing if the user can press on the menu button
Testing if Resume, Works, Blog, and Contacts buttons exist in dropdown
Testing Home, Resume, Works, Blog, and Contacts button functionality
Testing the Scroll button functionality on the Resume page
Testing the Download CV button functionality on the Resume page

## Note
The test for the website name not existing has been disabled.
The test for the Download CV button functionality requires the download to complete for the test to pass. The test may fail if the download takes too long or if the download fails.
