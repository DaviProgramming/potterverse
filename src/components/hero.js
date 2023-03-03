import { React,  useState } from 'react'
import InputMessage from './inputMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import heroImage from '../assets/harry-wallpaper-2.jpg';

const Hero = () => {


    const [inputValue, setInputValue] = useState("");
    const [sendCheck, setInputCheck] = useState(false)

    const validations = {
        
        inputValidation(value){

            setInputValue(value);

            if(value >= 1){
                return;
            }

            else{
                setInputCheck(false);
            }
           
        },
        inputValidationButton(){

            if(inputValue.length >= 1){
                setInputCheck(true);
            }
            else{
                setInputCheck(false);
            }

        }
    }


    return (
        <section className='container hero'>
            <div className="content-hero">
                <div className="hero-content">
                    <div className="hero-text">Receba as mais diversas informações sobre <span>Harry potter</span></div>
                    <form>
                        <div className="form-control">
                            <input type="text" placeholder='Digite seu melhor Email' onChange={e => validations.inputValidation(e.target.value)} />
                            
                             <InputMessage sendCheck={sendCheck} inputValue={inputValue} />
                        </div>

                        <button className='button' type='button' onClick={()=>{ validations.inputValidationButton()}}><FontAwesomeIcon icon={faPaperPlane} /></button>


                    </form>
                </div>
                <div className="hero-img">
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero