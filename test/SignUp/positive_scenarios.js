const signup = require("../../pages/signUp")
 const signupPage = browser.page.signUp()

 
 describe('Sign Up', function(){

    before(function(browser){
        browser
        .window.maximize()
        .page.signUp().navigate()
    })

    after(function(browser){
        browser
        .end()
    })

    it('YOMACS-10: Navigate Sign Up page', function(browser){
        signupPage
        .clickSignUp()
        .clickJoinNow()
        .pause(1000)
        .saveScreenshot('./screenshots/YOMACS-10.png')
    }),

    it('YOMACS-11: Successful Sign-Up with Valid Data', function(browser){
        signupPage
        .pause(3000)
        .setValue('@input_fullName', 'Hsu Yee Nandar')
        .setValue('@input_email', 'hsuyeenandar@gmail.com')
        .setValue('@input_password', '12345678')
        .setValue('@input_confirmPassword', '12345678')
        //.click('@btn_submit')
        .pause(3000)
        .saveScreenshot('./screenshots/YOMACS-11.png')
    }),

    it('YOMACS-12: Pass Show Hide behavior when click Eye icon', function(browser){
        
        signupPage
        .pause(3000)

        //password as text
        .click('@eyeIcon_password', function(){
            browser.assert.attributeEquals('#password', 'type', 'text')
        })

        //password is masked
        .click('@eyeIcon_password', function(){
            browser.assert.attributeEquals('#password', 'type', 'password')
        })

        //confirm password as text
        .click('@eyeIcon_confirmPassword', function(){
            browser.assert.attributeEquals('#confirmPassword', 'type', 'text')
        })

        //confirm password is masked
        .click('@eyeIcon_confirmPassword', function(){
            browser.assert.attributeEquals('#confirmPassword', 'type', 'password')
        })
        .saveScreenshot('./screenshots/YOMACS-12.png')
    }),

    it('YOMACS-13: SignUp with Special Characters and Numeric in Username', function(browser){
        signupPage
        .pause(3000)
        .setValue('@input_fullName', 'Hsu@Yee')
        .assert.textContains('div[class$="mb-4"]', 'Please enter character only (a-z and A-Z).')
        .setValue('@input_fullName', 'Hsu12344Yee')
        .assert.textContains('div[class$="mb-4"]', 'Please enter character only (a-z and A-Z).')
        .pause(1000)
        .saveScreenshot('./screenshots/YOMACS-13.png')
    })

 })