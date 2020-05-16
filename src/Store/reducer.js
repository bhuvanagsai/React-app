const initialState = {
    LoggedIn : sessionStorage.getItem("auth"),
}

const reducer = (state = initialState , action) =>{
    if(action.type  === 'LOGIN'){
        return{
            LoggedIn : sessionStorage.getItem("auth"),
        };
    }
    return state;
}
export default reducer;