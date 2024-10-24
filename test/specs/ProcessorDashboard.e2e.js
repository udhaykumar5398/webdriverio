import { login } from "../../utils/login";
import path from "path";

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

describe("IntainVA Processor Dashboard", () => {
    it("login page", async () => {
        await browser.url("https://intainva.intainabs.com/");
  
        console.log(await browser.getTitle());

        await login("srihari.sardena@intainft.com", "IntainAVB", "Processor");

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes("/processor/dashboard"),
            {
                timeout: 30000,
                timeoutMsg: "Dashboard page did not load within the expected time",
            }
        );

        await browser.waitUntil(
            async () => (await $('span.pageTitle').getText()).includes("DASHBOARD"),
            {
                timeout: 10000,
                timeoutMsg:
                    '"DASHBOARD" text did not appear on the page within the expected time',
            }
        );
        console.log('"DASHBOARD" text is present on the page');
   
        const dashboardElement = await $('//*[text()="DASHBOARD"]');
        await dashboardElement.waitForDisplayed({ timeout: 5000 });

        const text = await dashboardElement.getText();
        await expect(text).toContain('DASHBOARD');
        
        // Step 1: Click on the "Addlmsdata" element
        const Addlmsdata = await $("/html/body/div/div/div[3]/div/div[2]/div/div[3]/table/tbody/tr[1]/td[10]/div[2]");
        await Addlmsdata.click();
        console.log("Addlmsdata clicked.");
        await browser.pause(2000);

        // Step 2: Click on the "Browser" element
        const Browser1 = await $("/html/body/div[2]/div[3]/div/div[1]/div/div[1]/div/div[2]/div/div[1]");
        await Browser1.click();
        console.log("Browser clicked.");
        await browser.pause(2000);

        // Step 3: Locate the file input element where you upload the Excel file
        const fileInput = await $('input[type="file"]');

        // Step 4: Resolve the file path and upload
        const filePath = path.resolve('/home/rohityadav/Downloads/payzen_test2files (1).xlsx');
        await fileInput.setValue(filePath);
        console.log("Excel file uploaded successfully.");
        await browser.pause(2000);

        // Step 5: Wait for upload button and click if it's visible
        const uploadButton = await $("/html/body/div[2]/div[3]/div/div[2]/button");

        // Check if the button is present and clickable
        const isUploadButtonPresent = await uploadButton.isDisplayed();

        if (isUploadButtonPresent) {
            await uploadButton.waitForClickable({ timeout: 10000 });
            await uploadButton.click();
            console.log("Upload button clicked.");
        } else {
            console.log("Upload button not found after file upload, possibly due to correct file submission.");
        }

        // Step 6: Optional verification if needed
        const uploadConfirmation = await $("//*[contains(text(),'Upload Successful')]");
        const isUploadSuccessful = await uploadConfirmation.isDisplayed();
        console.log("Upload successful:", isUploadSuccessful);

        // Add API interception logic as before
        await browser.execute(() => {
            window.__apiResponses = [];  // Initialize array to store API responses

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

        await browser.pause(3000);

       // Retrieve and log the API responses
const apiResponses = await browser.execute(() => window.__apiResponses);
console.log('Captured API Responses:', apiResponses);

// Filter responses to check only for the success case
const successResponse = apiResponses.find(response => 
    response.url.includes('/saveLms') && response.status === 200
);

// Assert that the success response contains the correct message
if (successResponse) {
    expect(successResponse.status).toBe(200);
    expect(successResponse.data).toHaveProperty('message');
    expect(successResponse.data.message).toContain('The LMS has been successfully added.');
    console.log('Success response received and validated.');
} else {
    console.log('No success response found. Available API responses:', apiResponses);
    throw new Error('Expected success response was not received.');
}

    });
});
