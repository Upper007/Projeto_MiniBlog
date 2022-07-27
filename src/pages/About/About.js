import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'


const About = () => {
    return (
        <div className={styles.About}>
            <h2>Sobre o mini <span>Blog</span></h2>
            <p>Este projeto consiste em um blog feito com React no front-end e FireBase no back-end.</p>

            <Link to="/posts/create" className='btn'>Criar post</Link>
        </div>
    )
}

export default About