// import React, {Component} from 'react'

// export default class Guest extends Component{
//     render(){
//         return(
         
//             <React.Fragment>
//            <h1>Welcome Guest</h1>
//               <button onClick={this.props.clickData}>Login</button>
//               <button>SignUp</button>
//         </React.Fragment>
//         );
//     }
// }



/*multi level using props*/
// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Guest Component</h3>
//                 <h4>{this.props.nm}</h4>
//             </div>
//         )
//     }
// }

/**context API */

// import {MyContext} from "./App";
// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Guest Component</h3>
//                 <MyContext.Consumer>
//                    {({data, handleClick}) => (
//                        <div>

//                            <h4>Name: {data.name} Value: {data.value}</h4>
//                            <button onClick={handleClick}>Change Value</button>
//                        </div>
//                    )


//                    }
//                 </MyContext.Consumer>
//             </div>
//         )
//     }
// }

/**context type */

// import {Consumer} from "./Context";
// import {MyContext} from "./Context"
// export default class Guest extends Component {
//     static contextType = MyContext;
//     render() {
//                 return (
//                     <div>
//                         <h3>Guest Component</h3>
                       
        
//                                    <h4>Name: {this.context.data.name} Value: {this.context.data.value}</h4>
//                                    <button onClick={this.context.handleClick}>Change Value</button>
//                                </div>
//                            )
        
        
                         
                
//             }
// }
