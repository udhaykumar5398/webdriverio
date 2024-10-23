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
        
    
  // Get all elements with class "jss50"
  const elements = await $$('.jss50');
  
  // Sequentially click each element based on the given text in order
  await selectAndClickElementByText(elements, 'Deal Id');
  await selectAndClickElementByText(elements, 'Deal Name');
  await selectAndClickElementByText(elements, 'Asset Class');
  await selectAndClickElementByText(elements, 'Issuer');
  await selectAndClickElementByText(elements, 'Processor');
  await selectAndClickElementByText(elements, 'No. of Loans');
  await selectAndClickElementByText(elements, 'Date Created');

   
  const AddDeal = await $(
    '//*[@id="root"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[3]/button'
  );
  await AddDeal.click();
  console.log("AddDeal clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const DealName = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[1]/div"
  );
  await DealName.click();
  console.log("DealName clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const DealNameselect = await $('//*[@id="menu-poolname"]/div[3]/ul/li[5]');
  await DealNameselect.click();
  console.log("DealNameselect clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const Datexpath = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/div/div/button"
  );
  await Datexpath.click();
  console.log("Datexpath clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const Dateselect = await $(
    "/html/body/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div[3]/button[4]"
  );
  await Dateselect.click();
  console.log("Dateselect clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const Assetclass = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[3]/div/div"
  );
  await Assetclass.click();
  console.log("Assetclass clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const Assetclassselect = await $("/html/body/div[3]/div[3]/ul/li[1]");
  await Assetclassselect.click();
  console.log("Assetclassselect clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const issuernameInput = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[4]/div/input"
  );
  await issuernameInput.setValue("Testussuer");
  console.log("issuernameInput clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  const Selectprocessor = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[5]/div/div[1]/div[2]/input"
  );
  await Selectprocessor.setValue("Srihari s"); // Set value to 'Srihari s'
  console.log("Typed 'Srihari s'.");

  await browser.keys("Enter");

  await browser.pause(2000); //

  const Selectprocessor1 = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[4]/div/input"
  );
  await Selectprocessor1.click();
  console.log("Selectprocessor1 clicked.");
  await browser.pause(2000); // Optional: Wait for 2 seconds

  // const Adddealbutton = await $(
  //   "/html/body/div[2]/div[3]/div/div/form/div[6]/div/div/button[2]"
  // );
  // await Adddealbutton.click();
  // console.log("Adddealbutton clicked.");
  // await browser.pause(2000); // Optional: Wait for 2 seconds
  // await browser.pause(1000); // Optional: Wait for 2 seconds

    const Adddealcancel = await $( "/html/body/div[2]/div[3]/div/div/form/div[6]/div/div/button[1]");
    await Adddealcancel.click();
    console.log("Adddealcancel clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

   

});
});