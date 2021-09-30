import React, { useEffect, useRef } from 'react';
import './Page.scss';
import saoPaulo from '../../images/saoPaulo.jpg';
import lima from '../../images/lima.jpg';
import {gsap} from 'gsap';


const Page = () => {
    /* Otra forma con useEffect() */
    //let titulo = useRef(null);
    /* Otra forma con document.query() */
    useEffect(()=>{
        const titulo = document.querySelector(".titulo");
        gsap.from(titulo, {opacity: 0, y: 30, duration: 1})
    },[])
    return (
        <div className="container">
            <div className="wrapper">
                <div className="info">
                    <div className="info-center">
                        <h2 className="titulo">Bienvenida a la</h2>
                        <h2>introducción</h2>
                        <h1>GSAP</h1>
                        <h2>+</h2>
                        <h1>React</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nemo unde optio corrupti placeat voluptatibus!
                        </p>
                        <button>Animación Inversa</button>
                    </div>
                </div>
                <div className="images">
                    <div className="images-left">
                        <img src={saoPaulo} alt="Sao Paulo imagen" />
                    </div>
                    <div className="images-right">
                        <img src={lima} alt="Lima imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
