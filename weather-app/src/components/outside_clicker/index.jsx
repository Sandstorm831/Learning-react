import { createContext, useEffect, useRef, useState } from "react";


export const Usercontext = createContext(null)


export default function OutsideInsideClicker(props){

    const inRef = useRef(null);
    const [focussed, setFocussed] = useState(true)
    useOutsideandInsideClick(inRef, focussed, setFocussed);

    function useOutsideandInsideClick(ref){
        useEffect(() => {
            function handleMouseDown(event){
                if(ref.current && !ref.current.contains(event.target)){
                    setFocussed(false);
                }
                else if(ref.current || ref.current.contains(event.target)){
                    setFocussed(true);
                }
            }
            document.addEventListener('mousedown', handleMouseDown);
            return () => {
                document.removeEventListener('mousedown', handleMouseDown);
            };
        }, [ref]);
    }
    return <Usercontext.Provider value={focussed}> <h1>hello Mr.{focussed?"True":"False"}</h1><div ref={inRef}>{props.children}</div></Usercontext.Provider>
}