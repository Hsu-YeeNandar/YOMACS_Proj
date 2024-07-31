
module.exports = {

    url: 'https://carshare.yomafleet.com/',

            elements: {
                menu_more:{
                    selector: 'nav span:nth-of-type(2)',
                },
                btn_contactUs: {
                    selector: 'a[href$="/contact"]',
                },
                btn_inquiry: {
                    selector: 'div[class$="text-center mt-3"]',
                },
                btn_submit:{
                    selector: '//button[text()="SUBMIT"]',
                },
                hylink_faq: {
                    selector: 'a[href*="/faqs"]',
                },
                hylink_Review: {
                    selector: 'a[href*="/rental-reviews"]',
                },
                input_fullName: {
                    selector: '#full_name',
                },
                input_email: {
                    selector: '#email',
                },
                input_phoneNumber: {
                    selector: '#national_number',
                },
                txtarea_message: {
                    selector: '#message',
                },
                dropdown_phoneNumber: {
                    selector: 'div.select__input-container',
                },
                dropdown_extValue:{
                    selector: '#react-select-country_code-option-151',
                },

                dropdown_subject: {
                    selector: '#subject',
                },
                dropdown_subjectValue: {
                    selector: '#*[option-3]',
                },
            },
    
    

    commands: {
            clickContactUs() {
            this.element.find('@menu_more').click()
            this.element.find('@btn_contactUs').click()
            return this
            },
            clickInquiryForm() {
            this.element.find('@btn_inquiry').click()
            this.assert.urlContains('/account/register/corporate')
            return this
            },
            clickFAQs(){
                this.element.find('@hylink_faq').click()
                this.assert.urlContains('/faqs')
                return this
            },
            clickRetalReview(){
                this.element.find('@hylink_Review').click()
                this.assert.urlContains('/rental-reviews')
                return this
            },
            basis_assertion(){
            this.assert.urlContains('/contact')
            return this
        }
    }
        
    }
