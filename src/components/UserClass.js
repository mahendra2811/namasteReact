import {Component} from "react";
import '../CSS/UserClass.css';
    
class UserClass extends Component{

    constructor(props){
        super(props);
        // console.log(this.props.name + " Child constructor ");

        this.state= {
            userInfo : {
                name: "Dummy",
                login: "unknown",
                location: "Unknown",
                avatar_url: "",
                company: "",
                public_repos: 0,
                html_url: ""
            }
        }


    };
    
        async componentDidMount(){
        // console.log(this.props.name + "componentDidMount");
        // api call
        const data = await fetch("https://api.github.com/users/mahendra2811");
        const json = await data.json();
        this.setState({
            userInfo : json
        });

        console.log(json);
        
    }
    componentDidUpdate(){
        console.log("second componentDidUpdate called ");
    }
    render(){
        const {name, login, location, avatar_url, company, public_repos, html_url }= this.state.userInfo ;
        // console.log(name + "child render");
        // debugger;

        return (
            <>
            <div className='user-card'>
                <img src={avatar_url} alt={name} className='user-avatar' />
                <h2 className='user-name'>{name}</h2>
                <h3 className='user-login'>@{login}</h3>
                <p className='user-location'>Location: {location}</p>
                <p className='user-company'>Company: {company}</p>
                <p className='user-repos'>Public Repositories: {public_repos}</p>
                <a href={html_url} target='_blank' rel='noopener noreferrer' className='user-profile-link'>
                    View GitHub Profile
                </a>
            </div>
            </>
            // <div className='user-card' >
            //     <img src={avatar_url} />
            //     <h2 >Name : {name} </h2>
            //     <h3>Use r Id  - {login}</h3>
            //     <p>Location - {location}</p>
      
            // </div>
        )
        
    };
};
export default UserClass ;


// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 