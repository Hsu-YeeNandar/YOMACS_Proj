const findACar = require("../../pages/findACar")
const findACarPage = browser.page.findACar()

describe('Sign Up', function(){

    before(function(browser){
        browser
        .window.maximize()
        .page.findACar().navigate()
    })

    after(function(browser){
        browser.end()
    })

    it('YOMACS-19: Navigate Find A Car Page', function(browser){
        findACarPage
        .clickFindACar()
        .pause(1000)
        .saveScreenshot('./screenshots/YOMACS-19.png')
    })

    it('YOMACS-20: Find A Car with Valid Inputs for All Fields Same Pick-up and Return location', function(browser){
        findACarPage
        .pause(1000)
        .click('@dropdown_pickUpLocation')
        .click('@dropdown_pickUpLocationValue')
        .click('@datepick_pickUp')

        //select month
        .click('@dropdown_month')
        .setValue('@dropdown_month', '7')

        .click('@datepick_pickUpValue')
        .click('@timepick_pickUp_ampm')
        .click('@timepick_pickUpValue_ampm')
        .pause(3000)
        .click('@datepick_return')
        .click('@datepick_returnValue')
        .click('@timepick_return_ampm')
        .click('@timepick_returnValue_ampm')
        .click('@btn_findACar')
        if(findACarPage.assert.textContains('p[class$="text-sm text-gray-500 py-10 dark:text-textWhite"]', 'Found')){
            findACarPage.click('div:nth-of-type(1) > a > div > div > div')
            .pause(5000)
        }else{
            return 'No car found'
        }
        findACarPage
        .pause(2000)
        .saveSnapshot('./screenshots/YOMACS-20.html')
    }),

    it('YOMACS-21: Find A Car with Valid Inputs for All Fields Different Return location', function(browser){
        findACarPage
        .clickFindACar()
        .pause(1000)
        .click('@dropdown_pickUpLocation')
        .click('@dropdown_pickUpLocationValue')
        .click('@checkbox_returnLocation')
        .click('@dropdown_returnLocation')
        .click('@dropdown_returnLocationValue')
        .click('@datepick_pickUp')

        //select month
        .click('@dropdown_month')
        .setValue('@dropdown_month', '7')

        .click('@datepick_pickUpValue')
        .click('@timepick_pickUp_ampm')
        .click('@timepick_pickUpValue_ampm')
        .pause(1000)
        .click('@datepick_return')
        .click('@datepick_returnValue')
        .click('@timepick_return_ampm')
        .click('@timepick_returnValue_ampm')
        .click('@btn_findACar')
        if(findACarPage.assert.textContains('p[class$="text-sm text-gray-500 py-10 dark:text-textWhite"]', 'Found')){
            findACarPage.click('div:nth-of-type(1) > a > div > div > div')
            
        }else{
            return 'No car found'
        }
        findACarPage
        .pause(2000)
        .saveSnapshot('./screenshots/YOMACS-21.html')
    })
})