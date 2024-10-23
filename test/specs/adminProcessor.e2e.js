import { login } from "../../utils/login";
import { expect, browser, $ } from '@wdio/globals';

async function selectAndClickElementByText(elements, textToFind) {
  for (const el of elements) {
      const text = await el.getText();
      if (text === textToFind) {
          console.log(`Clicking on element with text: ${textToFind}`);
          await el.click(); 
          return; 
      }
  }
  console.log(`No matching element found for: ${textToFind}`);
}

describe("IntainVA_adminDashboard", () => {

  before(async () => {
    await browser.url("https://intainva.intainabs.com/");
    await login('srihari.sardena@intainft.com', 'IntainAVB', 'Admin');
    
    // Validate that you're on the dashboard
    await browser.waitUntil(async () => (await browser.getUrl()) === 'https://intainva.intainabs.com/admin/dashboard');
  });

  it("Dashboard TestCases", async () => {
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("/admin/dashboard"),
      { timeout: 30000, timeoutMsg: "Dashboard page did not load within the expected time" }
    );

    await browser.waitUntil(
      async () => (await $('span.pageTitle').getText()).includes("DASHBOARD"),
      { timeout: 10000, timeoutMsg: '"DASHBOARD" text did not appear on the page within the expected time' }
    );
    console.log('"DASHBOARD" text is present on the page');
    await browser.pause(3000);

    const elements = await $$('.jss50');

    const processor = await $("/html/body/div/div/div[2]/ul[1]/li[3]/a/button/span[1]/span[1]/img");
    await processor.click();
    console.log("Processor clicked.");
    await browser.pause(3000);

    const addProcessorButton = await $("/html/body/div/div/div[3]/div/div[2]/div[1]/div[3]/div/div/div/button/span[1]");
    await addProcessorButton.click();
    console.log("Add Processor clicked.");
    await browser.pause(2000); // Optional: Wait for 2 seconds

    // Fill the form without the "First Name" to trigger the required field validation
    await $('//*[@id="root_userlastname"]').setValue("kumar");
    console.log("Last Name entered: kumar");

    await $('//*[@id="root_emailid"]').setValue("udhya.kumar@intainft.com");
    console.log("Email entered: udhya.kumar@intainft.com");

    // Find the first name input element to check its validation state
    const firstNameInput = await $('//*[@id="root_name"]');
    
    // Simulate clicking the submit button
    const submitButton = await $("/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]");
    await submitButton.click();
    console.log("Attempted to submit without First Name.");
    
    await browser.pause(2000);  // Wait for the popup to appear

    // Check the validity state of the first name input
    const isFirstNameMissing = await browser.execute((firstName) => {
      return firstName.validity.valueMissing;  // Checks if the 'valueMissing' state is true
    }, firstNameInput);

    // Assert that the first name field is invalid (i.e., required but not filled)
    expect(isFirstNameMissing).toBe(true);
    console.log("First Name validation message triggered: 'Please fill in this field'.");

    // Retrieve and check the validation message
    const validationMessage = await browser.execute((firstName) => {
      return firstName.validationMessage;  // Fetches the browser's validation message
    }, firstNameInput);

    // Log the validation message for debugging
    console.log("Validation Message:", validationMessage);  

    // Assert that the validation message is what you expect
    expect(validationMessage).toBe('Please fill out this field.');

    // If the validation message is incorrect, log it
    if (validationMessage !== 'Please fill out this field.') {
      console.error(`Unexpected validation message: ${validationMessage}`);
    }

    // Refresh the page and fill in all fields
    await browser.refresh();
    console.log("Page refreshed.");

    await processor.click();  // Navigate back to the processor section
    await browser.pause(3000);

    await selectAndClickElementByText(elements, "Processor");

    const addProcessorButton1 = await $("/html/body/div/div/div[3]/div/div[2]/div[1]/div[3]/div/div/div/button/span[1]");
    await addProcessorButton1.click();
    console.log("Add Processor clicked.");
    await browser.pause(2000); // Optional: Wait for 2 seconds

    // Now enter all fields correctly
    await $('//*[@id="root_name"]').setValue("udhay");
    console.log("First Name entered: udhay");

    await $('//*[@id="root_emailid"]').setValue("udhya.kumar@intainft.com");
    console.log("Email entered: udhya.kumar@intainft.com");

    const lastNameInput = await $('//*[@id="root_userlastname"]');

    // Simulate clicking the submit button
    await submitButton.click();
    console.log("Attempted to submit without Last Name.");
    
    await browser.pause(2000);  // Wait for the popup to appear

    // Check the validity state of the last name input
    const isLastNameMissing = await browser.execute((lastName) => {
      return lastName.validity.valueMissing;  // Checks if the 'valueMissing' state is true
    }, lastNameInput);

    // Assert that the last name field is invalid (i.e., required but not filled)
    expect(isLastNameMissing).toBe(true);
    console.log("Last Name validation message triggered: 'Please fill in this field'.");

    // Retrieve and check the validation message
    const validationMessage1 = await browser.execute((lastName) => {
      return lastName.validationMessage;  // Fetches the browser's validation message
    }, lastNameInput);

    // Log the validation message for debugging
    console.log("Validation Message:", validationMessage1);  

    // Assert that the validation message is what you expect
    expect(validationMessage1).toBe('Please fill out this field.');

    // If the validation message is incorrect, log it
    if (validationMessage1 !== 'Please fill out this field.') {
      console.error(`Unexpected validation message: ${validationMessage1}`);
    }

    // Refresh the page again
    await browser.refresh();
    console.log("Page refreshed.");

    await addProcessorButton.click();
    console.log("Add Processor clicked again.");
    await browser.pause(2000); // Optional: Wait for 2 seconds

    // Now enter the First Name and Last Name but leave Email ID empty
    await $('//*[@id="root_name"]').setValue("udhay");
    console.log("First Name entered: udhay");

    await $('//*[@id="root_userlastname"]').setValue("kumar");
    console.log("Last Name entered: kumar");

    await $('//*[@id="root_emailid"]').setValue(""); // Leave email empty
    console.log("Email left empty.");

    // Simulate clicking the submit button
    await submitButton.click();
    console.log("Attempted to submit without Email ID.");
    
    await browser.pause(2000);  // Wait for the popup to appear

    // Check the validity state of the email input
    const isEmailMissing = await browser.execute((email) => {
      return email.validity.valueMissing;  // Checks if the 'valueMissing' state is true
    }, await $('//*[@id="root_emailid"]'));

    // Assert that the email field is invalid (i.e., required but not filled)
    expect(isEmailMissing).toBe(true);
    console.log("Email ID validation message triggered: 'Please fill in this field'.");

    // Retrieve and check the validation message
    const emailValidationMessage = await browser.execute((email) => {
      return email.validationMessage;  // Fetches the browser's validation message
    }, await $('//*[@id="root_emailid"]'));

    // Log the validation message for debugging
    console.log("Email Validation Message:", emailValidationMessage);  

    // Assert that the validation message is what you expect
    expect(emailValidationMessage).toBe('Please fill out this field.');

    // If the validation message is incorrect, log it
    if (emailValidationMessage !== 'Please fill out this field.') {
      console.error(`Unexpected validation message: ${emailValidationMessage}`);
    }

    // Finally, fill in all fields correctly and submit the form
    await $('//*[@id="root_emailid"]').setValue("udhya.kumar@intainft.com");
    console.log("Email entered: udhya.kumar@intainft.com");

    // Submit the form
    await submitButton.click();
    console.log("Form submitted with all fields.");
    // Add API interception logic as before
    await browser.execute(() => {
      window.__apiResponses = [];  // Initialize array to store API responses

      // Intercept fetch API requests
      const originalFetch = window.fetch;
      window.fetch = function () {
        return originalFetch.apply(this, arguments).then((response) => {
            response.clone().json().then((data) => {
                window.__apiResponses.push({
                    url: arguments[0],   // URL of the request
                    status: response.status,  // HTTP status code
                    data: data  // JSON response body
                });
            });
            return response;  // Return the original response
        });
      };

      // Intercept XMLHttpRequest requests
      const open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
        this.addEventListener('load', function () {
          try {
              const responseJSON = JSON.parse(this.responseText);
              window.__apiResponses.push({
                  url: this.responseURL,   // URL of the request
                  status: this.status,  // HTTP status code
                  data: responseJSON  // JSON response body
              });
          } catch (e) {
              console.error('Error parsing JSON response:', e);
          }
        });
        open.apply(this, arguments);
      };
    });

    // Click the "add processor" button to trigger the API request
    await submitButton.click();
    console.log("addprocessor clicked.");

    // Wait for the API response
    await browser.pause(3000);

    // Retrieve and log the API responses
    const apiResponses = await browser.execute(() => window.__apiResponses);
    console.log('Captured API Responses:', apiResponses);

    const errorResponses = apiResponses.filter(response => response.status !== 200);
    console.log('Error API Responses:', errorResponses);

    const processorErrorResponse = errorResponses.find(response => response.url.includes('/JWT_TOKEN'));
    console.log('Processor Error expected Response:', processorErrorResponse);

    if (processorErrorResponse) {
      expect(processorErrorResponse.status).toBe(409);
      expect(processorErrorResponse.data).toHaveProperty('message');
      expect(processorErrorResponse.data.message).toContain('Processor already exists.');
    } else {
      console.log('No response with "/JWT_TOKEN" found. Available API responses:', apiResponses);
    }
  });
});
