import React from 'react'
import hogwartsWallpaper from '../assets/hogwarts-wallpaper.jpg'
const About = () => {
  return (
    <section className='container about'>
      <div className="content">
      <div className="img-about">
              <img src={hogwartsWallpaper} alt="" />
        </div>
        <div className="about-infos">
          <div className="text-about">
            Se você é um fã de longa data ou acabou de descobrir a mágica do mundo de Harry Potter, você está no lugar certo. Aqui, oferecemos um espaço para compartilhar informações, novidades, curiosidades e opiniões sobre o universo de Harry Potter. Compartilhe sua paixão por Hogwarts, Grifinória, Sonserina, Corvinal e Lufa-Lufa, e junte-se à nossa comunidade apaixonada pelos livros e filmes de Harry Potter.
          </div>
        </div>

       

      </div>
    </section>
  )
}

export default About