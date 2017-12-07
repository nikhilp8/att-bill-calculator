import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: "",
      venki: "",
      goli: "",
      nikhil: "",
      pinky: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    this.setState({
      venki: parseFloat(this.state.venkiInit - 75 + 15.75 - 3).toFixed(2),
      goli: parseFloat(this.state.goliInit - 5.25 + 25 + 1).toFixed(2),
      nikhil: parseFloat(this.state.nikhilInit - 5.25 + 25 + 1).toFixed(2),
      pinky: parseFloat(this.state.pinkyInit - 5.25 + 25 + 1).toFixed(2)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">ATT BILL</div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Final Amount</th>
            </tr>
            <tr>
              <td>Venki</td>
              <td>
                <input
                  type="text"
                  name="venkiInit"
                  defaultValue={this.state.initialValue}
                  onChange={this.handleChange}
                />
              </td>
              <td>{this.state.venki}</td>
            </tr>
            <tr>
              <td>Goli</td>
              <td>
                <input
                  type="text"
                  name="goliInit"
                  defaultValue={this.state.initialValue}
                  onChange={this.handleChange}
                />
              </td>
              <td>{this.state.goli}</td>
            </tr>
            <tr>
              <td>Nikhil</td>
              <td>
                <input
                  type="text"
                  name="nikhilInit"
                  defaultValue={this.state.initialValue}
                  onChange={this.handleChange}
                />
              </td>
              <td>{this.state.nikhil}</td>
            </tr>
            <tr>
              <td>Pinky</td>
              <td>
                <input
                  type="text"
                  name="pinkyInit"
                  defaultValue={this.state.initialValue}
                  onChange={this.handleChange}
                />
              </td>
              <td>{this.state.pinky}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <input
            className="button"
            type="button"
            value="submit"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
