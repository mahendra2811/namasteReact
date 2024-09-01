import React , {lazy} from "react" ;
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter , RouterProvider , Outlet  } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";


// lazzy laoding 
// or on demand loading 

// pehle se load nahi kerega grocerry , ye baad me laod keregaa
const Grocery = lazy(()=>{
    import("./src/components/Grocery");
} );

 const Applayout = ()=> {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
            {/* outlet is replaced by the children element for this  */}
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children: [
                {
                    path:"/",
                    element: <Body/>
                },
                {
                    path:"/about",
                    element: <About/>
                },
                {
                    path:"/contact",
                    element: <Contact/>
                },
                {
                    path:"/restaurents/:resId",
                    element: <RestaurantMenu/>
                },
                {
                    path:"/grocery",
                    element: <Grocery/>
                },
        ],
        errorElement: <Error/>
    },
   
    // {
    //     path:"/res",
    //     element: <Res />,
    // }
]);
    const root = ReactDom.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router={appRouter} />);









// const Titles = () => (
//     <h1 className="head"   tabIndex={5}> 
//         Namaste react using JSX 🚀🚀
//     </h1> 
// )
 
// const HeadingComponents = () =>(
//     <div id="container">
//         {Titles()}
//         {/* <Titles/>
//         <Titles></Titles> */}
//         <h1 className="headings"> 
//             Namste react functional components 
//         </h1>
//     </div>
// );

// const root =  ReactDom.createRoot(document.getElementById("root"));
// root.render(<HeadingComponents/>);
























//  const parent = React.createElement("div" , {id:"parent"} , 
//      React.createElement("div" , {id:"child"} , 
//        [
//           React.createElement("h1" , {} , "hello this is h1 tag") , 
//           React.createElement("h4" , {} , "hello this is h3 tag ")
//        ] 
//   ))
//  console.log(parent);


//  // const heading = React.createElement("h1" , {id:"heading" , xyz:"abc"} , "hello mahendra ");
// const root = ReactDom.createRoot(document.getElementById("root"));
 // root.render(parent);