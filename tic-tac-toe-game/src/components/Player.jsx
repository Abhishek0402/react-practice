import {useState} from 'react';

/* eslint-disable react/prop-types */
export default function Player({name,symbol}){
const [isEditing,setIsEditing] = useState(false);

    function updateIsEditing(){
        setIsEditing(true);
    }

    return (
    <li>
        <span className="player">
        {
        !isEditing ?
            <span className="player-name">
                {name}
            </span> : 
            <input type="text" />
        }
        <span className="player-symbol">
            {symbol}
        </span>
        <button onClick={updateIsEditing}>Edit</button>
        </span>
    </li>
  );
}