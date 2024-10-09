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


describe("IntainVA", () => {
  it("login page", async () => {
    await browser.url("https://intainva.intainabs.com/");

    console.log(await browser.getTitle());

    await $('//input[@id=":r0:" and @type="text"]').setValue(
      "srihari.sardena@intainft.com"
    );
    console.log("Email entered: srihari.sardena@intainft.com");

    await $('//input[@id=":r1:" and @type="password"]').setValue("IntainAVB");
    console.log("Password entered: IntainAVB");

    await $(
      '//div[@role="button" and @aria-expanded="false" and @aria-haspopup="listbox"]'
    ).click();
    console.log("Dropdown clicked");

    const adminOption = await $('li[data-value="Admin"]');
    await adminOption.click();
    console.log("Admin option selected");

    // Wait for the dropdown to disappear
    await browser.waitUntil(
      async () => !(await $('li[data-value="Admin"]').isDisplayed()),
      {
        timeout: 5000,
        timeoutMsg: "Dropdown did not close after selecting Admin",
      }
    );
    console.log("Dropdown closed");

    // Click the submit button using the provided XPath
    const submitButton = await $(
      '//*[@id="mainContent"]/div[2]/div/div[2]/div/div/div/form/button'
    );

    // Optional: Force-click using JavaScript if needed
    await browser.execute((el) => el.click(), submitButton);
    console.log("Submit button clicked");

    await browser.pause(2000); // Optional: Wait for 2 seconds
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

      ///Add Deal

    const AddDeal = await $(
      '//*[@id="root"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[3]/button'
    );
    await AddDeal.click();
    console.log("AddDeal clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

  

    const DealNamefield = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[1]/div"
    );
    await DealNamefield.click();
    console.log("DealNamefield clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    const DealNameselect = await $('//*[@id="menu-poolname"]/div[3]/ul/li[5]');
    await DealNameselect.click();
    console.log("DealNameselect clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    const Datexpath = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/div/div/button"
    );
    await Datexpath.click();
    console.log("Datexpath clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    const Dateselect = await $(
      "/html/body/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div[3]/button[4]"
    );
    await Dateselect.click();
    console.log("Dateselect clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    const Assetclass = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[3]/div/div"
    );
    await Assetclass.click();
    console.log("Assetclass clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    const Assetclassselect = await $("/html/body/div[3]/div[3]/ul/li[1]");
    await Assetclassselect.click();
    console.log("Assetclassselect clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

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

    await browser.pause(1000); //

    const Selectprocessor1 = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[4]/div/input"
    );
    await Selectprocessor1.click();
    console.log("Selectprocessor1 clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    // const Adddealbutton = await $(
    //   "/html/body/div[2]/div[3]/div/div/form/div[6]/div/div/button[2]"
    // );
    // await Adddealbutton.click();
    // console.log("Adddealbutton clicked.");
    // await browser.pause(1000); // Optional: Wait for 2 seconds

    const Adddealcancel = await $( "/html/body/div[2]/div[3]/div/div/form/div[6]/div/div/button[1]");
    await Adddealcancel.click();
    console.log("Adddealcancel clicked.");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await selectAndClickElementByText(elements, 'Email ID')



    await selectAndClickElementByText(elements, 'Deal Name');
    await selectAndClickElementByText(elements, 'Attribute Name');
    await selectAndClickElementByText(elements, 'Attribute Standard Name');
    await selectAndClickElementByText(elements, 'Attribute Category');
    await selectAndClickElementByText(elements, 'Attribute Display');


    const processor = await $(
      "/html/body/div/div/div[2]/ul[1]/li[3]/a/button/span[1]/span[1]/img"
    );
    await processor.click();
    console.log("processor clicked.");
    await browser.pause(3000);

    await selectAndClickElementByText(elements, "Processor");
    await selectAndClickElementByText(elements, "Email ID");
    await selectAndClickElementByText(elements, "Role");
    await selectAndClickElementByText(elements, "Deals");

    const Addprocessor = await $(
      "/html/body/div/div/div[3]/div/div[2]/div[1]/div[3]/div/div/div/button/span[1]"
    );
    await Addprocessor.click();
    console.log("Addprocessor clicked.");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_name"]').setValue("Minhaj");
    console.log("First Name entered: Minhaj");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_userlastname"]').setValue("Alam");
    console.log("userlastname entered: Alam");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_emailid"]').setValue("minhaj.alam@intainft.com");
    console.log("Email entered: minhaj.alam@intainft.com");
    await browser.pause(3000); // Optional: Wait for 2 seconds
 
    // Inject custom JavaScript to hook into fetch and XHR
    await browser.execute(() => {
      // Hook into fetch API
      window.__apiResponses = [];
      const originalFetch = window.fetch;
      window.fetch = function () {
        return originalFetch.apply(this, arguments).then((response) => {
          response.clone().json().then((data) => {
            window.__apiResponses.push({
              url: arguments[0],
              status: response.status,
              data: data
            });
          });
          return response;
        });
      };

      // Hook into XMLHttpRequest API
      const open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
        this.addEventListener('load', function () {
          try {
            const responseJSON = JSON.parse(this.responseText);
            window.__apiResponses.push({
              url: this.responseURL,
              status: this.status,
              data: responseJSON
            });
          } catch (e) {
            // Ignore if not JSON response
          }
        });
        open.apply(this, arguments);
      };
    });

  // Click the button to trigger the API request
  const addprocessor = await $(
    "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
  );
  await addprocessor.click();

  // Wait for the API response
  await browser.pause(3000); // Adju

   
    // Retrieve the captured API responses
    const apiResponses = await browser.execute(() => {
      return window.__apiResponses;
    });

    // Filter only responses with status code 422 or non-200 responses
    const filteredResponses = apiResponses.filter(response => 
      response.status === 422 || response.status !== 200
    );

    // Log the filtered API responses
    console.log('Filtered API Responses (422 or non-200):', filteredResponses);

});
});