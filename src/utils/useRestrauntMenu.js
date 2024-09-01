import { useEffect , useState } from "react";
import { MENU_API } from "./constants";


const useRestrauntMenu = (resId)=>{

    const [resInfo , useResInfo ] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API + resId ) ;
        const json = data.json();
        useResInfo(json);
    };
    return resInfo ;
};
export default useRestrauntMenu ;

