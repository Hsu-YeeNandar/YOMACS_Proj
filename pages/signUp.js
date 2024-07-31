module.exports = {

    url: 'https://carshare.yomafleet.com/',

    elements: {
        menu_signUp: {
            selector: 'div > div > div.items-center > div.flex a:nth-of-type(2)',
        },
        btn_joinNow: {
            selector: 'button.dark\\:border-transparent',
        },
        input_fullName: {
            selector: '#fullName',
        },
        input_email: {
            selector: '#username',
        },
        input_password: {
            selector: '#password',
        },
        input_confirmPassword: {
            selector: '#confirmPassword',
        },
        eyeIcon_password: {
            selector: 'div:nth-of-type(3) path:nth-of-type(1)',
        },
        eyeIcon_confirmPassword: {
            selector: 'div:nth-of-type(4) svg',
        },
        btn_submit: {
            selector: 'aria/SUBMIT',
        },
    },

    commands: {
        clickSignUp() {
            this.element.find('@menu_signUp').click()
            this.assert.urlContains('/account/register/type')
            return this
        },
        clickJoinNow() {
            this.element.find('@btn_joinNow').click()
            this.assert.urlContains('/account/register')
            return this
        }
    }

}