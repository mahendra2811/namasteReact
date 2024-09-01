
import { useRouteError } from "react-router-dom";  //this is hook as it has use in front nso it is called 


const Error = () =>{
  
    const err = useRouteError();
    // console.log(err);
    
    return (
        <div>
             <h1>Oops❗</h1>
      <h2>Something went wrong❗</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
        </div>
    );
};
export default  Error ; 