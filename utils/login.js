// utils/login.js

export async function login(username, password, role) {
    // Enter email
    const emailInput = await $('//input[@id=":r0:" and @type="text"]');
    await emailInput.setValue(username);
    
    // Enter password
    const passwordInput = await $('//input[@id=":r1:" and @type="password"]');
    await passwordInput.setValue(password);
    
    // Select role
    const roleDropdown = await $('//div[@role="button" and @aria-expanded="false" and @aria-haspopup="listbox"]');
    await roleDropdown.click();
    const roleOption = await $(`li[data-value="${role}"]`);
    await roleOption.click();

    await browser.waitUntil(
        async () => !(await $('li[data-value="${role}"]').isDisplayed()),
        {
            timeout: 5000,
            timeoutMsg: 'Dropdown did not close after selecting Admin'
        }
    );
    console.log('Dropdown closed');

    
    // Click submit button
    const submitButton = await $('//*[@id="mainContent"]/div[2]/div/div[2]/div/div/div/form/button');
    await submitButton.click();
    
    // Wait for redirection or validation
    await browser.pause(2000); // Adjust as necessary
}
