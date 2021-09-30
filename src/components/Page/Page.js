import React, { useEffect, useRef } from 'react';
import './Page.scss';
import saoPaulo from '../../images/saoPaulo.jpg';
import lima from '../../images/lima.jpg';
import {gsap, Elastic, Power4} from 'gsap';


const Page = () => {
    /* Otra forma con useEffect() */
    //let titulo = useRef(null);
    /* Otra forma con document.query() */
    /* https://greensock.com/docs/v2/Easing */
    //const tl =  gsap.timeline({defaults: {opacity:0, y:30, duration: 1, ease: Elastic.easeOut.config(1, 0.3)}});
    const tl =  gsap.timeline({defaults: {opacity:0, y:30, duration: 1, ease: Power4.easeOut}});
    useEffect(()=>{
        const titulo = document.querySelectorAll(".titulo");
        const titulo2 = document.querySelectorAll(".titulo2");
        const imagen = document.querySelectorAll(".imagen");
        tl
            .from(titulo, {x:50, stagger: 0.3})//stagger para hacer una animación encadenada
            .from(titulo2, {x:-50, stagger: 0.3}, "-=1")//-=1  => para que se ejecute un segundo antes offset para que no espera la animación anterior
            .from(imagen, {y: 60, stagger: 0.3}, "-=1.5")
    })
    return (
        <div className="container">
            <div className="wrapper">
                <div className="info">
                    <div className="info-center">
                        <h2 className="titulo">Bienvenida a la</h2>
                        <h2 className="titulo2">introducción</h2>
                        <h1 className="titulo">GSAP</h1>
                        <h2 className="titulo2">+</h2>
                        <h1 className="titulo">React</h1>
                        <p className="titulo">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nemo unde optio corrupti placeat voluptatibus!
                        </p>
                        <button onClick={() => tl.reversed() ? tl.play() : tl.reverse()} clasName="titulo2">Animación Inversa</button>
                        {/* ehecutar en revesa apenas haga clock en el button, si es enreversa que se ejecuta y sino  */}
                    </div>
                </div>
                <div className="images">
                    <div className="images-left">
                        <img className="imagen" src={saoPaulo} alt="Sao Paulo imagen" />
                    </div>
                    <div className="images-right">
                        <img className="imagen" src={lima} alt="Lima imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
