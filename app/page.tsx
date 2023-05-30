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
        'Ganhe', 
        2000, 
        'Venda', 
        2000, 
        'Compre', 
        2000,
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
          <Efeitodeescrita
          text={'Lesticia'}
          />
        </h1>
      </div>
    </section>
  )
}
