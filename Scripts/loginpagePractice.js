//Objective: Automate and validated Login Page functionality of https://rahulshettyacademy.com/loginpagePractise/
//Author: Nick Nazareno

import { expect as expectchai } from 'chai'
describe('Login Page Practise', async()=>{

it('Successful login', async()=>
    {
        //Define variables
        const username = $("#username")
        const password = $("#password")

        //Invoke browser
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        //Enter valid Username and Password
        await username.setValue("rahulshettyacademy")
        await password.setValue("learning")

        //Click Sign-in button and validate successful login
        await $("#signInBtn").click()
        await browser.pause(7000)
        console.log(await browser.getTitle()) //Page title should be changed to ProtoCommerce
        await expect (browser).toHaveTitle("ProtoCommerce")
        await browser.saveScreenshot("loginpagePractice-SuccessfulLogin.png")
    }
)

it('Unsuccessful login', async()=>
    {
        //Define variables
        const username = $("#username")
        const password = $("#password")

        //Invoke browser
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        //Enter valid Username and Password
        await username.setValue("rahulshettyacademy")
        await password.setValue("learning123")

        //Click Sign-in button and validate unsuccessful login
        await $("#signInBtn").click()
        await browser.saveScreenshot("loginpagePractice-UnsuccessfulLogin.png")
        console.log(await browser.getTitle()) //Page title should not change
        await expect (browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        $(".alter-danger").waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "error message should be displayed"
        })
    }
)

it('Switch User Type via Radio Button', async()=>
    {
        //Define variables
        const radiobutton = $$(".radiotextsty") //This needs an index
        const warningmodal = $(".modal-body")
        const warningokbutton = $("#okayBtn")

        //Invoke browser
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        //Click User radio button
        await radiobutton[1].click()

        //Validate that pop-up message is displayed
        await warningmodal.waitForDisplayed({
            timeout: 4000,
            timeoutMsg: "Warning pop-up should be displayed"
        })
       if (expect(warningmodal).toBeDisplayed() === true )
        {
            console.log("Warning pop-up is displayed")
        } 
                await warningokbutton.click()

        //verify User radio button is selected
        await radiobutton[1].isSelected()
        if (expect(radiobutton[1]).toBeDisplayed() === true )
            {
                console.log("User radio button is selected")
            }
        await browser.pause(5000)
        await browser.saveScreenshot("loginpagePractice-Switch user.png")     
    }       
)

it('Select dropdown option', async()=>{
        //Define variables
        const dropdown = $("select.form-control")

        //Invoke browser
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

        //Select desired dropdown option
        await dropdown.selectByAttribute('value','consult')
        await browser.pause(5000)
        console.log(await dropdown.getValue())
        //chai assertion
        expectchai(await dropdown.getValue()).to.equal("consult")
        await browser.saveScreenshot("loginpagePractice-SelectDropdownOption.png")   
    }
)


}) //end of test suite
