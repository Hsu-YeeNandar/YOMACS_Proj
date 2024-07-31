const contactus = require("../../pages/contactus")
const ContactUsPage = browser.page.contactus()
const ApplicationInquiryPage = browser.page.applicationInquiry()

describe('Contact Us', function(){

    before(function(browser){
        browser
        .window.maximize()
        .page.contactus().navigate()
    })

    after(function(browser){
        browser
        .end()
    })

    it('YOMACS-1: Navigate Contact Us page', function(browser){
        ContactUsPage
        .clickContactUs()
        .basis_assertion()
        .saveScreenshot('./screenshots/YOMACS-1.png')
    }),
    

    /*it('SC-2: check Hotline number', function(browser){
       //browser.element.findAllByText('099999999')
       browser.assert.textContains('#main', '09YOMAFLEET (+959966235338)')
       browser.saveScreenshot('./screenshots/SC-2.png')
       
    }),*/

    it('YOMACS-2: Click Inquiry Form and verify able to navigate the correct Application Inquiry form page', 
        function(browser){
            ContactUsPage
            .clickContactUs()
            .clickInquiryForm()
            .saveSnapshot('./screenshots/YOMACS-2.html')

        }),
    it('YOMACS-3: Fill the necessary information in Application Inquiry form and submit', function(){
        ContactUsPage
        .clickContactUs()
        .clickInquiryForm()
        ApplicationInquiryPage
        .click('@dropdown_inquiryType')
        .click('@dropdown_inquiryTypeValue')
        .pause(3000)
        .click('@input_companyName')
        .setValue('@input_companyName', 'BrighterFuture')
        .click('@dropdown_industry')
        .click('@dropdown_industryValue')
        .click('@input_contactPerson')
        .setValue('@input_contactPerson','Hsu Yee Nandar')
        .click('@input_jobTitle')
        .setValue('@input_jobTitle','CEO')
        .click('@dropdown_ext')
        .waitForElementVisible('@dropdown_extValue', 3000)
        .click('@dropdown_extValue')
        .click('@input_phoneNumber')
        .setValue('@input_phoneNumber', '9775927277')
        .click('@input_email')
        .setValue('@input_email','hsuyeenandar@gmail.com')
        //.click('@btn_submit')
        .saveScreenshot('./screenshots/YOMACS-3.png')
    }),
    it('YOMACS-4: Verify FAQ', function(browser){
        ContactUsPage
        .clickContactUs()
        .clickFAQs()
        .saveSnapshot('./screenshots/YOMACS-4.html')
    }),
    it('YOMACS-5: Verify "Shared Rental Experiences"', function(browser){
        ContactUsPage
        .clickContactUs()
        .clickRetalReview()
        .saveSnapshot('./screenshots/YOMACS-5.html')
    })
    
    
})