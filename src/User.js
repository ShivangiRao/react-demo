// import React, {Component} from 'react'


// export default class User extends Component{
//     render(){
//         return(
          
//             <React.Fragment>
//                 <h1>Welcome Shivangi</h1>
//                 <button onClick={this.props.clickData}>Logout</button>
//             </React.Fragment>
//         )
//     }
// }


/*css module */
// import Styles from "./User.module.css"
// export default class User extends Component {
//     render() {
//         return (
//         <h2 className={Styles.txt}> Hello Users</h2>);
    
//     }
// }

/*lifting up state*/


// export default class User extends Component {
//     render() {
//       return <div>{this.props.name}</div>
//     }
// }





/*multi level using props*/
// import Guest from "./Guest"
// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h3> User Component</h3>
//                 <Guest nm={this.props.name}/>
//             </div>
//         )
//     }
// }


/*context API */

// import Guest from "./Guest"
// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                  <h3> User Component</h3>
//                  <Guest/>
//             </div>
//         )
//     }
// }


/**context type */

// import Guest from "./Guest";
// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>User Component</h3>
//                 <Guest/>
//             </div>
//         );
//     }
// }


/**strict mode */
import React, { Component } from 'react'

export default class User extends Component {
    componentWillMount(){
        console.log("User Component Will Mount")
    }
    render() {
        return (
            <h1>Hello GeekySHows</h1>
        )
    }
}
