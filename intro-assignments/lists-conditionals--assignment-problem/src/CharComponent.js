import React, {Component} from 'react';

class CharComponent extends Component {
    render(){
        return (
            <div className="char" index={this.props.index} onClick={this.props.onClick}>
                {this.props.char}
            </div>
        );    
    }
}

export default CharComponent;