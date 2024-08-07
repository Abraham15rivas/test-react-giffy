
import React from 'react';
import { useLocation } from 'wouter';
import './Gif.css'

function Gif ({ nameClass = null, title, id, url }) {
    const [path, pushLocation] = useLocation('')

    const selectedGif = () => {
        console.log(path)
        pushLocation(`/gif/${id}`)
    }

    return (
        <a href={`#${id}`} onClick={selectedGif} className='Gif'>
            <img className={ nameClass ? nameClass : 'Gif-image' } alt={title} src={url} />
            <h4 className="Gif-title">{ title }</h4>
        </a>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    //console.log('prevProps', prevProps)
    //console.log('nextProps', nextProps)
})