class formSubmit{
    arrows : NodeListOf<HTMLElement>;
    
    

    constructor(){
        this.arrows  = document.querySelectorAll('.fa-sign-in-alt')! as NodeListOf<HTMLElement>;
        console.log(this.arrows)

        this.arrows.forEach(arrow => {
            console.log(arrow)
            arrow.addEventListener('click',() =>{
                const input: any = arrow.previousElementSibling!;
                console.log(input);
                const parent: any  = arrow.parentElement!;
                console.log(parent);
                const nextForm : any = parent.nextElementSibling!
                console.log(nextForm)

                //checking validation 

                if(input.type === 'text' && this.validateUser(input)){
                    console.log('input is correct');
                    this.nextInput(parent, nextForm);
                }if(input.type === 'text' && this.validateEmail(input)){
                    console.log('input is valid');
                    this.nextInput(parent,nextForm);

                } if(input.type === 'text' && this.validateUser(input)){
                    console.log('input is valid');
                    this.nextInput(parent,nextForm);
                 
            });
        });
    }

    validateUser (user: any){
        if(user.value.length <6){
             alert('Characters length is too small')
             this.error('rgb(189,87,87');
             return false;
            } else {
                this.error('rgb(87,189,130');
                return true;
            }
        } 

    validateEmail(input:any){
            //const emailValidation: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(input.type.value.match(mailformat)){
                this.error('rgb(87,189,130')
                return true;
             }else{
             this.error('rgb(189,87,87');
             return false;

            }

        }

    error (color:any){

        document.body.style.backgroundColor = color;
    }


    nextInput(parent:any,nextForm:any){
        parent.classList.add('innactive');
        parent.classList.remove('innactive');
        nextForm.classList.add('active');
    }

 }




const formanimation = new formSubmit();
