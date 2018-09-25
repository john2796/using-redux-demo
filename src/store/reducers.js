import * as actionTypes from "./actions";

const initialState = {
  person: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const newPerson = {
        id: Math.random(), //not really uniuque but will work for demo
        name: "Max",
        age: Math.floor(Math.random() * 40)
      };
      return {
        ...state,
        person: state.person.concat(newPerson)
      };
    case actionTypes.DELETE:
      return {
        ...state,
        person: state.person.filter(person => person.id !== action.personId)
      };
    default:
      return state;
  }
};

export default reducer;
