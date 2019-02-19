import React, { Component } from 'react';

class TableRow extends Component {
    // Aqui defines la llamada a la funcion this.handleDelete que le has pasado por props en app.js y le pasas la prop name a dicha funcion
    delete = () => {
          this.props.onDelete(this.props.name)
    }
    render() {
        return (
            <tr>
                <td><img height="100" src={this.props.pictureUrl} alt={this.props.name}/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button onClick={ this.delete }>Delete</button></td>
            </tr>
        );
    }
}


export default TableRow; // -> import App from './app'
// export const someVar = () => {}; // import { someVar } from './App';




