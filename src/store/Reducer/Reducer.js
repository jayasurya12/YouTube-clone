const initiValue={
    user:{
        name:'jai'
    }
}
console.log(initiValue.user);
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