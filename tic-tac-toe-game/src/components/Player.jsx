import {useState} from 'react';

/* eslint-disable react/prop-types */
export default function Player({name,symbol}){
const [isEditing,setIsEditing] = useState(false);
const [playerName,setName] = useState(name);

    function updateIsEditing(){
        setIsEditing(isEditing => !isEditing);
    }

    function updateName(event){
        setName(event.target.value);
    }
    return (
    <li>
        <span className="player">
        {
        !isEditing ?
            <span className="player-name">
                {playerName}
            </span> : 
            <input type="text" value={playerName} onChange={updateName}/>
        }
        <span className="player-symbol">
            {symbol}
        </span>
        <button onClick={updateIsEditing}>
            {isEditing ? 'Save' : 'Edit'}
        </button>
        </span>
    </li>
  );
}