'use client';
import Typed from "react-typed";

type CustomTypedProps = {
    className: string;
    strings: string[];
    typeSpeed: number;
    backDelay: number;
    backSpeed: number;
    loop?: boolean;	
}

export function CustomTyped( {className, strings, typeSpeed, backDelay, backSpeed, loop}: CustomTypedProps){
    return(
        <Typed
            className={className}
            strings={strings}
            typeSpeed={typeSpeed}
            backDelay={backDelay}
            backSpeed={backSpeed}
            loop={loop}
        />
    )
}