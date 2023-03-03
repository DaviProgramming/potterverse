import React from 'react'
import news1 from '../assets/noticia-harry-1.jpg';
import wallpaper from '../assets/wallpaper3.jpg'
const LastNews = () => {
    return (
        <section className='container last-news'>
            <h1 className='title'> Últimas Noticias</h1>
            <div className="cards"><a href="#">
                <div className="card">
                    <div className="card-img">
                        <img src={news1} alt="" />
                    </div>
                    <div className="card-text">
                        <div className="title">Voldemort em "Harry Potter", Ralph Fiennes defende J.K. Rowling: "O abuso verbal contra ela é nojento"</div>
                    </div>
                </div></a>

                <a href="#">
                    <div className="card">
                        <div className="card-img">
                            <img src={news1} alt="" />
                        </div>
                        <div className="card-text">
                            <div className="title">Voldemort em "Harry Potter", Ralph Fiennes defende J.K. Rowling: "O abuso verbal contra ela é nojento"</div>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="card">
                        <div className="card-img">
                            <img src={news1} alt="" />
                        </div>
                        <div className="card-text">
                            <div className="title">Voldemort em "Harry Potter", Ralph Fiennes defende J.K. Rowling: "O abuso verbal contra ela é nojento"</div>
                        </div>
                    </div>
                </a>

            </div>
            <div className="background-img">
                <img src={wallpaper} alt="" />
            </div>
        </section>
    )
}

export default LastNews