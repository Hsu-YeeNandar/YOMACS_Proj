module.exports = {

    url: 'https://carshare.yomafleet.com/',

    elements: {
        menu_findACar: {
            selector: 'nav a:nth-of-type(3)',
        },
        dropdown_pickUpLocation: {
            selector: 'div.mb-3 > div',
        },
        dropdown_pickUpLocationValue: {
            selector: '#react-select-pickup_location-option-4-4',
        },
        checkbox_returnLocation: {
            selector: 'div.gap-3 input',
        },
        dropdown_returnLocation: {
            selector: 'form > div:nth-of-type(2) > div',
        },
        dropdown_returnLocationValue: {
            selector: '#react-select-return_location-option-4-15',
        },
        datepick_pickUp: {
            selector: 'input[placeholder$="Select Pick-up Date"]',
        },
        datepick_pickUpValue: {
            selector: 'div.open span:nth-of-type(35)',
        },
        datepick_return: {
            selector: 'input[placeholder$="Select Return Date"]',
        },
        datepick_returnValue: {
            selector: 'div.open span:nth-of-type(15)',
        },

        //am~pm
        timepick_pickUp_ampm: {
            selector: 'input[placeholder$="Select Pick-up Time"]',
        },
        timepick_pickUpValue_ampm: {
            selector: 'div.open span.flatpickr-am-pm',
        },
        timepick_return_ampm: {
            selector: 'input[placeholder$="Select Return Time"]',
        },
        timepick_returnValue_ampm: {
            selector: 'div.open span.flatpickr-am-pm',
        },

        btn_findACar: {
            selector: '#SimulateButton',
        },

        dropdown_month: {
            selector: 'div.open select',
        },
        
    },

    commands: {
        clickFindACar() {
            this.element.find('@menu_findACar').click()
            this.assert.urlContains('/findacar')
            return this
        },

        clickHelpMeFind() {
            this.element.find('main a').click()
            this.assert.urlContains('/locations')
            return this
        }
    }
}