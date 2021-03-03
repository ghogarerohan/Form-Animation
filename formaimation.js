"use strict";
class formSubmit {
    constructor() {
        this.arrows = document.querySelectorAll('.fa-sign-in-alt');
        console.log(this.arrows);
        this.arrows.forEach(arrow => {
            console.log(arrow);
            arrow.addEventListener('click', () => {
                const input = arrow.previousElementSibling;
                console.log(input);
                const parent = arrow.parentElement;
                console.log(parent);
                const nextForm = parent.nextElementSibling;
                console.log(nextForm);
                if (input.type === 'text' && this.validateUser(input)) {
                    console.log('input is correct');
                    this.nextInput(parent, nextForm);
                }
                else if (input.type === 'email' && this.validateEmail(input)) {
                    console.log('input is valid');
                    this.nextInput(parent, nextForm);
                }
            });
        });
    }
    validateUser(user) {
        if (user.value.length < 6) {
            alert('Characters length is too small');
            this.error('rgb(189,87,87');
            return false;
        }
        else {
            this.error('rgb(87,189,130');
            return true;
        }
    }
    validateEmail(email) {
        const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailValidation.test(email.value)) {
            this.error('rgb(87,189,130');
            return true;
        }
        else {
            this.error('rgb(189,87,87');
            return false;
        }
    }
    error(color) {
        document.body.style.backgroundColor = color;
    }
    nextInput(parent, nextForm) {
        parent.classList.add('innactive');
        parent.classList.remove('innactive');
        nextForm.classList.add('active');
    }
}
const formanimation = new formSubmit();
//# sourceMappingURL=formaimation.js.map