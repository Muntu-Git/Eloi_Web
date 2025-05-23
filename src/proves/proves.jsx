import React, { useState } from "react";

export default function Prova(){
    
    const [text, setText] = useState()  

    const textOnChange = (event) => {
        setText(event.target.value)
    }

    return(
        <div>
            <input type="text" value={text} onChange={textOnChange}/>
            <button>Clica</button>
            <text class="textprova">Text: {text}</text>
        </div>
    )
}