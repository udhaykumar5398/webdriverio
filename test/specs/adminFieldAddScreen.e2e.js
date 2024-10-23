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

  it("Dashboard TestCases ", async () => {
   
    // await browser.pause(2000); // Optional: Wait for 2 seconds
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("/admin/dashboard"),
      {
        timeout: 30000, // Adjust the timeout if necessary
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );
    

    // Wait until the word "DASHBOARD" appears on the page
    await browser.waitUntil(
      async () => (await $('span.pageTitle').getText()).includes("DASHBOARD"),
      {
        timeout: 10000, // Adjust the timeout as needed
        timeoutMsg:
          '"DASHBOARD" text did not appear on the page within the expected time',
      }
    );
    console.log('"DASHBOARD" text is present on the page');
   
   
    const dashboardElement = await $('//*[text()="DASHBOARD"]');
    await dashboardElement.waitForDisplayed({ timeout: 5000 });  // Adjust timeout as needed

    // Get the text from the element
    const text = await dashboardElement.getText();

    // Assert that the text contains "Dashboard"
    await expect(text).toContain('DASHBOARD');
        
    await browser.pause(2000); // Optional: Wait for 2 seconds

  // Get all elements with class "jss50"
  const elements = await $$('.jss50');
  
  
  const Fielddashboard = await $(
    "/html/body/div/div/div[2]/ul[1]/li[4]/a/button/span[1]/span[1]/img"
  );
  await Fielddashboard.click();
  console.log("Fielddashboard clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  await selectAndClickElementByText(elements, "Deal Name");
  await selectAndClickElementByText(elements, "Attribute Name");
  await selectAndClickElementByText(elements, "Attribute Standard Name");
  await selectAndClickElementByText(elements, "Attribute Category");
  await selectAndClickElementByText(elements, "Attribute Display");

  const AddField = await $(
    "//html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
  );
  await AddField.click();
  console.log("Fielddashboard clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

 const dealnameinput= await $("//*[@id='root_attributePoolName']");


  await $("//*[@id='root_attributeName']").setValue("test");
  console.log("fieldname entered: test");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  await $("//*[@id='root_attributeStandardName']").setValue("testing");
  console.log("fieldStandardName entered: testing");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const categorybutton = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[4]/div/div/div/div"
  );
  await categorybutton.click();
  console.log("categorybutton clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const categoryselect = await $("/html/body/div[3]/div[3]/ul/li[2]");
  await categoryselect.click();
  console.log("categoryselect clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const DisplayUIyes = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[5]/div/div/div/label[1]/span[1]/span[1]/input"
  );
  await DisplayUIyes.click();
  console.log("DisplayUIyes clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const Addfieldbutton = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
  );
  await Addfieldbutton.click();
  console.log("Addfieldbutton clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds
 // Simulate clicking the submit button
 console.log("Attempted to submit without deal Name.");
 
 await browser.pause(2000);  // Wait for the popup to appear

 // Check the validity state of the last name input
 const isDealNameMissing = await browser.execute((dealname) => {
   return dealname.validity.valueMissing;  // Checks if the 'valueMissing' state is true
 }, dealnameinput);

 // Assert that the last name field is invalid (i.e., required but not filled)
 expect(isDealNameMissing).toBe(true);
 console.log("deal Name validation message triggered: 'Please fill in this field'.");

 // Retrieve and check the validation message
 const validationMessage = await browser.execute((dealname) => {
   return dealname.validationMessage;  // Fetches the browser's validation message
 }, dealnameinput);

 // Log the validation message for debugging
 console.log("Validation Message:", validationMessage);  

 // Assert that the validation message is what you expect
 expect(validationMessage).toBe('Please fill out this field.');

 // If the validation message is incorrect, log it
 if (validationMessage !== 'Please fill out this field.') {
   console.error(`Unexpected validation message: ${validationMessage}`);
 }

 // Refresh the page again
 await browser.refresh();
 console.log("Page refreshed.");

 const AddField1 = await $(
  "//html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
);
await AddField1.click();
console.log("Fielddashboard clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

await $("//*[@id='root_attributePoolName']").setValue("Credibly");
console.log("Dealname entered: Credibly");
await browser.pause(2000); // Optional: Wait for 2 seconds


const fieldnameinput=await $("//*[@id='root_attributeName']");

await $("//*[@id='root_attributeStandardName']").setValue("testing");
console.log("fieldStandardName entered: testing");
await browser.pause(2000); // Optional: Wait for 2 seconds

const categorybutton1 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[4]/div/div/div/div"
);
await categorybutton1.click();
console.log("categorybutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const categoryselect1 = await $("/html/body/div[3]/div[3]/ul/li[2]");
await categoryselect1.click();
console.log("categoryselect clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const DisplayUIyes1 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[5]/div/div/div/label[1]/span[1]/span[1]/input"
);
await DisplayUIyes1.click();
console.log("DisplayUIyes clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Addfieldbutton1 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
);
await Addfieldbutton1.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds
// Simulate clicking the submit button
console.log("Attempted to submit without deal Name.");

await browser.pause(2000);  // Wait for the popup to appear

// Check the validity state of the last name input
const isFieldnameMissing = await browser.execute((filedname) => {
 return filedname.validity.valueMissing;  // Checks if the 'valueMissing' state is true
}, fieldnameinput);

// Assert that the last name field is invalid (i.e., required but not filled)
expect(isFieldnameMissing).toBe(true);
console.log("deal Name validation message triggered: 'Please fill in this field'.");

// Retrieve and check the validation message
const validationMessage1 = await browser.execute((filedname) => {
 return filedname.validationMessage;  // Fetches the browser's validation message
}, fieldnameinput);

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

const AddField2 = await $(
  "//html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
);
await AddField2.click();
console.log("Fielddashboard clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

await $("//*[@id='root_attributePoolName']").setValue("Credibly");
console.log("Dealname entered: Credibly");
await browser.pause(2000); // Optional: Wait for 2 seconds

await $("//*[@id='root_attributeName']").setValue("test");
console.log("fieldname entered: test");
await browser.pause(2000); // Optional: Wait for 2 seconds


const filedstdnameinput=await $("//*[@id='root_attributeStandardName']")

const categorybutton2 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[4]/div/div/div/div"
);
await categorybutton2.click();
console.log("categorybutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const categoryselect2 = await $("/html/body/div[3]/div[3]/ul/li[2]");
await categoryselect2.click();
console.log("categoryselect clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const DisplayUIyes2 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[5]/div/div/div/label[1]/span[1]/span[1]/input"
);
await DisplayUIyes2.click();
console.log("DisplayUIyes clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Addfieldbutton2 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
);
await Addfieldbutton2.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds
// Simulate clicking the submit button
console.log("Attempted to submit without deal Name.");

await browser.pause(2000);  // Wait for the popup to appear

// Check the validity state of the last name input
const isFieldstdnameMissing = await browser.execute((filedstdname) => {
 return filedstdname.validity.valueMissing;  // Checks if the 'valueMissing' state is true
}, filedstdnameinput );

// Assert that the last name field is invalid (i.e., required but not filled)
expect(isFieldstdnameMissing).toBe(true);
console.log("deal Name validation message triggered: 'Please fill in this field'.");

// Retrieve and check the validation message
const validationMessage2 = await browser.execute((filedstdname) => {
 return filedstdname.validationMessage;  // Fetches the browser's validation message
}, filedstdnameinput);

// Log the validation message for debugging
console.log("Validation Message:", validationMessage2);  

// Assert that the validation message is what you expect
expect(validationMessage2).toBe('Please fill out this field.');

// If the validation message is incorrect, log it
if (validationMessage2 !== 'Please fill out this field.') {
 console.error(`Unexpected validation message: ${validationMessage2}`);
}

// Refresh the page again
await browser.refresh();
console.log("Page refreshed.");

const AddField3 = await $(
  "//html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
);
await AddField3.click();
console.log("Fielddashboard clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

await $("//*[@id='root_attributePoolName']").setValue("Credibly");
console.log("Dealname entered: Credibly");
await browser.pause(2000); // Optional: Wait for 2 seconds

await $("//*[@id='root_attributeName']").setValue("test");
console.log("fieldname entered: test");
await browser.pause(2000); // Optional: Wait for 2 seconds

await $("//*[@id='root_attributeStandardName']").setValue("testing");
console.log("fieldStandardName entered: testing");
await browser.pause(2000); // Optional: Wait for 2 seconds

const categorybutton3 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[4]/div/div/div/div"
);
await categorybutton3.click();
console.log("categorybutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const categoryselect3 = await $("/html/body/div[3]/div[3]/ul/li[2]");
await categoryselect3.click();
console.log("categoryselect clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const DisplayUIyes3 = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[5]/div/div/div/label[1]/span[1]/span[1]/input"
);
await DisplayUIyes3.click();
console.log("DisplayUIyes clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

// const Addfieldbutton3 = await $(
//   "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
// );
// await Addfieldbutton3.click();
// console.log("Addfieldbutton clicked.");
// await browser.pause(2000); // Optional: Wait for 2 seconds
await Addfieldbutton1.click();
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
await Addfieldbutton1.click();
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
 
const Issuercertificatedashboard = await $(
  "/html/body/div/div/div[2]/ul[1]/li[5]/a/button/span[1]"
);
await Issuercertificatedashboard.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Addcertificatedata = await $(
  "/html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
);
await Addcertificatedata.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Dealname = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[1]/div/div/div/div"
);
await Dealname.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Dealnameselect = await $("/html/body/div[3]/div[3]/ul/li[5]");
await Dealnameselect.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

await $('//*[@id="root_messageBody"]').setValue("testing");
console.log("messageBody entered: testing");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Messagetype = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[1]/div/div[3]/div/div/div/div"
);
await Messagetype.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Messagetypeselect = await $("/html/body/div[3]/div[3]/ul/li[2]");
await Messagetypeselect.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds

const Addcertificatedatabutton = await $(
  "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
);
await Addcertificatedatabutton.click();
console.log("Addfieldbutton clicked.");
await browser.pause(2000); // Optional: Wait for 2 seconds
});
});