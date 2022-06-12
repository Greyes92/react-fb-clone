// what the initial data layer looks like if there is no user
export const initialState = {
     user: null,
};

//variable that creates an action to set a user to the data layer
export const actionTypes = {
     SET_USER: "SET_USER",
};

//create a reducer function which takes in the state of the data layer and actions
//returns data with user info if a user is set into the data layer
//else returns the default state of the data if no user is set
const reducer = (state, action) => {
     console.log(action);
     switch (action.type) {
          case actionTypes.SET_USER:
               return {
                    ...state,
                    user: action.user,
               };
          
               default:
                    return state;
     }
};

//export the reducer function
export default reducer;