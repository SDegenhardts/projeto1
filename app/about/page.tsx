'use client'

import style from '../../app/about.module.css'
import { Efeitodeescrita } from "../components/efeitodeescrita"
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

export default function Home() {

  const [text, setText]= useState("")
  const [textl, setTextl]= useState("")
  const [textll, setTextll]= useState("")

  return (
    <section>
      <div className={style.content}>
        <TypeAnimation
      sequence={[
        'Comprendre', 
        2000, 
        'Se sentir', 
        2500, 
        "Femur Magna", 
        3000,
        () => {
          console.log('Sequence completed');
        }
      ]}
      wrapper="span"
      cursor={true}

      style={{ fontSize: '2em', display: 'inline-block' }}
    />
        <h2>
          <Efeitodeescrita
            text = {'Proin rutrum lobortis dui, nec semper magna laoreet quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit eleifend enim in vulputate. Phasellus sit amet leo augue. Fusce porttitor non diam non pharetra. Suspendisse id aliquam felis. Etiam eget felis vitae sapien bibendum tristique vitae et est. Maecenas vel justo eget libero hendrerit luctus eu quis nisi. Suspendisse viverra metus odio, vitae gravida eros porttitor ac.'} />
        </h2>

        <div className={style.imagens}>

        <div onMouseEnter={() => setText("Idealização")} className={style.perfume1} onMouseLeave={() => setText("")}>
          <div className={style.frase1}>{text}</div>
        </div>

        <div onMouseEnter={() => setTextl("Produção")} className={style.perfume2} onMouseLeave={() => setTextl("")}>
          <div className={style.frase2}>{textl}</div>
        </div>

        <div onMouseEnter={() => setTextll("Conclusão")} className={style.perfume3} onMouseLeave={() => setTextll("")}>
          <div className={style.frase3}>{textll}</div>
        </div>
        
      </div>
      </div>
    </section>
  )
}