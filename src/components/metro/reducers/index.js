/**
 * Created by TabTang on 2017/2/22.
 */

const initState = {
    row:12
}
export default function metro(state = initState , action) {
    switch(action.type){
        case "ADD":
            console.log('add')

        default:
            return state
    }
}