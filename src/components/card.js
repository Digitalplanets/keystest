import React from 'react'
import './Card.css'
import key from '../images/keyspix.jpg'
import {useState} from 'react'

function Card() {

const [keyname, setkeyName] = useState('19keys');
const [titles, setTitle] = useState('Founder / Global Thought Leader');
const [myinfo, setMyinfo] = useState('High LvL Conversations.');

    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src={key} alt='keys' height="100px" width="100px"/>
                </div>  
            </div>
            <div className="lower-container">
                <h3> { keyname } </h3>
                <h4> { titles } </h4>
                <p> {myinfo} </p>
            </div>
        </div>
    )
}

export default Card 