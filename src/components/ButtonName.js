import React, { useState } from "react";

function ButtonName (){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = ()=>{
        setIsVisible(!isVisible);
    };

    return (
        <div>
            
        </div>
    )
}