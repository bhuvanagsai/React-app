const redux = require('redux');

const createStore  = redux.createStore;

const initialState  =  {
    auth : 0
}
//Reducer
const rootReducer = (state = initialState , action) =>{
    if(action.type  === 'LOGIN'){
        return{
            ...state,
            auth : 1
        };
    }
    if(action.type  === 'SIGNUP'){
        return{
            ...state,
            auth : 4
        };
    }
    return state;
}
//Store

const store =  createStore(rootReducer);
console.log(store.getState());

//Subscription

store.subscribe (() =>{
    console.log('[Subscription]', store.getState());
});
//Dispatch Actions
store.dispatch({type : 'SIGNUP'});
store.dispatch({type : 'LOGIN'});
console.log(store.getState());