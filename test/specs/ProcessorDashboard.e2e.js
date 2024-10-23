import { login } from "../../utils/login";

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
  
      
      const dashboardElement = await $('//*[text()="DASHBOARD"]');
      await dashboardElement.waitForDisplayed({ timeout: 5000 });  // Adjust timeout as needed
  
      // Get the text from the element
      const text = await dashboardElement.getText();
  
      // Assert that the text contains "Dashboard"
      await expect(text).toContain('DASHBOARD');
       // Get all elements with class "jss50"
    const elements = await $$('.jss50');
  
        // Sequentially click each element based on the given text in order
    await selectAndClickElementByText(elements, 'Deal Id');
  
    await selectAndClickElementByText(elements, 'Deal Name');
    await selectAndClickElementByText(elements, 'Asset Class');
  
    await selectAndClickElementByText(elements, 'Issuer');
    await selectAndClickElementByText(elements, 'No of Loans');
    await selectAndClickElementByText(elements, 'Date Created');
    await selectAndClickElementByText(elements, 'Status');
  
    await selectAndClickElementByText(elements, 'Last Activity');
    await selectAndClickElementByText(elements, 'Status');
  
  
  // Click the search button first
  await $('//*[@id="root"]/div/div[3]/div/div[2]/div/div[1]/div[2]/button').click();
  console.log("Search button clicked");
  
  // Wait for the input field to be displayed (adjust the XPath if necessary)
  const inputField = await $('//*[@id="root"]/div/div[3]/div/div[2]/div/div[1]/div[1]/div/div/div/input');
  
  // Now enter the value in the input field
  await inputField.setValue('223IRT340');
  console.log("Value entered: 223IRT340");
  
  await $('/html/body/div/div/div[3]/div/div[2]/div/div[1]/div[1]/div/button/span[1]').click();
  console.log("Search button closed clicked");
  
  await $('/html/body/div/div/div[3]/div/div[2]/div/div[1]/div[2]/span/button').click();
  console.log("filter button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Click the button that opens the popup
  await $('/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div').click();
  console.log("dealid button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Pause for the popup to fully appear
  
  // Click the button that opens the popup
  await $('/html/body/div[3]/div[3]').click();
  console.log("dealidselect button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Pause for the popup to fully appear
  
  
  // Click the button that opens the popup
  await $('/html/body/div[2]/div[3]/div/div[2]/div[2]/div/div/div').click();
  console.log("dealname button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  
  // Pause for the popup to fully appear
  
  // Click the button that opens the popup
  await $('/html/body/div[3]/div[3]/ul/li[11]').click();
  console.log("dealnameselect button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Pause for the popup to fully appear
  
  // Click the button that opens the popup
  await $('/html/body/div[2]/div[3]/div/div[2]/div[3]/div/div/div').click();
  console.log("Assect class button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Pause for the popup to fully appear
  
  
  
  
  // Click the button that opens the popup
  await $('/html/body/div[3]/div[3]/ul/li[2]').click();
  console.log("Assectselect class button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Pause for the popup to fully appear
  
  //*[@id="mui-component-select-poolid"]
  //*[@id="mui-component-select-poolid"]
  
  // Click the button that opens the popup
  await $('/html/body/div[2]/div[3]/div/div[2]/div[4]/div/div/div').click();
  console.log("Issuer class button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Pause for the popup to fully appear
  
  // Click the button that opens the popup
  await $('/html/body/div[3]/div[3]/ul/li[35]').click();
  console.log("Issuerselect  button clicked");
  await browser.pause(1000); // Optional: Wait for 2 seconds
  
  // Pause for the popup to fully appear
  await browser.pause(3000); // Optional: wait for the popup to load
  
  // Click the button that opens the popup
  await $('/html/body/div[2]/div[3]/button').click();
  console.log("filterclose  button clicked");
  
  // Pause for the popup to fully appear
  await browser.pause(3000); // Optional: wait for the popup to load
  
  // Click the button that opens the popup
  await $('/html/body/div/div/div[2]/ul[2]/li/button').click();
  console.log("logout  button clicked");
  
  // Pause for the popup to fully appear
  await browser.pause(3000); // Optional: wait for the popup to load
  
  
  
  
  
    });
  });