const initiValue={
    user:null
}
const Reducer=(state=initiValue, action)=>{
    switch(action.type){
        case "USER_LOGIN":
            return{
                user:action.payload
            }
        default: 
            return state;     
    }
}

export default Reducer