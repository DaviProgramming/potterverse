import { React,  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import heroImage from '../assets/harry-wallpaper-2.jpg';
const Hero = () => {


    const [inputValue, setInputValue] = useState("");

    const validations = {
        inputValidation(value){

        }
    }


    return (
        <section className='container hero'>
            <div className="content-hero">
                <div className="hero-content">
                    <div className="hero-text">Receba as mais diversas informações sobre <span>Harry potter</span></div>
                    <form>
                        <div className="form-control">
                            <input type="text" placeholder='Digite seu melhor Email' onChange={e => setInputValue(e.target.value)} />
                            
                             <span className='input-error'>Digite um Email valido !</span>
                        </div>

                        <button className='button' type='button' onClick={(e)=>{console.log(inputValue)}}><FontAwesomeIcon icon={faPaperPlane} /></button>


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