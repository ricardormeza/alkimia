import {useEffect} from 'react'

export default function UseTitle({ title, description }){
    document.title = `Alkimia | ${title}`;
    
}