import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";




class About extends Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    componentDidMount(){
        // console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render");
        return(
            <div className="about">
            <h1>About Class components</h1>
            <UserClass name={"first"} email= {"mahendrapuniya92@gmail.com"} phone = "1234567890" />
            {/* <UserClass name={"Second"} email= {"abc@gmail.com"} phone = "12341234" /> */}
        </div>
        );

      
    };
};






// const About = ()=>{
//     console.log("parent render");



    // return (
    //     <>
    //     <div className="about">
    //         <h1>About Us</h1>
    //         <User name={"first"} email= {"mahendrapuniya92@gmail.com"} phone = "1234567890" />
    //         <User name={"Second"} email= {"abc@gmail.com"} phone = "12341234" />
    //     </div>
    //     </>
    // );
// };
export default About ;