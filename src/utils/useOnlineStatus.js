import React, { useEffect, useState } from "react";

const useOnlineStatus = ()=>{

    // check if online 
    const [onlineStatus , setOnlineStatus] = useState(true );


    useEffect(()=>{
        window.addEventListener("offline" , ()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online" , ()=>{
            setOnlineStatus(true);
        });
    }, [])

    // boolean bvalue 

    return onlineStatus ;
}; 
export default useOnlineStatus ;