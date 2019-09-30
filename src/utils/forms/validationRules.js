
const validate=(value,rules,form)=>{
    let valid=true;

    for(let rule in rules){
        switch (rule){
            case 'isRequired':
                valid=valid && validateRequired(value);
                break;
            case 'isEmail':
                valid=valid && validateEmail(value);
                break;
            case 'minLength':
                valid=valid && validateMinLength(value,rules[rule]);
                break;
            case 'maxLength':
                valid=valid && validateMaxLength(value,rules[rule]);
                break;
            case 'confirmPass':
                valid=valid && validateConfirmPass(value,form[rules.confirmPass].value);
                break;
            default:
                value=true;
        }
    }
    return valid;

}

const validateRequired=value=>value!=='';

const validateEmail=email=>{
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return expression.test(String(email).toLowerCase());
}

const validateMinLength=(value,ruleValue)=>value.length>=ruleValue;

const  validateMaxLength=(value,ruleValue)=>value.length>=ruleValue;

const validateConfirmPass=(confirmPass,password)=>confirmPass===password;
export default validate;
