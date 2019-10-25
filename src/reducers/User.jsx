const userPrevState =[]
export default (state = userPrevState, action) =>{
switch(action.type){
case "ADD_USER":
return[...state, action.users]
default:
return state
    }
}