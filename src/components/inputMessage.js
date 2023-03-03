import React from 'react'

const InputMessage = (props) => {
    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    if((props.value).length >= 1){

        if(validateEmail(props.value) == false){
            return (
                <span className='input-error'>Digite um Email valido !</span>
              )
        }

        else{
            return;
        }
    }

    else{
        return;
    }
 
}

export default InputMessage