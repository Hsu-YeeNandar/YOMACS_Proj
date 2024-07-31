const { elements } = require("./contactus");

module.exports = {

    elements: {
        dropdown_inquiryType:{
            selector: 'form > div:nth-of-type(1) div.select__input-container',
        },
        dropdown_inquiryTypeValue:{
            selector: '#react-select-type-option-0',
        },
        input_companyName:{
            selector: '#company_name',
        },
        dropdown_industry:{
            selector: 'div:nth-of-type(2) div.select__input-container',
        },
        dropdown_industryValue:{
            selector: '#react-select-industry-option-1',
        },
        input_contactPerson:{
            selector: '#contact_person',
        },
        input_jobTitle:{
            selector: '#job_title',
        },
        dropdown_ext:{
            selector: 'div.md\\:grid-cols-1 div.select__input-container',
        },
        dropdown_extValue:{
            selector: '#react-select-country_code-option-151',
        },
        input_phoneNumber:{
            selector: '#national_number',
        },
        input_email:{
            selector: '#email',
        },
        btn_submit:{
            selector: '//button[text()="SUBMIT"]',
        },
}
}