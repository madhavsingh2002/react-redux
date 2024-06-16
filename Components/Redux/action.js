import { ADD_TO_CAST, REMOVE_TO_CAST } from "../../constants";
export function addToCast(item){
    return{
        type: ADD_TO_CAST,
        data: item
    }
}
export function removeToCast(item){
    return{
        type: REMOVE_TO_CAST,
        data: item
    }
}