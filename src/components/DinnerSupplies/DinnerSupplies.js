import React, { Component } from 'react';

class DinnerSupplies extends Component {
    render() {
        return (
            <>
        <h2>Dinner Supplies</h2>
        <div>
          Spoons: {this.props.guestList.length * 2}
        </div>
        <div>
          Forks: {this.props.guestList.length * 2}
        </div>
        <div>
          Knives: {this.props.guestList.length * 2}
        </div>
        </>
        );
    }


}
export default DinnerSupplies