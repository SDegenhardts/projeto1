"use client"

import Image from 'next/image'
import style from './page.module.css'
import { Efeitodeescrita } from "../app/components/efeitodeescrita";
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <section className={style.content}>
      <div>
        <h1>
        <TypeAnimation
      sequence={[
        'Utiliser', 
        1700, 
        'Contempler', 
        2700, 
        "C'est", 
        3100,
        () => {
          console.log('Sequence completed');
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
          <Efeitodeescrita
          text={'Femur Magna'}
          />
        </h1>
      </div>
    </section>
  )
}
