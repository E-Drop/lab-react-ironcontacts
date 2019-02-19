import React, { Component } from 'react';
import contacts from './data/contacts.json'
import './App.css';
import TableRow from './components/TableRow';

const firstFive = contacts.slice(0, 5);
class App extends Component {
  state = {
      data: firstFive,
  }

  handleContact = () =>{
    var num = Math.floor(Math.random() * contacts.length);
    this.setState(({
      data: [...this.state.data, contacts[num]]
    }))
  }
  handleSortByName = () => {
    let aux = this.state.data.slice();
    aux.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({
      data: aux,
    })
  }
  // Aqui definimos que hacer con el state, cuando el componente llame a esta funcion y nos devuelva la prop name de la instancia clicada
  handleDelete = (name) => {
    let {data} = this.state;
    const filteredData = data.filter(item => item.name !== name);
    this.setState({
      data: filteredData,
    })
  }
  handleSortByPopularity = () => {
    let {data} = this.state;
    data.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0));
    this.setState({
      data: [...data],
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleContact}>Add contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
        <table>
          <tbody>
            <tr><td>Picture</td><td>Name</td><td>Popularity</td><td>Action</td></tr>
            {this.state.data.map((item,index) =>
              <TableRow key={index} pictureUrl={item.pictureUrl} name={item.name} popularity={item.popularity} onDelete={this.handleDelete} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;