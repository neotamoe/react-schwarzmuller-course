import React, {Component} from 'react';

// const withClass2 = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const withClass2 = (WrappedComponent, className) => {
    return class extends Component {
        render (props) {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )    
        }       
    }
}
// alternate way to write this if you need a stateful component

export default withClass2;