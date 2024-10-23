

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

////
describe("IntainVA ", () => {
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

    await browser.waitUntil(
      async () => !(await $('li[data-value="Admin"]').isDisplayed()),
      {
        timeout: 5000,
        timeoutMsg: "Dropdown did not close after selecting Admin",
      }
    );
    console.log("Dropdown closed");

    const submitButton = await $(
      '//*[@id="mainContent"]/div[2]/div/div[2]/div/div/div/form/button'
    );

    await browser.execute((el) => el.click(), submitButton);
    console.log("Submit button clicked");

    await browser.pause(2000); 

    await browser.waitUntil(
      async () =>
        (await browser.getUrl()) ===
        "https://intainva.intainabs.com/admin/dashboard",
      {
        timeout: 10000, 
        timeoutMsg: "Dashboard page did not load within the expected time",
      }
    );
    console.log("Dashboard page URL loaded");


    await browser.waitUntil(
      async () => (await $("body").getText()).includes("DASHBOARD"),
      {
        timeout: 10000, 
        timeoutMsg:
          '"DASHBOARD" text did not appear on the page within the expected time',
      }
    );
    console.log('"DASHBOARD" text is present on the page');

    await browser.pause(3000); 
    
  const elements = await $$('.jss50');
  
  // Sequentially click each element based on the given text in order
  await selectAndClickElementByText(elements, 'Deal Id');
  await selectAndClickElementByText(elements, 'Deal Name');
  await selectAndClickElementByText(elements, 'Asset Class');
  await selectAndClickElementByText(elements, 'Issuer');
  await selectAndClickElementByText(elements, 'Processor');
  await selectAndClickElementByText(elements, 'No. of Loans');
  await selectAndClickElementByText(elements, 'Date Created')

    const AddDeal = await $(
      '//*[@id="root"]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[3]/button'
    );
    await AddDeal.click();
    console.log("AddDeal clicked.");
    await browser.pause(2000); 

  

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

    const Adddealbutton = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[6]/div/div/button[2]"
    );
    await Adddealbutton.click();
    console.log("Adddealbutton clicked.");
    await browser.pause(2000); // Optional: Wait for 2 seconds

    // const Adddealcancel = await $( "/html/body/div[2]/div[3]/div/div/form/div[6]/div/div/button[1]");
    // await Adddealcancel.click();
    // console.log("Adddealcancel clicked.");
    // await browser.pause(1000); // Optional: Wait for 2 seconds


    //await selectAndClickElementByText(elements, 'Email ID')


    const processor = await $(
      "/html/body/div/div/div[2]/ul[1]/li[3]/a/button/span[1]/span[1]/img"
    );
    await processor.click();
    console.log("processor clicked.");
    await browser.pause(3000); 

    await selectAndClickElementByText(elements, 'Processor')
    await selectAndClickElementByText(elements, 'Email ID')
    await selectAndClickElementByText(elements, 'Role')
    await selectAndClickElementByText(elements, 'Deals')



    const Addprocessor = await $(
      "/html/body/div/div/div[3]/div/div[2]/div[1]/div[3]/div/div/div/button/span[1]"
    );
    await Addprocessor.click();
    console.log("Addprocessor clicked.");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_name"]').setValue("Udhay");
    console.log("Email entered: Udhay");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_userlastname"]').setValue("kumar");
    console.log("Email entered: kumar");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    await $('//*[@id="root_emailid"]').setValue("udhaya.kumar@intainft.com");
    console.log("Email entered: Udhay");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    const addprocessor = await $(
      "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[2]/span[1]"
    );
    await addprocessor.click();
    console.log("addprocessor clicked.");
    await browser.pause(3000); // Optional: Wait for 2 seconds

    // const cancel = await $(  "/html/body/div[2]/div[3]/div/div/form/div[2]/div/div/button[1]/span[1]");
    // await cancel.click();
    // console.log("addprocessor clicked.");
    // await browser.pause(1000); // Optional: Wait for 2 seconds

    const Fielddashboard = await $(
      "/html/body/div/div/div[2]/ul[1]/li[4]/a/button/span[1]/span[1]/img"
    );
    await Fielddashboard.click();
    console.log("Fielddashboard clicked.");
    await browser.pause(2000); // Optional: Wait for 2 seconds

    await selectAndClickElementByText(elements, 'Deal Name');
    await selectAndClickElementByText(elements, 'Attribute Name');
    await selectAndClickElementByText(elements, 'Attribute Standard Name');
    await selectAndClickElementByText(elements, 'Attribute Category');
    await selectAndClickElementByText(elements, 'Attribute Display');



    const AddField = await $(
      "//html/body/div/div/div[3]/div/div[2]/div[2]/div/div/button/span[1]"
    );
    await AddField.click();
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
