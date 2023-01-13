import {R_SUCESS , R_FAILURE} from '../constance/restuarentConstance'

export const restuarentListReducer = (state = {resturentList:[]},action)=>{
    
    console.log(action.type);
    
    switch(action.type){
        case R_SUCESS:
            return{
                resturentList:action.payload
                
            }
        case R_FAILURE:
            return{
                resturentList:action.error
            }    
        default:
            return state;    
    }
}