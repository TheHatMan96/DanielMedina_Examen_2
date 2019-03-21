// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    CHANGE_CODE: "CHANGE_CODE",
    CHANGE_CODE2:"CHANGE_CODE2"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  const changeCode=(code)=>({
    type: Types.CHANGE_CODE,
    payload: code
  })
  const changeCode2=(code2)=>({
    type: Types.CHANGE_CODE2,
    payload: code2
  })

  export default {
    createItem,
    deleteItem,
    changeCode,
    changeCode2,
    Types
  };