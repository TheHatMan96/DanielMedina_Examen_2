import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.CHANGE_CODE:{
      console.log(action);
      let newState = _.cloneDeep(state);
      if(state.code==="Bienvenido" ){
      newState.code="Weather App";
     
      }
     else{
       newState.code="Bienvenido"; 
      }
      return newState
    }
    case ACTIONS.Types.CHANGE_CODE2:{
      console.log(action);
      let newState = _.cloneDeep(state);
      if(state.code2==="Weather App" ){
      newState.code2="Bienvenido";
     
      }
     else{
       newState.code2="Weather App"; 
      }
      return newState
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;