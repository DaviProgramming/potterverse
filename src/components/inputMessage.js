import React from 'react'

const InputMessage = (props) => {
    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    if(props.sendCheck === true){

        if((props.inputValue).length >= 1){

            if(validateEmail(props.inputValue) === false){
                return (
                    <span className='input-error'>Digite um Email valido !</span>
                  )
            }
    
            else{
               return (
                <span className='input-sucess'>Registrado com sucesso !</span>
               )
            }
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