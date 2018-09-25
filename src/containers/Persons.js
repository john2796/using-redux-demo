import React, { Component } from "react";
//redux
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateTopProps = state => {
  return {
    //you need this so you can access state by this.props.ctr
    prs: state.person
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedPerson: () =>
      dispatch({
        type: actionTypes.ADD
      }),
    onRemovedPerson: id =>
      dispatch({
        type: actionTypes.DELETE,
        personId: id
      })
  };
};

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Persons);
