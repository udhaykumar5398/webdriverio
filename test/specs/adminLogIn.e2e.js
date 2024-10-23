import { expect, browser, $ } from '@wdio/globals';
import { login } from '../../utils/login';

describe("IntainVA Automation logIn Page", () => {

    it("should display an error for incorrect arguments , all fields and login with correct credentials", async () => {
        await browser.url('https://intainva.intainabs.com/');
        console.log(await browser.getTitle());

        const emailInput = await $('input[type="text"]');
        await emailInput.setValue('wrongemail@intainft.com');
        console.log('Incorrect Email entered: wrongemail@intainft.com');

       
        const passwordInput = await $('input[type="password"]'); 
        await passwordInput.setValue('wrongPassword');
        console.log('Incorrect Password entered: wrongPassword');

        // Click the role dropdown and select 'Admin'
        const roleDropdown = await $('//div[@role="button" and @aria-haspopup="listbox"]');
        await roleDropdown.click();

        const adminOption = await $('li[data-value="Admin"]');
        await adminOption.click();
        console.log('Admin option selected');

        // Wait for the dropdown to disappear
        await browser.waitUntil(
            async () => !(await adminOption.isDisplayed()),
            {
                timeout: 5000,
                timeoutMsg: 'Dropdown did not close after selecting Admin'
            }
        );
        console.log('Dropdown closed');

        
        await browser.execute(() => {
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
                        console.error('Error parsing JSON response:', e);
                    }
                });
                open.apply(this, arguments);
            };
        });

        const submitButton = await $('button[type="submit"]'); 
        await submitButton.click();
        console.log('Submit button clicked');

        await browser.pause(3000);  

        // Retrieve the captured API responses
        const apiResponses = await browser.execute(() => {
            return window.__apiResponses;
        });
        console.log('Captured API Responses:', apiResponses);

        // Filter only responses with non-200 status (errors)
        const errorResponses = apiResponses.filter(response => response.status !== 200);

        // Log the error responses
        console.log('Error API Responses:', errorResponses);

        const loginResponse = errorResponses.find(response => response.url.includes('/JWT_TOKEN'));
        expect(loginResponse).toBeDefined();
        expect(loginResponse.status).toBe(401);  

        expect(loginResponse.data).toHaveProperty('message'); 
        expect(loginResponse.data.message).toContain('Incorrect emailid / password ,Please Enter valid credentials'); 


        await browser.refresh();
        await browser.pause(2000);

        console.log('Page refreshed for testing every elements');
        ////////////for every elements of the page ////////////////
         // Verify the URL
         const currentUrl = await browser.getUrl();
         expect(currentUrl).toContain('https://intainva.intainabs.com/');
         console.log('Current URL:', currentUrl);
 
         // Verify the page title
         const title = await browser.getTitle();
         console.log('Page Title:', title);
         expect(title).toContain(':: Welcome to Intain ABS :: Intain ABS Blockchain Platform powered by Intain ::'); // Adjust this based on the actual title
 
         console.log('URL and Title verified successfully.');
 
         // Verify the header element
         const headerElement = await $('//h1');
         await headerElement.waitForDisplayed({ timeout: 20000 });
         const headerText = await headerElement.getText();
         console.log('Header Text:', headerText);
         expect(headerText).toContain('Welcome to Intain ABS');
 
 
         const text1 = await $('//h4');
         await text1.waitForDisplayed({ timeout: 20000 });
         const headerText1 = await text1.getText();
         console.log('Header Text 1:', headerText1);
         expect(headerText1).toContain('Log in to your account to access Intain ABS');
 
         // Verify email label text
         const emailText = await $('#\\:r0\\:-label'); 
         const emailGetText = await emailText.getText();
         console.log('Email Label Text:', emailGetText);
 
         // Verify password label text
         const passwordText = await $('#\\:r1\\:-label');
         const passGetText = await passwordText.getText();
         console.log('Password Label Text:', passGetText);
 
         const text2 = await $('//p');
         const getText2 = await text2.getText();
         console.log('Paragraph Text:', getText2);
 
         const checkbox = await $('//span'); 
         const getText3 = await checkbox.getText();
         console.log('Checkbox Text:', getText3);
         
         // checkbox
         const clickedCheckbox = await $('//span//input')
         const isSelect = await clickedCheckbox.isSelected()
 
         if (!isSelect){
             await clickedCheckbox.click()
             console.log("Checked")
         }else{
             console.log("Not Checked")
         }
 
         // click the forgot button
 
         const forgotPass = await $('form .popupcancelbtn')
         forgotPass.click()
 
         const closeButton = await $('/html/body/div[2]/div[3]/div/div/div[2]/button[1]')
 
         await closeButton.click()
 
         // await closeButton.waitForDisplayed(20000)
         console.log("cancled the page ........")
 
 
 
         /// click create your account 
 
         const createButton = await $('span.text')
         const getCreateButtonText = await createButton.getText()
         console.log(getCreateButtonText)
 
         const clickCreateButton  = await $('//*[@id="mainContent"]/div[2]/div/div[2]/div/div/div/a/button/span[1]')
         await clickCreateButton.click()
 
         console.log("clicked button")
    

        const clickLogin = await $('//*[@id="mainContent"]/div[2]/div/div[2]/div/div/div/div/a/button/span[1]/span')

        await clickLogin.click()
        //////////////

        await browser.refresh();
        await browser.pause(2000);


        console.log('Page refreshed for correct login');

        // Correct Login Attempt
        console.log("Starting with correct login...");

        await login('srihari.sardena@intainft.com', 'IntainAVB', 'Admin');

    });
});


