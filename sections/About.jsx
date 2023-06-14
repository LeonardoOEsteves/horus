"use client";

import { motion } from "framer-motion";

import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-0`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| Sobre o Metaverso' textStyles='text-center' />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>No Metaverso HORUS</span> o Roleplay ganha
        vida de forma excepcional, Ao cruzar a porta para este mundo virtual, você será
        imerso em uma experiência única, onde sua imaginação se torna realidade. Hoje, você poderá
        sentir os efeitos da {" "}
        <span className='font-extrabold text-white'>Loucura do Metaverso,</span> utilizando um dispositivo
       <span className='font-extrabold text-white'>VR</span> ou apenas clicando no visualizer,
        você poderá explorar o nosso Metaverso dentro do universo do GTA V FiveM, torne seus sonhos em realidade.
        Vamos <span className='font-extrabold text-white'>explorar</span> a loucura do metaverso juntos, rolando para baixo
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
