import logo from '../logo.svg';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';



export default function FallBack() {
return (<div className='Fallback-section'>
        <img src={logo} className='App-logo fallback-wrap' alt='logo'/>
    </div>);
}