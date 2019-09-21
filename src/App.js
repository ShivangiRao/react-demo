// import React, {useState, useEffect} from 'react'
import React, {Component} from 'react'
import User from './User'
// import Guest from './Guest'
import "./App.css"
import Guest from './Guest';
import Shivangi from './Shivangi';

/*counter*/
// function App(){
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(50);
//   const handleIncrement = () =>
//   {
//     setCount(count + 1);
//   };
//   const handleDecrement = () =>
//   {
//     setCount1(count1 - 1);
//   };
//   useEffect(()=>{
//     console.log("Use Effect Called")
//   },[count]

//   );
//   return(
//     <React.Fragment>
//       <h1>Count Up: {count}</h1>
//       <button type="button" onClick={handleIncrement}>Increment</button>

//       <h1>Count Down: {count1}</h1>
//       <button type="button" onClick={handleDecrement}>Decrement</button>
//     </React.Fragment>
//   )
// }

/**Difference between function & class component */

/*function syntax*/
// // const Demo = () => {
// //   return
// //   <div>

// //   </div>
//     export default Demo;
// // }


/*class syntax*/
// export default class Demo extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


/*if else*/
// export default class App extends Component{
//   state = {
//     isLoggedIn: false
//   };

//   clickLogin = () =>
//   {
//     this.setState({isLoggedIn: true})
//   }
//   clickLogout = () =>
//   {
//     this.setState({isLoggedIn: false})
//   }

//     render(){
//       const isLoggedIn = this.state.isLoggedIn;
//       if(isLoggedIn){
//         return <User clickData={this.clickLogout}/>
//       }
//       else{
//       return <Guest clickData={this.clickLogin}/>
//       }
//     }
// }


/*map method */
// export default class App extends Component {
//   render() {
//     const arr =[10,20,30,40];
//     const newArr = arr.map( (num) => {
//       return <li>{num * 2}</li>
//     }

//     )
//     return(
//       <ul>
//         {newArr}
//       </ul>
//     );
   
//   }
// }

/*map with key attribute */
// export default class App extends Component {
//   state = {
//     users:[
//       {id:1,name:"sonam",password:"dsdsds"},
//       {id:2,name:"Khadim",password:"dadada"},
//       {id:3,name:"Hdd",password:"dcdcdc"},
//     ],
//     isLoggedIn:false 
//   }
//   render() {
//     const newUsers = this.state.users.map(user => {
//       console.log(user);
//       return <h1 key ={user.id}>ID: {user.id} Name: {user.name} Password: {user.password}</h1>
//     })
//     return (
//       <div>{newUsers}</div>
//     );
//   }
// }


/*inline css */
// export default class App extends Component {
//   state = {
//     change: false
//   };
//   clickHandle = () =>{
//     this.setState({change: true})
//   }
//   render() {
//     const btnStyle = {
//       color: "blue",
//       backgroundColor: "Orange"
//     };
//     if(this.state.change){
//       btnStyle.backgroundColor = "White";
//     }
//     return (
//       <div>
//         <button onClick ={this.clickHandle} style={btnStyle}>Button</button>
//       </div>
//     )
//   }
// }

/*external css */
// export default class App extends Component {
//   render() {
//     let style = false;
//     return (
//       <React.Fragment>
//         <h1 className="txtb">Hello App</h1>
//         <User color={style ? "txtb" : "txtg"}/>
//       </React.Fragment>
//     )
//   }
// }

/*css module */

// import Styles from "./App.module.css";

// export default class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//          <h1 className={Styles.txt}>Hello App</h1>
//          <User />
//       </React.Fragment>
//     );
//   }
// }

/*image in public folder */

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src ={process.env.PUBLIC_URL + "/Nature-Wallpaper-5.jpg"} alt="myimg" /> 
//       </div>
//     );
//   }
// }

/*image in src folder */

// import pic from "./Nature-Wallpaper-5.jpg"
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src ={pic} alt="myimg" /> 
//       </div>
//     )
//   }
// }

/*bootstrap */


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//        <button type="button" className="btn btn-danger">Danger</button>
//       </div>
//     )
//   }
// }


/*controlled component */


// export default class App extends Component {
//   state = {
//     value: ""
//   };
//   handleChange = e => {
//     this.setState({value: e.target.value.toUpperCase ()});
//   };
//   render() {
   
//     return (
//       <div>
//         <form>
//           <h2>Controlled by react</h2>
//         </form>
//         <input type="text" value={this.state.value} onChange={this.handleChange}/>
//       </div>
//     )
//   }
// }

/*multiple input elements  */


// export default class App extends Component {
//   state = {
//     name: "",
//     password: ""
//   }
//   handleChange = (e) => {
//       // console.log([e.target.name]);
//       this.setState({[e.target.name] : e.target.value});
//        };

//   handleSubmit = e =>{
//     console.log(e.target);
//     e.preventDefault();
//   }
      
//   render() {
//     return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
//             </label>
//             <br />
//             <label>
//                 Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
//             </label>
//             <br />
//             <input type="submit" value="Submit"/>
//           </form>
//       </div>
//     )
//   }
// }

/*Uncontrolled component */


// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       value: ""
//     }
//     this.textInput = React.createRef();
//   }
//   componentDidMount= () => {
      
//       this.textInput.current.focus();
//   };
//   handleSubmit = e =>{
//     e.preventDefault();
//     this.setState({value: this.textInput.current.value})

//   }
//   render() {
//     return (
//       <div>
        
//         <React.Fragment>
//           <h2>You typed: {this.state.value}</h2>
//           <form onSubmit={this.handleSubmit}>
//             Input: <input type="text" ref={this.textInput} />
//             <br/> <br/>
//             <input type="submit" value="Submit"/>
//           </form>
//         </React.Fragment>
//       </div>
//     )
//   }
// }

/*lifting up state */


// export default class App extends Component {
//   state ={
//     name: 'Shivangi'
//   };
//   render() {
//     return (
//      <User name={this.state.name}/>
//     )
//   }
// }




/*multi level using props*/
// export default class App extends Component {
//   state ={
//     name: 'Shivangi'
//   };
//   render() {
//     return (
      
//        <User name={this.state.name}/>
    
//     )
//   }
// }


/*context API */
// export const MyContext= React.createContext();
// export default class App extends Component {
//   state ={
//         name: 'Shivangi',
//         value: 10
//       };
//       handleClickContext = () =>{
//         this.setState({value: this.state.value + 1});
//       };
//   render() {
//     const conttextValue = {
//       data: this.state,
//       handleClick: this.handleClickContext
//     };
//     return (
//      <MyContext.Provider value={conttextValue}>
//        <User/>
//      </MyContext.Provider>
//     );
//   }
// }

/**context type */

// import {Provider} from "./Context";
// export default class App extends Component {
//   state ={
//             name: 'Shivangi',
//             value: 10
//           };
//           handleClickContext = () =>{
//             this.setState({value: this.state.value + 1});
//           };
//   render() {
//     const conttextValue = {
//             data: this.state,
//             handleClick: this.handleClickContext
//           };
//           return (
//            <Provider value={conttextValue}>
//              <User/>
//            </Provider>
//           );
//   }
// }

/**higher order components */

// import Sonam from "./Sonam";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Shivangi/>
//         <Sonam/>
//       </div>
//     )
//   }
// }

/**error boundaries */

// import nature from "./nature.jpg";
// import nature1 from "./nature1.jpg";
// import Image from "./Image";
// import Error from "./Error";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Error>
//           <Image pic1={nature}/>
//         </Error><br/><br/>
//         <Error>
//           <Image pic1={nature1}/>
//         </Error><br/><br/>
//         <Error>
//           <Image pic1="NoImage"/>
//         </Error>
//       </div>
//     )
//   }
// }


/**strict mode */


// export default class App extends Component {
//   render() {
//     return (
//       <React.StrictMode>
//   <User/>
//       </React.StrictMode>
  
//     );
//   }
// }

