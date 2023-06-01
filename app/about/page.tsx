'use client'

import style from '../../app/about.module.css'
import { Efeitodeescrita } from "../components/efeitodeescrita"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {



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
        
        <img src="perfume1.jpg"/>

        <img src="perfume2.jpg"/>

        <img src="perfume3.jpg"/>
        
      </div>
      </div>
    </section>
  )
}