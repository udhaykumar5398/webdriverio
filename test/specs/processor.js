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
    await browser.pause(3000);
    await browser.pause(3000);


    const adminOption = await $('li[data-value="Processor"]');
    await adminOption.click();
    console.log("Processor option selected");
    await browser.waitUntil(
      async () => !(await $('li[data-value="Processor"]').isDisplayed()),
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

    await browser.pause(3000); // Optional: Wait for 2 seconds

    const dashboardElement = await $('//*[text()="DASHBOARD"]');
    await dashboardElement.waitForDisplayed({ timeout: 5000 }); // Adjust timeout as needed

    const text = await dashboardElement.getText();

    await expect(text).toContain("DASHBOARD");
    const elements = await $$(".jss50");

    await selectAndClickElementByText(elements, "Deal Id");

    await selectAndClickElementByText(elements, "Deal Name");
    await selectAndClickElementByText(elements, "Asset Class");

    await selectAndClickElementByText(elements, "Issuer");
    await selectAndClickElementByText(elements, "No of Loans");
    await selectAndClickElementByText(elements, "Date Created");
    await selectAndClickElementByText(elements, "Status");

    await selectAndClickElementByText(elements, "Last Activity");
    await selectAndClickElementByText(elements, "Status");

    await $(
      '//*[@id="root"]/div/div[3]/div/div[2]/div/div[1]/div[2]/button'
    ).click();
    console.log("Search button clicked");

    const inputField = await $(
      '//*[@id="root"]/div/div[3]/div/div[2]/div/div[1]/div[1]/div/div/div/input'
    );

    // Now enter the value in the input field
    await inputField.setValue("223IRT340");
    console.log("Value entered: 223IRT340");

    await $(
      "/html/body/div/div/div[3]/div/div[2]/div/div[1]/div[1]/div/button/span[1]"
    ).click();
    console.log("Search button closed clicked");

    await $(
      "/html/body/div/div/div[3]/div/div[2]/div/div[1]/div[2]/span/button"
    ).click();
    console.log("filter button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[2]/div[3]/div/div[2]/div[1]/div/div/div").click();
    console.log("dealid button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[3]/div[3]").click();
    console.log("dealidselect button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[2]/div[3]/div/div[2]/div[2]/div/div/div").click();
    console.log("dealname button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[3]/div[3]/ul/li[11]").click();
    console.log("dealnameselect button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[2]/div[3]/div/div[2]/div[3]/div/div/div").click();
    console.log("Assect class button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[3]/div[3]/ul/li[2]").click();
    console.log("Assectselect class button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[2]/div[3]/div/div[2]/div[4]/div/div/div").click();
    console.log("Issuer class button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[3]/div[3]/ul/li[35]").click();
    console.log("Issuerselect  button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div[2]/div[3]/button").click();
    console.log("filterclose  button clicked");
    await browser.pause(1000); // Optional: Wait for 2 seconds

    await $("/html/body/div/div/div[2]/ul[2]/li/button").click();
    console.log("logout  button clicked");

    await browser.pause(3000); // Optional: wait for the popup to load
  });
});
