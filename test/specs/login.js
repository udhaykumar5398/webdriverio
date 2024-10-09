describe("IntainVA", () => {
    // Test suite
    it("login page", async () => {
      // Navigate to the URL
      await browser.url('https://intainadmin.intainabs.com/');


    const emailInput = await $('//*[@id="signup-content"]/div[1]/div[1]/input');
    await emailInput.setValue('Trustee');
    console.log('Email entered.');

    const passwordInput = await $('//*[@id="signup-content"]/div[1]/div[2]/input');
    await passwordInput.setValue('wFRQjrH&yW7o');
    console.log('Password entered.');


    await $('//*[@id="signinbutton"]/span[1]').click();
    

     
     await browser.pause(30000);  // Pauses execution for 30 seconds
    });
  });
  